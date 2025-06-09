const ps = document.querySelectorAll('p');
const link = document.createElement('a');
link.href = 'https://google.com.ua';
link.text = 'Link'
ps[0].insertAdjacentElement('afterend', link);
