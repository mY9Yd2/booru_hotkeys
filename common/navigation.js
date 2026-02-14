function addArrowNavigation(backPageBtn, nextPageBtn) {
    document.addEventListener('keydown', (e) => {
        if (e.repeat || isInputFocused()) {
            return;
        }

        if (e.key === 'ArrowLeft' || e.key === 'a') {
            backPageBtn?.click();
        } else if (e.key === 'ArrowRight' || e.key === 'd') {
            nextPageBtn?.click();
        }
    });
}

function isInputFocused() {
    return document.activeElement &&
    [
        'input',
        'textarea'
    ].includes(document.activeElement.tagName.toLowerCase());
}
