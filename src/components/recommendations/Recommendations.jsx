import { useEffect, useState } from 'react';

import { useGetData } from '../../hooks';
import { NonDashboardPage } from '../Page';
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

    const getBookReviews = () => {
        const foundData = data.find(item => item.category === 'Books')?.reviews || [];
        const reviews = foundData.filter(item => item.date !== "NO DATE").sort((a, b) => {
            if (a.date === 'In Progress') return -1;
            const splitA = a.date.split('/');
            const splitB = b.date.split('/');
            const monthA = parseInt(splitA[0]);
            const monthB = parseInt(splitB[0]);
            const dayA = parseInt(splitA[1]);
            const dayB = parseInt(splitB[1]);
            const yearA = parseInt(splitA[2]);
            const yearB = parseInt(splitB[2]);
            if (yearA !== yearB) {
                return yearB - yearA;
            } else if (monthA !== monthB) {
                return monthB - monthA;
            }
            return dayB - dayA;
        });
        const recommendations = foundData.filter((item) => item.date === "NO DATE");
        return { category: 'Books', reviews, recommendations };
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
            const headingContainer = document.querySelector('.heading-container');
            const scrollHeight = headingContainer.getBoundingClientRect().bottom;
            if (scrollHeight > -40) {
                categoriesContainer.classList.remove('scrolled-categories');
            } else {
                categoriesContainer.classList.add('scrolled-categories');
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
        // eslint-disable-next-line
    }, [])

    return (
        <NonDashboardPage mainClassName={`recommendations ${isLoaded ? '' : 'isLoading'}`}>
            <NonDashboardPage.Header title='Reviews' />
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
            {selectedCategory === 'Books' && <BookRecommendations {...getBookReviews()} />}
            {selectedCategory === 'Restaurants' && <RestaurantRecommendations {...getCategoryProps('Restaurants')} />}
            {/* 
                This will have all the different categories of recommendations.
                I need to think through how to display this information.
                Will this direct them off this page into another page or can they see the information here?  
            */}
        </NonDashboardPage>
    )
}