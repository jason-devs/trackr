// Helper function to convert a string to a specified case
export function convertCase(str, caseType) {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }

  // Normalize caseType to lowercase and remove spaces
  const normalizedCaseType = caseType.replace(/\s+/g, "").toLowerCase();

  switch (normalizedCaseType) {
    case "camelcase":
      return str
        .toLowerCase()
        .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) =>
          index === 0 ? match.toLowerCase() : match.toUpperCase(),
        )
        .replace(/\s+/g, "");
    case "snakecase":
      return str.toLowerCase().replace(/\s+/g, "_");
    case "kebabcase":
      return str.toLowerCase().replace(/\s+/g, "-");
    case "pascalcase":
      return str
        .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, match => match.toUpperCase())
        .replace(/\s+/g, "");
    case "uppercase":
      return str.toUpperCase().replace(/\s+/g, "_");
    case "lowercase":
      return str.toLowerCase();
    default:
      throw new Error("Invalid case type specified");
  }
}
