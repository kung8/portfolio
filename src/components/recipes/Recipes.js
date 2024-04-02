import React, { useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
import { useGetData, useGetRecipeCategories } from '../../hooks';
import { convertToKebabCase } from '../../utils';
import { RecipeItem } from './RecipeItem';
import { Loader } from '../Loader';
import { RecipeFilterContainer } from './RecipeFilterContainer';
import top from './top.png';

const initialShownFilters = {
    category: false,
    diet: false,
    genre: false,
    method: false,
    protein: false,
    type: false,
};

export const Recipes = ({ history }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const queryClient = useQueryClient();
    const queryKey = ['getData', 'recipes', undefined];
    const cache = queryClient.getQueryData(queryKey)?.data?.length;
    const [search, setSearch] = useState('');

    const [show, setShow] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState({
        category: [],
        diet: [],
        genre: [],
        method: [],
        protein: [],
        type: [],
    });
    const [shownFilters, setShownFilters] = useState(initialShownFilters);

    const [showArrow, setShowArrow] = useState(false);

    const { data: recipes = [] } = useGetData('recipes');
    const { data: recipeCategories = { CATEGORIES: {}, DIET: {}, GENRES: {}, METHODS: {}, PROTEIN: {}, TYPES: {} } } = useGetRecipeCategories();
    const categories = Object.values(recipeCategories.CATEGORIES);
    // const diet = Object.values(recipeCategories.DIET);
    const genres = Object.values(recipeCategories.GENRES);
    const methods = Object.values(recipeCategories.METHODS);
    const protein = Object.values(recipeCategories.PROTEIN);
    const types = Object.values(recipeCategories.TYPES);

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
            setSearch('');
        }
        // eslint-disable-next-line
    }, []);

    const filterMapping = [
        { heading: 'Categories', type: 'category', filterOptions: categories },
        { heading: 'Genres', type: 'genre', filterOptions: genres },
        // { heading: 'Diet', type: 'diet', filterOptions: diet },
        { heading: 'Cooking Methods', type: 'method', filterOptions: methods },
        { heading: 'Proteins', type: 'protein', filterOptions: protein },
        { heading: 'Type', type: 'type', filterOptions: types },
    ];

    const resetShownFilters = () => {
        setShownFilters(initialShownFilters);
        setShow(false);
    }

    const filterRecipeBySelectedFilters = (compared, filter) => {
        return compared.some(value => filter.find(v => v === value))
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrollHeight = window.scrollY;
            if (scrollHeight > 300) setShowArrow(true);
            else setShowArrow(false);
            setShow(false);
        })
    }, []);

    return (
        <div className={`recipes page ${isLoaded ? '' : 'isLoading'}`} onClick={resetShownFilters}>
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
                    <div className="filter-icon" onClick={(e) => {
                        e.stopPropagation();
                        setShow(!show)
                    }}>
                        <div className="top-bar"></div>
                        <div className="middle-bar"></div>
                        <div className="bottom-bar"></div>
                    </div>
                </div>
            </div>

            {show && (
                <div className="filters-container" onClick={(e) => {
                    e.stopPropagation();
                    setShownFilters(initialShownFilters);
                }}>
                    {filterMapping.map((option =>
                        <RecipeFilterContainer
                            key={option.heading}
                            {...{ ...option, selectedFilters, setSelectedFilters, shownFilters, setShownFilters }} />
                    ))}
                </div>
            )}

            {filteredRecipes.length && isLoaded ? (
                <div className="recipe-items-container">
                    {filteredRecipes.filter(item => !!item.available).filter(item => {
                        const { category, diet, genre, method, protein, type } = selectedFilters;
                        return (
                            (!category.length || filterRecipeBySelectedFilters(item.category || [], category)) &&
                            (!diet.length || filterRecipeBySelectedFilters(item.diet || [], diet)) &&
                            (!genre.length || filterRecipeBySelectedFilters(item.genre || [], genre)) &&
                            (!method.length || filterRecipeBySelectedFilters(item.method || [], method)) &&
                            (!protein.length || filterRecipeBySelectedFilters(item.protein || [], protein)) &&
                            (!type.length || filterRecipeBySelectedFilters(item.type || [], type))
                        );
                    }).map((item) =>
                        <RecipeItem key={item.name} item={item} onClick={() => history.push('/recipes/' + convertToKebabCase(item.name))} />
                    )}
                </div>
            ) : (
                <div className="loader-container">
                    <Loader />
                </div>
            )}

            {showArrow && (
                <div
                    className="back-to-top-arrow"
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                >
                    <img src={top} alt="top" />
                </div>
            )}
        </div>
    )
}

/*
    TODO: add icons on the thumbnails
*/