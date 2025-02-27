obfuscate = function (email) {
  const [username, domain] = email.split("@");
  const obfuscatedDomain = domain.split(".").join(" [dot] ");

  return `${username} [at] ${obfuscatedDomain}`;
};

console.log(obfuscate("user_name@example.com")); //Output: 'user_name [at] example [dot] com'
