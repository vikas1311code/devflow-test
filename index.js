// Risk Score Calculator
function calculateRiskScore(filesChanged, additions, deletions) {
  if (typeof filesChanged !== 'number' || filesChanged < 0) {
    filesChanged = 0;
  }
  if (typeof additions !== 'number' || additions < 0) {
    additions = 0;
  }
  if (typeof deletions !== 'number' || deletions < 0) {
    deletions = 0;
  }

  const diffSize = additions + deletions;
  const fileWeight = filesChanged * 10;
  const diffWeight = Math.min(diffSize / 10, 50);
  return Math.min(Math.round(fileWeight + diffWeight), 100);
}

module.exports = { calculateRiskScore };