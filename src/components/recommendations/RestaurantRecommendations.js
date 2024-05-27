import React from 'react';
import { RecommendationPage, RecommendationContainer, ReviewContainer } from './RecommendationPage';

export const RestaurantRecommendations = ({ category, reviews, recommendations }) => {
    return (
        <RecommendationPage>
            <RecommendationPage.SectionTitle category={category} type="Recommendations" />
            <RecommendationContainer>
                {recommendations.map(recommendation => (
                    <RecommendationContainer.Recommendation key={recommendation.title + '-' + recommendation.author}>
                        <RecommendationContainer.Header title={recommendation.title} subtitle={`by ${recommendation.author}`} />
                        <RecommendationContainer.Source source={recommendation.source} />
                    </RecommendationContainer.Recommendation>
                ))}
            </RecommendationContainer>
            <RecommendationPage.SectionTitle category={category} type="Reviews" />
            <ReviewContainer>
                {reviews.map(review => (
                    <ReviewContainer.Review key={review.title + '-' + review.author}>
                        <ReviewContainer.Header title={review.title} subtitle={`by ${review.author}`} />
                        {/* <ReviewContainer.Date date={review.date} /> */}
                        <ReviewContainer.Content review={review.review} />
                        <ReviewContainer.Rating rating={review.rating} />
                    </ReviewContainer.Review>
                ))}
            </ReviewContainer>
        </RecommendationPage>
    )
}