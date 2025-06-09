function deepCompare(o1, o2) {
  if (o1 === o2) return true;

  if (typeof o1 !== typeof o2) return false;

  if (o1 === null || o2 === null) return false;

  if (Array.isArray(o1) && Array.isArray(o2)) {
    if (o1.length !== o2.length) return false;
    for (let i = 0; i < o1.length; i++) {
      if (!deepCompare(o1[i], o2[i])) return false;
    }
    return true;
  }

  if (Array.isArray(o1) || Array.isArray(o2)) return false;

  if (typeof o1 === 'object' && typeof o2 === 'object') {
    const keys1 = Object.keys(o1);
    const keys2 = Object.keys(o2);

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
      if (!o2.hasOwnProperty(key)) return false;
      if (!deepCompare(o1[key], o2[key])) return false;
    }
    return true;
  }

  return false;
}
