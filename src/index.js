const findImports = (input) => {
  const regex = (/from\s+['"](.+)['"]/g)
  const allMatches = []
  let match
  while (match = regex.exec(input)) {
    allMatches.push(match[1])
  }
  return allMatches
}

const findRequires = (input) => {
  const regex = (/require\(['"](.+)['"]\)/g)
  const allMatches = []
  let match
  while (match = regex.exec(input)) {
    allMatches.push(match[1])
  }
  return allMatches
}

module.exports = (input) => {
  const allMatches = [
    ...findImports(input),
    ...findRequires(input),
  ]
  return allMatches.sort()
}
