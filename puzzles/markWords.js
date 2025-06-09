const markWords = (str, amountOfSymbols) => {
  const arr = str.split(' ');
  let resultHtml = '';
  arr.forEach((word) => {
    if (word.length > amountOfSymbols) {
      resultHtml += '<span class="marked">' + `${word}` + '</span>' + ' ';
    } else {
      resultHtml += word + ' ';
    }
  });
  return resultHtml;
}

const markedStr = markWords(str, 8);
document.getElementById('text-container').innerHTML = markedStr;
