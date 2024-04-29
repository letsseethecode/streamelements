// var elements = document.getElementsByClassName('highlight');
// for (var e of elements) {
//     highlight(e);
// }
var elements = document.getElementsByClassName('console');
for (var e of elements) {
    console(e);
}

function highlight(e) {
    let s = e.innerHTML
        .split('')
        .map(letter => `<span class="animated-letter wobble">${letter}</span>`)
        .join('');
    e.innerHTML = s;
}

function console(e) {
    let i = 0;
    s = (e.innerHTML + ' ')
        .split('')
        .map(c => `<span class="console__character" style="animation-delay: ${i += 100}ms">${c.replace(' ', '&nbsp;')}</span>`)
        .join('');
    e.innerHTML = s;
}
