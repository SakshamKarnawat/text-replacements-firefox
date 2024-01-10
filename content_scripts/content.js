browser.storage.local.get('replacements').then((data) => {
    const replacements = data.replacements || [];
    document.addEventListener('input', function (event) {
        replacements.forEach(replacement => {
            if (event.target.value === replacement.key) {
                event.target.value = replacement.value;
            }
        });
    });
});