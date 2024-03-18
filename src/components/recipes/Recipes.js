import React, { useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
// import { Cursor } from '../Cursor';
import { 
    useGetData, 
    // useGetRecipeCategories
} from '../../hooks';
import { RecipeItem } from './RecipeItem';
import { Loader } from '../Loader';

export const Recipes = ({ history }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const queryClient = useQueryClient();
    const queryKey = ['getData', 'recipes', undefined];
    const cache = queryClient.getQueryData(queryKey)?.data?.length;
    const [search, setSearch] = useState('');
    // const [selectedFilters, setSelectedFilters] = useState([]);

    const { data: recipes = [] } = useGetData('recipes');
    // const { data: recipeCategories = { CATEGORIES: {}, GENRES: {} } } = useGetRecipeCategories();
    // const categories = Object.values(recipeCategories.CATEGORIES);
    // const genres = Object.values(recipeCategories.GENRES);
    // console.log(categories, genres);

    const filteredRecipes = recipes.filter(item => {
        if (search === '') return item;
        const searchValue = search.toLowerCase();
        if (
            item.name.toLowerCase().includes(searchValue) ||
            item.cardName.toLowerCase().includes(searchValue) ||
            item.ingredients.some(ingredient => ingredient.name.toLowerCase().includes(searchValue)) ||
            item.supplies.some(supply => supply.name.toLowerCase().includes(searchValue))
        ) return item;
        return null;
    })

    useEffect(() => {
        if (cache) {
            setIsLoaded(true);
        } else {
            setTimeout(() => {
                setIsLoaded(true);
            }, 3000);
        }
        return () => {
            setIsLoaded(false);
        }
        // eslint-disable-next-line
    }, []);

    // convert to kebab case
    const convertNameToId = (name) => name.toLowerCase().split(' ').join('-');

    return (
        <div className={`recipes page ${isLoaded ? '' : 'isLoading'}`}>
            <div className="heading-container">
                <div>
                    <span className='back-btn' onClick={() => history.push('/')}>
                        Back Home
                    </span>
                    <h1 className="heading">Recipes</h1>
                </div>
                <div className="search-and-filter-container">
                    <div className={`search-bar ${search ? 'contains-search' : ''}`}>
                        <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
                    </div>
                    {/* <div className="filter-icon">
                        <div className="top-bar"></div>
                        <div className="middle-bar"></div>
                        <div className="bottom-bar"></div>
                    </div> */}
                </div>
            </div>

            {/* <div className="filter-container">
                <h4>Category:</h4>
                <select id="category" name="category">
                    <option value="">All</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
                <div className="filter-btn-container">
                    {categories.map((category) => (
                        <span key={category} className="filter-btn">{category}</span>
                    ))}
                </div>
                <h4>Genre:</h4>
                <select id="genre" name="genre">
                    <option value="">All</option>
                    {genres.map((genre) => (
                        <option key={genre} value={genre}>{genre}</option>
                    ))}
                </select>
                <div className="filter-btn-container">
                    {genres.map((genre) => (
                        <span key={genre} className="filter-btn">{genre}</span>
                    ))}
                </div>
            </div> */}

            {filteredRecipes.length && isLoaded ? (
                <div className="recipe-items-container">
                    {filteredRecipes.filter(item => !!item.available).map((item) =>
                        <RecipeItem key={item.name} item={item} onClick={() => history.push('/recipes/' + convertNameToId(item.name))} />
                    )}
                </div>
            ) : (
                <div className="loader-container">
                    <Loader />
                </div>
            )}
            {/* <Cursor /> */}
        </div>
    )
}