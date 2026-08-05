import { useEffect, useRef, useState } from 'react';

import { baseUrl, getRecipeRoute } from '../utils';

export const useRecipeShareMenu = ({ item }) => {
    const [showShareMenu, setShowShareMenu] = useState(false);
    const [copyLinkLabel, setCopyLinkLabel] = useState('Copy Link');
    const shareMenuRef = useRef(null);
    const copyLabelResetTimeoutRef = useRef(null);

    const sharedUrl = `${baseUrl}${getRecipeRoute(item)}`;
    const recipeName = item?.name ?? '';

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

    const openNativeShareSheet = async () => {
        if (!navigator.share) return false;

        try {
            await navigator.share({
                title: recipeName,
                url: sharedUrl,
            });
            setShowShareMenu(false);
            return true;
        } catch (error) {
            // If user cancels, do not force a fallback flow.
            if (error?.name === 'AbortError') {
                setShowShareMenu(false);
                return true;
            }
            return false;
        }
    };

    const handleShareAction = async (type) => {
        if (type === 'copy') {
            await handleCopyLink();
            return;
        }

        if (type === 'share') {
            const openedNativeSheet = await openNativeShareSheet();
            if (openedNativeSheet) {
                return;
            }

            await handleCopyLink();
            setShowShareMenu(false);
        }
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
