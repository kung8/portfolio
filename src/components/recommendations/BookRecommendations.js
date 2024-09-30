import React, { useEffect, useState } from 'react';
import { RecommendationPage, RecommendationContainer, ReviewContainer } from './RecommendationPage';
import { SearchBar } from '../search-bar/SearchBar';
import { Filter } from '../filter/Filter';
import { BookFilterContainer } from './BookFilterContainer';

const bookFilterOptions = {
    rating: {
        label: 'Rating',
        options: [
            { label: 'All', value: 'all' },
            { label: 'N/A', value: 'n/a' },
            { label: '1', value: 1 },
            { label: '1.5', value: 1.5 },
            { label: '2', value: 2 },
            { label: '2.5', value: 2.5 },
            { label: '3', value: 3 },
            { label: '3.5', value: 3.5 },
            { label: '4', value: 4 },
            { label: '4.5', value: 4.5 },
            { label: '5', value: 5 },
        ]
    },
    pageCount: {
        label: 'Page Count',
        options: [
            { label: 'All', value: 'all' },
            { label: '0 - 100', value: '0-100' },
            { label: '101 - 200', value: '101-200' },
            { label: '201 - 300', value: '201-300' },
            { label: '301 - 400', value: '301-400' },
            { label: '401 - 500', value: '401-500' },
            { label: '501 - 600', value: '501-600' },
            { label: '601 - 700', value: '601-700' },
            { label: '701 - 800', value: '701-800' },
            { label: '801 - 900', value: '801-900' },
            { label: '901 - 1000', value: '901-1000' },
            { label: '1001+', value: '1001+' },
        ]
    },
    date: {
        label: 'Date',
        options: [
            { label: 'All', value: 'all' },
            { label: 'N/A', value: 'NO DATE' },
            { label: '2024', value: 2024 },
            { label: '2023', value: 2023 },
            { label: '2022', value: 2022 },
            { label: '2020', value: 2020 },
        ]
    },
    // genre: {
    //     label: 'Genre',
    //     options: [
    //         { label: 'All', value: 'all' },
    //         { label: 'Mystery', value: 'mystery' },
    //         { label: 'Non-Fiction', value: 'non-fiction' },
    //         { label: 'Fantasy', value: 'fantasy' },
    //         { label: 'Sci-Fi', value: 'science-fiction' },
    //     ]
    // },
};

export const BookRecommendations = ({ category, reviews, recommendations }) => {
    const [search, setSearch] = useState('');
    const [showFilter, setShowFilter] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState({
        rating: 'all',
        pageCount: 'all',
        date: 'all',
        genre: 'all',
    });

    const getAuthor = (authors) => {
        return authors.reduce((acc, author, index) => {
            if (authors.length === 1) {
                return author;
            } else if (index === 0) {
                return author;
            }
            return index === authors.length - 1 ? `${acc} and ${author}` : `${acc}, ${author}`;
        }, '')
    }

    const getPageNumbers = (pages) => {
        const min = Math.min(...pages);
        const max = Math.max(...pages);
        return min === max ? min : `${min} - ${max}`;
    }

    const checkFilter = (review) => {
        let showReview = true;

        for (const key in selectedFilters) {
            if (selectedFilters[key] !== 'all') {
                if (key === 'date' && selectedFilters[key] !== 'NO DATE') {
                    const year = review.date.split('/')[1];
                    console.log(year);

                    showReview = `${selectedFilters[key]}`.includes(year);
                } else if (key === 'pageCount') {
                    const [min, max] = selectedFilters[key].split('-');
                    showReview = review.pageCount >= min && review.pageCount <= max;
                } else {
                    showReview = review[key] === selectedFilters[key];
                }
            }
            if (!showReview) break;
        }

        return showReview;
    }

    const checkSearch = (review) => review.title.toLowerCase().includes(search.toLowerCase()) ||
        review.author.some(author => author.toLowerCase().includes(search.toLowerCase())) ||
        review.date.toLowerCase().includes(search.toLowerCase())

    const displayedReviews = reviews.filter(review => checkFilter(review) && (!search || checkSearch(review)));

    const displayedRecommendations = recommendations.filter(recommendation => checkFilter(recommendation) && (!search || checkSearch(recommendation)));

    useEffect(() => {
        const rootId = document.getElementById('root');
        if (showFilter) {
            rootId.style.overflowY = 'hidden';
            rootId.style.height = '100vh';
        } else {
            rootId.style.overflowY = '';
            rootId.style.height = '';
        }
        // eslint-disable-next-line
    }, [showFilter]);

    return (
        <RecommendationPage>
            <RecommendationPage.SectionTitle category={category} type="Reviews" />
            <div style={{ marginBottom: 24, display: 'flex', alignItems: 'center', columnGap: 16, justifyContent: 'flex-end' }}>
                <SearchBar search={search} setSearch={setSearch} />
                <Filter
                    onClick={() => {
                        if (showFilter) {
                            const filtersContainer = document.querySelector('.filters-container');
                            if (filtersContainer) filtersContainer.classList.add('is-closing');
                            setTimeout(() => {
                                if (filtersContainer) filtersContainer.classList.remove('is-closing');
                                setShowFilter(!showFilter);
                            }, 300);
                        } else {
                            setShowFilter(!showFilter);
                        }
                    }}
                />
            </div>
            {showFilter && (
                <BookFilterContainer
                    closeFilters={() => setShowFilter(false)}
                    filteredBooks={displayedReviews.length + displayedRecommendations.length}
                    filterOptions={bookFilterOptions}
                    selectedFilters={selectedFilters}
                    setSelectedFilters={setSelectedFilters}
                    show={showFilter}
                    totalBooks={reviews.length + recommendations.length}
                />
            )}
            <ReviewContainer>
                {displayedReviews.map(review => (
                    <ReviewContainer.Review
                        key={review.title + '-' + review.author}
                        ExpandedElement={((review?.quotes && review.quotes.length && review.quotes[0].text) || (review.source || review.pageCount)) && (
                            <>
                                <ReviewContainer.Subheader additionalText={review.pageCount + ' pages'} source={review.source} />
                                {review?.quotes?.filter(quote => !!quote.text).map(({ text, pages, thoughts, context }, index) => (
                                    <div key={index} className="expanded-review-item">
                                        <p className="expanded-review-label">{'Quote: "' + text + '"' + (pages && pages.filter(page => page) && pages.length ? ` (pg ${getPageNumbers(pages)})` : "")}</p>
                                        {thoughts && (
                                            <p className="expanded-review-quote-thoughts">Thoughts: {thoughts}</p>
                                        )}
                                        {context && (
                                            <p className="expanded-review-quote-context">Context: {context}</p>
                                        )}
                                    </div>
                                ))}
                            </>
                        )}
                    >
                        <ReviewContainer.Header title={review.title} subtitle={`by ${getAuthor(review.author)}`} date={review.date !== 'NO DATE' ?
                            review.date.split('/').map((value, index) => {
                                if (index === 0) return value
                                else return value.substring(2)
                            }).join('/') : review.date} />
                        {review.review?.[0] && (
                            <ReviewContainer.Content review={review.review} />
                        )}
                        <ReviewContainer.Rating rating={review.rating} />
                    </ReviewContainer.Review>
                ))}
                {!displayedReviews.length && (
                    <p>No reviews found</p>
                )}
            </ReviewContainer>
            <RecommendationPage.SectionTitle category={category} type="Recommendations" />
            <RecommendationContainer>
                {displayedRecommendations.filter((item, index) => recommendations.indexOf(item) === index).map(recommendation => (
                    <RecommendationContainer.Recommendation
                        key={recommendation.title + '-' + recommendation.author}
                        ExpandedElement={((recommendation?.quotes && recommendation.quotes.length && recommendation.quotes[0].text) || (recommendation.source || recommendation.pageCount)) && (
                            <>
                                <RecommendationContainer.Subheader additionalText={recommendation.pageCount + ' pages'} source={recommendation.source} />
                                {recommendation?.quotes?.filter(quote => !!quote.text).map(({ text, pages, thoughts, context }, index) => (
                                    <div key={index} className="expanded-review-item">
                                        <p className="expanded-review-label">{'Quote: "' + text + '"' + (pages && pages.filter(page => page) && pages.length ? ` (pg ${getPageNumbers(pages)})` : "")}</p>
                                        {thoughts && (
                                            <p className="expanded-review-quote-thoughts">Thoughts: {thoughts}</p>
                                        )}
                                        {context && (
                                            <p className="expanded-review-quote-context">Context: {context}</p>
                                        )}
                                    </div>
                                ))}
                            </>
                        )}
                    >
                        <RecommendationContainer.Header title={recommendation.title} subtitle={`by ${getAuthor(recommendation.author)}`} />
                    </RecommendationContainer.Recommendation>
                ))}
                {!displayedRecommendations.length && (
                    <p>No recommendations found</p>
                )}
            </RecommendationContainer>
        </RecommendationPage>
    )
}