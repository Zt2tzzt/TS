function toCamelCase(str: string): string {
  return str.replace(/-([a-z])/g, (match) => match[1].toUpperCase());
}

console.log(toCamelCase('sdfe-gsderg-rnejtgd'))