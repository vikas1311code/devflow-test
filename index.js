
// Risk Score Calculator
function calculateRiskScore(filesChanged, additions, deletions) {
  const diffSize = additions + deletions;
  const fileWeight = filesChanged * 10;
  const diffWeight = Math.min(diffSize / 10, 50);
  return Math.min(Math.round(fileWeight + diffWeight), 100);
}

module.exports = { calculateRiskScore };
