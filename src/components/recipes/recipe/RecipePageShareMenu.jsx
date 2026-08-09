import { useRecipeShareMenu } from '../hooks/use-recipe-share-menu';
import shareIcon from '../../../Assets/send.png';

export const RecipePageShareMenu = ({ isLoaded, item }) => {
    const {
        copyLinkLabel,
        handleShareAction,
        recipeName,
        setShowShareMenu,
        shareMenuRef,
        showShareMenu,
    } = useRecipeShareMenu({ item });

    const handleDownloadPdf = () => {
        if (!isLoaded) return;

        setShowShareMenu(false);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                window.print();
            });
        });
    };

    return (
        <div className="recipe-page-share-menu-container" ref={shareMenuRef}>
            <button
                aria-label={`Share ${recipeName}`}
                aria-expanded={showShareMenu}
                aria-haspopup="menu"
                className={`recipe-page-share-menu-button ${showShareMenu ? 'open' : ''}`}
                onClick={(event) => {
                    event.stopPropagation();
                    setShowShareMenu(value => !value);
                }}
                type="button"
            >
                <img alt="" aria-hidden="true" className="recipe-page-share-menu-icon" src={shareIcon} />
            </button>

            {showShareMenu && (
                <div
                    className="recipe-page-share-popover"
                    onClick={(event) => event.stopPropagation()}
                    role="menu"
                >
                    <button disabled={!isLoaded} onClick={handleDownloadPdf} role="menuitem" type="button">Print Compact Recipe</button>
                    <button onClick={() => handleShareAction('copy')} role="menuitem" type="button">{copyLinkLabel}</button>
                    <button onClick={() => handleShareAction('share')} role="menuitem" type="button">Share</button>
                </div>
            )}
        </div>
    );
};
