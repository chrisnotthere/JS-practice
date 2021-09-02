function cipher(string, shift){

  return string.replace(/[a-zA-Z]/g, (char) => 
    String.fromCharCode(((char.charCodeAt() - 97 + shift) % 26) + 97)
  );
};

module.exports = cipher;
