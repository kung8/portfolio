export const handleModalClass = (trayClass, overlayId) => {
    const rootId = document.getElementById('root');
    const isMobile = window.screen.width < 768;
    const tray = document.querySelector(trayClass);
    const overlay = document.getElementById(overlayId);
    const html = document.querySelector('html');
    const body = document.body;

    const handleOpen = () => {
        const currentScrollY = window.scrollY || window.pageYOffset || 0;

        if (tray) tray.classList.add('opened');
        if (rootId) rootId.style.overflowY = 'hidden';
        if (rootId) {
            if (isMobile) {
                rootId.style.height = 'calc(100vh - 108px)';
            } else {
                rootId.style.height = '100vh';
            }
        }
        if (html) html.style.overflowY = 'hidden';
        if (body) {
            body.dataset.modalScrollY = String(currentScrollY);
            body.style.overflowY = 'hidden';
            body.style.position = 'fixed';
            body.style.top = `-${currentScrollY}px`;
            body.style.width = '100%';
            body.style.left = '0';
            body.style.right = '0';
        }
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
            if (body) {
                const storedScrollY = Number(body.dataset.modalScrollY || 0);
                body.style.overflowY = 'unset';
                body.style.position = 'unset';
                body.style.top = 'unset';
                body.style.width = 'unset';
                body.style.left = 'unset';
                body.style.right = 'unset';
                delete body.dataset.modalScrollY;
                window.scrollTo(0, storedScrollY);
            }
            if (tray) tray.classList.remove('closed');
        }, 500);
    }

    return { handleOpen, handleClose };
}