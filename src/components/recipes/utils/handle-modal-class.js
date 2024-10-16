export const handleModalClass = (show, trayClass, overlayId, delayed = false) => {
    const rootId = document.getElementById('root');
    const isMobile = window.screen.width < 768;
    const tray = document.querySelector(trayClass);
    const overlay = document.getElementById(overlayId);
    const html = document.querySelector('html');

    if (show) {
        if (rootId) {
            rootId.style.overflowY = 'hidden';
            rootId.style.height = isMobile ? 'calc(100vh - 108px)' : '100vh';
        }
        if (tray) tray.classList.add('opened');
        if (html) html.style.overflowY = 'hidden';
        if (overlay) overlay.classList.add('opened');
    } else {
        if (rootId) {
            rootId.style.overflowY = '';
            rootId.style.height = '';
        }
        if (tray) {
            tray.classList.remove('opened');
            tray.classList.add('closed');
            if (html) html.style.overflowY = '';
            if (!delayed && overlay) overlay.classList.remove('opened');
            setTimeout(() => {
                tray.classList.remove('closed');
                if (delayed && overlay) overlay.classList.remove('opened');
            }, 1000);
        }
    }
}