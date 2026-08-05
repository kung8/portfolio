import { useEffect, useRef, useState } from 'react';

import { baseUrl, getRecipeRoute } from '../utils';

const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
};

export const useRecipeShareMenu = ({ item }) => {
    const [showShareMenu, setShowShareMenu] = useState(false);
    const [copyLinkLabel, setCopyLinkLabel] = useState('Copy Link');
    const shareMenuRef = useRef(null);
    const copyLabelResetTimeoutRef = useRef(null);

    const sharedUrl = `${baseUrl}${getRecipeRoute(item)}`;
    const recipeName = item?.name ?? '';
    const sharedText = `Check out Kevin's "${recipeName}" recipe at ${sharedUrl}.`;

    useEffect(() => {
        if (!showShareMenu) return;

        const closeOnOutsideClick = (event) => {
            if (!shareMenuRef.current?.contains(event.target)) {
                setShowShareMenu(false);
            }
        };

        const closeOnEscape = (event) => {
            if (event.key === 'Escape') {
                setShowShareMenu(false);
            }
        };

        document.addEventListener('mousedown', closeOnOutsideClick);
        document.addEventListener('touchstart', closeOnOutsideClick);
        document.addEventListener('keydown', closeOnEscape);

        return () => {
            document.removeEventListener('mousedown', closeOnOutsideClick);
            document.removeEventListener('touchstart', closeOnOutsideClick);
            document.removeEventListener('keydown', closeOnEscape);
        };
    }, [showShareMenu]);

    useEffect(() => {
        return () => {
            if (copyLabelResetTimeoutRef.current) {
                clearTimeout(copyLabelResetTimeoutRef.current);
            }
        };
    }, []);

    const setCopyLabelWithReset = (value) => {
        setCopyLinkLabel(value);

        if (copyLabelResetTimeoutRef.current) {
            clearTimeout(copyLabelResetTimeoutRef.current);
        }

        copyLabelResetTimeoutRef.current = setTimeout(() => {
            setCopyLinkLabel('Copy Link');
        }, 1500);
    };

    const handleCopyLink = async () => {
        try {
            if (navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(sharedUrl);
            } else {
                const textArea = document.createElement('textarea');
                textArea.value = sharedUrl;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                textArea.remove();
            }

            setCopyLabelWithReset('Copied!');
        } catch (error) {
            setCopyLabelWithReset('Copy Failed');
        }
    };

    const handleShareAction = async (type) => {
        const encodedShareUrl = encodeURIComponent(sharedUrl);
        const encodedShareText = encodeURIComponent(sharedText);

        if (type === 'copy') {
            await handleCopyLink();
            return;
        }

        if (type === 'facebook') {
            openInNewTab(`https://www.facebook.com/sharer/sharer.php?u=${encodedShareUrl}`);
        }

        if (type === 'text-message') {
            window.location.href = `sms:?&body=${encodedShareText}`;
        }

        if (type === 'instagram') {
            if (navigator.share) {
                try {
                    await navigator.share({
                        title: recipeName,
                        text: sharedText,
                        url: sharedUrl,
                    });
                } catch (error) {
                    // No-op: user canceled native share picker.
                }
            } else {
                await handleCopyLink();
                openInNewTab('https://www.instagram.com/');
            }
        }

        if (type === 'whatsapp') {
            openInNewTab(`https://wa.me/?text=${encodedShareText}`);
        }

        setShowShareMenu(false);
    };

    return {
        copyLinkLabel,
        handleShareAction,
        recipeName,
        setShowShareMenu,
        shareMenuRef,
        showShareMenu,
    };
};
