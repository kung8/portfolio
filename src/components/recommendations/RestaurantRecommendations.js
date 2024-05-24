import React from 'react';

export const RestaurantRecommendations = ({ category, reviews, recommendations }) => {
    return (
        <div className="recommendation-category-container">
            <h3 className="recommendation-category">{category} Recommendations</h3>
            <div className="recommendations-container">
                {recommendations.map(recommendation => (
                    <div key={recommendation.title + '-' + recommendation.author} className="recommendation">
                        <div className="recommendation-header">
                            <h4 className="recommendation-title">{recommendation.title}</h4>
                            <span className="recommendation-author">by {recommendation.author}</span>
                        </div>
                        {recommendation.source && (
                            <span className="recommendation-source">Recommendation from {recommendation.source}</span>
                        )}
                    </div>
                ))}
            </div>
            <h3 className="recommendation-category">{category} Reviews</h3>
            <div className="reviews-container">
                {reviews.map(review => (
                    <div key={review.title + '-' + review.author} className="review">
                        <div className="review-header">
                            <h4 className="review-title">{review.title}</h4>
                            <span className="review-author">by {review.author}</span>
                        </div>
                        {review.review && (
                            <p className="review-text">{review.review}</p>
                        )}
                        {review.rating === "n/a" ? (
                            <p className="review-rating">N/A</p>
                        ) : (
                            <p className="review-rating">{review.rating} / 5</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}