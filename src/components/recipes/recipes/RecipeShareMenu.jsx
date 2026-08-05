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
                        handleShareAction('text-message');
                    }} role="menuitem" type="button">Text Recipe</button>
                    <button onClick={(event) => {
                        event.stopPropagation();
                        handleShareAction('email');
                    }} role="menuitem" type="button">Email Recipe</button>
                    <button onClick={(event) => {
                        event.stopPropagation();
                        handleShareAction('facebook');
                    }} role="menuitem" type="button">Share to Facebook</button>
                    <button onClick={(event) => {
                        event.stopPropagation();
                        handleShareAction('instagram');
                    }} role="menuitem" type="button">Share to Instagram</button>
                    <button onClick={(event) => {
                        event.stopPropagation();
                        handleShareAction('whatsapp');
                    }} role="menuitem" type="button">Share to WhatsApp</button>
                </div>
            )}
        </div>
    );
};
