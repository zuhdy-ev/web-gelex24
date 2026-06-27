import { toPng } from 'html-to-image';
import { saveAs } from 'file-saver';

async function captureAndShare(elementRef) {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  if (isSafari && isiOS) {
    alert('Maaf, fitur ini belum tersedia pada device anda :(');
    return;
  }

  const node = elementRef.current;
  try {
    if (!node) {
      throw new Error('Element reference is not defined.');
    }

    node.style.display = 'block';

    const images = node.getElementsByTagName('img');
    const imagePromises = [];
    for (let i = 0; i < images.length; i++) {
      const img = images[i];
      if (!img.complete) {
        imagePromises.push(new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve; 
        }));
      }
    }

    await Promise.all(imagePromises);

    await new Promise((resolve) => setTimeout(resolve, 500));

    const dataUrl = await toPng(node);

    const response = await fetch(dataUrl);
    const blob = await response.blob();

    if (navigator.share) {
      const filesArray = [
        new File([blob], 'ukm-apakah-aku.png', {
          type: blob.type,
        }),
      ];
      await navigator.share({
        files: filesArray,
        title: 'UKM Apakah Aku? Gelanggang Expo 2024',
        text: 'Ternyata aku cocok dengan UKM ini! Temukan UKM apa yang cocok denganmu di https://ukm.ugm.ac.id/2024/gelex/ukm-apakah-aku/',
      });
    } else {
      saveAs(blob, 'ukm-apakah-aku.png');
      alert('Browser Anda tidak mendukung Web Share API. Hasil disimpan sebagai gambar.');
    }
  } catch (error) {
    console.error('Error: ', error);
  } finally {
    if (node) {
      node.style.display = 'none';
    }
  }
}

export default captureAndShare;