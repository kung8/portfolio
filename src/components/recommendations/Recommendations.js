import React, { useEffect, useState } from 'react';
import { NonDashboardPage } from '../Page';
import { useGetData } from '../../hooks';
import { BookRecommendations } from './BookRecommendations';
import { RestaurantRecommendations } from './RestaurantRecommendations';

export const Recommendations = () => {
    const isLoaded = true;
    const { data = [] } = useGetData('recommendations');
    const [selectedCategory, setSelectedCategory] = useState(null);

    const getCategoryProps = (category) => {
        const categoryData = data.find(item => item.category === category);
        return categoryData ?? { category: 'No Category', reviews: [], recommendations: [] };
    }

    const categories = data.map(item => item.category);

    useEffect(() => {
        if (categories.length > 0 && !selectedCategory) {
            setSelectedCategory(categories[0]);
        }
        // eslint-disable-next-line
    }, [categories]);

    useEffect(() => {
        const handleScroll = () => {
            const categoriesContainer = document.querySelector('.categories');
            const top = categoriesContainer.getBoundingClientRect().top;
            if (top === 0) {
                categoriesContainer.classList.add('scrolled-categories');
            } else {
                categoriesContainer.classList.remove('scrolled-categories');
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
        // eslint-disable-next-line
    }, [])

    return (
        <NonDashboardPage mainClassName={`recommendations ${isLoaded ? '' : 'isLoading'}`}>
            <NonDashboardPage.Header title='Recommendations / Reviews' />
            <div className="categories">
                {categories.map((category, index) => (
                    <h3
                        key={category + '-' + index}
                        className={`category ${selectedCategory === category ? 'selected' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </h3>
                ))}
            </div>
            {selectedCategory === 'Books' && <BookRecommendations {...getCategoryProps('Books')} />}
            {selectedCategory === 'Restaurants' && <RestaurantRecommendations {...getCategoryProps('Restaurants')} />}
            {/* 
                This will have all the different categories of recommendations.
                I need to think through how to display this information.
                Will this direct them off this page into another page or can they see the information here?  
            */}
        </NonDashboardPage>
    )
}