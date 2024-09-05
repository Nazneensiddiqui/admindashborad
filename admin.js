document.querySelector('aside ul').addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
        document.querySelector('main').innerHTML = `<h2>${e.target.textContent}</h2><p>Details about ${e.target.textContent}...</p>`;
    }
})