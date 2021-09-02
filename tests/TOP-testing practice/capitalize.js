function capitalize(string){
  if(!string.length) return '';

  return string.replace(string[0], string[0].toUpperCase());
}

module.exports = capitalize;
