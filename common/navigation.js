function addArrowNavigation(backPageBtn, nextPageBtn) {
    document.addEventListener('keydown', (e) => {
        if (e.repeat) {
            return;
        }

        if (e.key === 'ArrowLeft') {
            backPageBtn?.click();
        } else if (e.key === 'ArrowRight') {
            nextPageBtn?.click();
        }
    });
}
