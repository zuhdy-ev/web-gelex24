function calculateStandardDeviation(array) {
    const mean = array.reduce((a, b) => a + b, 0) / array.length;
    const variance = array.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) / array.length;
    return Math.sqrt(variance);
}

export default calculateStandardDeviation;