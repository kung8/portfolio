export const handleModalClass = (trayClass, overlayId) => {
    const rootId = document.getElementById('root');
    const isMobile = window.screen.width < 768;
    const tray = document.querySelector(trayClass);
    const overlay = document.getElementById(overlayId);
    const html = document.querySelector('html');

    const handleOpen = () => {
        if (tray) tray.classList.add('opened');
        if (rootId) rootId.style.overflowY = 'hidden';
        if (rootId) rootId.style.height = isMobile ? 'calc(100vh - 108px)' : '100vh';
        if (html) html.style.overflowY = 'hidden';
        if (overlay) overlay.classList.add('opened');
    }

    const handleClose = () => {
        if (tray) tray.classList.remove('opened');
        if (tray) tray.classList.add('closed');
        setTimeout(() => {
            if (overlay) overlay.classList.remove('opened');
            if (rootId) rootId.style.height = 'unset';
            if (rootId) rootId.style.overflowY = 'unset';
            if (rootId) rootId.style.position = 'unset';
            if (html) html.style.overflowY = 'unset';
            if (tray) tray.classList.remove('closed');
        }, 500);
    }

    return { handleOpen, handleClose };
}