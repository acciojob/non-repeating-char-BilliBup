//your JS code here. If required.
function characterRepeat(str) {
  for (var i = 0; i < str.length; i++) {
    if (str.indexOf(str.charAt(i)) == str.lastIndexOf(str.charAt(i))) {
      return str.charAt(i);
    }
  }
}