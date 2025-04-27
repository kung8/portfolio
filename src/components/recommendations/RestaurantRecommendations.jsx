import { RecommendationPage, ReviewContainer } from './RecommendationPage';

export const RestaurantRecommendations = ({ category, reviews }) => {
    return (
        <RecommendationPage>
            <RecommendationPage.SectionTitle category={category} type="Reviews" />
            {reviews && (
                <ReviewContainer>
                    {reviews.filter(item => item.feedback.filter(text => text).length).map(review => (
                        <>
                            <ReviewContainer.Review key={review.title + '-' + review.location}>
                                <ReviewContainer.Header title={review.title} subtitle={`in ${review.location}`} />
                                {review.feedback && (
                                    <ReviewContainer.Content review={review.feedback} />
                                )}
                                {review.rating && (
                                    <ReviewContainer.RatingGroup ratingGroup={Object.entries(review.rating).map(([type, rating]) => ({ type, rating }))} />
                                )}
                            </ReviewContainer.Review>
                            
                        </>
                    ))}
                </ReviewContainer>
            )}
        </RecommendationPage>
    )
}