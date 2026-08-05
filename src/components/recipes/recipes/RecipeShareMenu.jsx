import { useRecipeShareMenu } from '../hooks/use-recipe-share-menu';

export const RecipeShareMenu = ({ item }) => {
    const {
        copyLinkLabel,
        handleShareAction,
        recipeName,
        setShowShareMenu,
        shareMenuRef,
        showShareMenu,
    } = useRecipeShareMenu({ item });

    return (
        <div className="recipe-share-menu-container" ref={shareMenuRef}>
            <button
                aria-label={`Share ${recipeName}`}
                aria-expanded={showShareMenu}
                aria-haspopup="menu"
                className={`recipe-share-menu-button ${showShareMenu ? 'open' : ''}`}
                onClick={(event) => {
                    event.stopPropagation();
                    setShowShareMenu(value => !value);
                }}
                type="button"
            >
                <span />
                <span />
                <span />
            </button>

            {showShareMenu && (
                <div
                    className="recipe-share-popover"
                    onClick={(event) => event.stopPropagation()}
                    role="menu"
                >
                    <button onClick={(event) => {
                        event.stopPropagation();
                        handleShareAction('copy');
                    }} role="menuitem" type="button">{copyLinkLabel}</button>
                    <button onClick={(event) => {
                        event.stopPropagation();
                        handleShareAction('share');
                    }} role="menuitem" type="button">Share</button>
                </div>
            )}
        </div>
    );
};
