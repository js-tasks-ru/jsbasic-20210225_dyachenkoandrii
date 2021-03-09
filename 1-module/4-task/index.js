function checkSpam(str) {
  let checkStr = str.toLowerCase();
  return checkStr.includes('1xbet') || checkStr.includes('xxx');
}

// checkSpam('1XbeT now')) === true;
