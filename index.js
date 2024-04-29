(function () {
    var elements = document.getElementsByClassName('console');
    for (var e of elements) {
        console(e);
    }

    function console(e) {
        s = (e.innerHTML + ' ')
            .split('')
            .map((c, i) => `<span class="console__character" style="animation-delay: ${i * 100}ms">${c.replace(' ', '&nbsp;')}</span>`)
            .join('');
        e.innerHTML = s;
    }
})();
