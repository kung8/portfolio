import { useRecipeShareMenu } from '../hooks/use-recipe-share-menu';

export const RecipePageShareMenu = ({ item }) => {
    const {
        copyLinkLabel,
        handleShareAction,
        recipeName,
        setShowShareMenu,
        shareMenuRef,
        showShareMenu,
    } = useRecipeShareMenu({ item });

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
                Share
            </button>

            {showShareMenu && (
                <div
                    className="recipe-page-share-popover"
                    onClick={(event) => event.stopPropagation()}
                    role="menu"
                >
                    <button onClick={() => handleShareAction('copy')} role="menuitem" type="button">{copyLinkLabel}</button>
                    <button onClick={() => handleShareAction('text-message')} role="menuitem" type="button">Text Recipe</button>
                    <button onClick={() => handleShareAction('facebook')} role="menuitem" type="button">Share to Facebook</button>
                    <button onClick={() => handleShareAction('instagram')} role="menuitem" type="button">Share to Instagram</button>
                    <button onClick={() => handleShareAction('whatsapp')} role="menuitem" type="button">Share to WhatsApp</button>
                </div>
            )}
        </div>
    );
};
