async function installPackages(packages) {
  if (!Array.isArray(packages) || packages.length === 0) {
    return { installed: [] };
  }
  // Simulate installation logic
  return { installed: packages };
}

module.exports = { installPackages };
