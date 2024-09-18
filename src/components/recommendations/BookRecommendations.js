import React from 'react';
import { RecommendationPage, RecommendationContainer, ReviewContainer } from './RecommendationPage';

export const BookRecommendations = ({ category, reviews, recommendations }) => {
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

    return (
        <RecommendationPage>
            <RecommendationPage.SectionTitle category={category} type="Reviews" />
            <ReviewContainer>
                {reviews.map(review => (
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
                        <ReviewContainer.Header title={review.title} subtitle={`by ${getAuthor(review.author)}`} date={review.date} />
                        {review.review?.[0] && (
                            <ReviewContainer.Content review={review.review} />
                        )}
                        <ReviewContainer.Rating rating={review.rating} />
                    </ReviewContainer.Review>
                ))}
            </ReviewContainer>
            <RecommendationPage.SectionTitle category={category} type="Recommendations" />
            <RecommendationContainer>
                {recommendations.filter((item, index) => recommendations.indexOf(item) === index).map(recommendation => (
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
            </RecommendationContainer>
        </RecommendationPage>
    )
}