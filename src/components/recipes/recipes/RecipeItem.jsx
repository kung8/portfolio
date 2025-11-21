export const RecipeItem = ({ item, onClick }) => {
    return (
        <div className="recipe-item-container" onClick={onClick}>
            {item.img ? (
                <img src={item.img ? item.img : null} alt={item.name} className="recipe-image" />
            ) : (
                <div className="recipe-image empty-recipe-image">
                    <p>Image Coming Soon!</p>
                </div>
            )}
            <div className="recipe-item-title-container">
                <h2 className="recipe-item-title">
                    {item.cardName}
                </h2>
            </div>
            {item.wip && (
                <div className="recipe-item-wip-container">
                    <span className="wip" />
                </div>
            )}
            {item.recommended && (
                <div className="recipe-item-recommended-container">
                    <span className="heart" />
                </div>
            )}
        </div>
    )
}