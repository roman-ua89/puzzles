
var lengthOfLastWord = function(s) {
  return s.split(' ').filter(item => item).pop().length;
};

const s1 = "Hello World";
const res1 = lengthOfLastWord(s1);
console.log('res1', res1);

const s2 = "   fly me   to   the moon  ";
const res2 = lengthOfLastWord(s2);
console.log('res2', res2);

const s3 = "luffy is still joyboy";
const res3 = lengthOfLastWord(s3);
console.log('res3', res3);