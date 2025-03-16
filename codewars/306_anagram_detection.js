var isAnagram = function (test, original) {
  test = test.toLowerCase();
  original = original.toLowerCase();
  const charCountTest = {};
  const charCountOriginal = {};
  for (const char of test) {
    charCountTest[char] = (charCountTest[char] || 0) + 1;
  }
  for (const char of original) {
    charCountOriginal[char] = (charCountOriginal[char] || 0) + 1;
  }
  const sortedKeysTest = Object.keys(charCountTest).sort();
  const sortedKeysOriginal = Object.keys(charCountOriginal).sort();

  if (sortedKeysTest.length !== sortedKeysOriginal.length) {
    return false;
  }

  for (let i = 0; i < sortedKeysTest.length; i++) {
    if (
      sortedKeysTest[i] !== sortedKeysOriginal[i] ||
      charCountTest[sortedKeysTest[i]] !==
        charCountOriginal[sortedKeysOriginal[i]]
    ) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("listen", "silent")); // Output: true
