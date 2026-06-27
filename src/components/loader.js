// import PropTypes from 'prop-types'

// export function akamaiLoader({ src, width }) {
//   return `${process.env.NEXT_PUBLIC_BASE_URL}${src}?imwidth=${width}`
// }

// akamaiLoader.PropTypes = {
//   src: PropTypes.string.isRequired,
//   width: PropTypes.string.isRequired,
// }

// export default akamaiLoader

import PropTypes from 'prop-types'

export function akamaiLoader({ src, width }) {
  return `${src}?imwidth=${width}`
}

akamaiLoader.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
}

export default akamaiLoader

// import PropTypes from 'prop-types';

// export function akamaiLoader({ src, width }) {
//   // Check if the src is a remote URL (starts with http or https)
//   if (src.startsWith('http') || src.startsWith('https')) {
//     return `${src}?w=${width}`;
//   }

//   // Handle local assets
//   return `${process.env.NEXT_PUBLIC_BASE_URL}${src}?imwidth=${width}`;
// }

// akamaiLoader.propTypes = {
//   src: PropTypes.string.isRequired,
//   width: PropTypes.string.isRequired,
// };

// export default akamaiLoader;

// import PropTypes from 'prop-types';

// export function akamaiLoader({ src, width }) {
//   // Check if the src is a Google Drive ID
//   if (!src.startsWith('http') && !src.startsWith('https')) {
//     // Assume it's a Google Drive ID and construct the URL
//     if (src.length === 33) {
//       return `https://drive.google.com/uc?export=view&id=${src}&w=${width}`;
//     }

//     // Handle local assets
//     return `${process.env.NEXT_PUBLIC_BASE_URL}${src}?imwidth=${width}`;
//   }

//   // If the src is already a remote URL (starts with http or https)
//   return `${src}?w=${width}`;
// }

// akamaiLoader.propTypes = {
//   src: PropTypes.string.isRequired,
//   width: PropTypes.string.isRequired,
// };

// export default akamaiLoader;
