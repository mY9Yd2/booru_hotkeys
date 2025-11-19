function addArrowNavigation(backPageBtn, nextPageBtn) {
    document.addEventListener('keydown', (e) => {
        if (e.repeat || isInputFocused()) {
            return;
        }

        if (e.key === 'ArrowLeft') {
            backPageBtn?.click();
        } else if (e.key === 'ArrowRight') {
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
