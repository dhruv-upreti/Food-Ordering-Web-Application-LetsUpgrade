const generateSecretKey = (length = 32) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=';
    let secretKey = '';
    for (let i = 0; i < length; i++) {
      secretKey += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return secretKey;
  };
  
  const secretKey = generateSecretKey(32);
  
  module.exports = secretKey;
  