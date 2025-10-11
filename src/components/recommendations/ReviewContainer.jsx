import { createContext, useContext, useState } from 'react';

import { formatSource } from './format-source';

const ReviewContext = createContext(null);

const Review = ({ children, ExpandedElement }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <ReviewContext.Provider value={{ expanded, hasExpandedValue: !!ExpandedElement, setExpanded }}>
            <div className="review">{children}</div>
            {ExpandedElement && expanded && (
                <ExpandedReview Element={ExpandedElement} />
            )}
        </ReviewContext.Provider>
    )
};
const Header = ({ title, subtitle, date }) => (
    <div className="review-header">
        <div className="review-title-and-subtitle-container">
            <h4 className="review-title">{title}</h4>
            <span className="review-subtitle">{subtitle}</span>
        </div>
        {date && (
            <span className="review-date">{date}</span>
        )}
    </div>
);
const Subheader = ({ additionalText, source }) => (
    <div className="review-subheader">
        {source ? <span className="review-source">Recommendation from {formatSource(source)}</span> : <span></span>}
        {additionalText ? <span className="review-additional-text">{additionalText}</span> : <span></span>}
    </div>
);
const Content = ({ review }) => review ?
    Array.isArray(review) ?
        review.map((item, index) => (
            <p key={index} className="review-text">{item}</p>
        )) : (
            <p className="review-text">{review}</p>
        )
    : null;
const Rating = ({ rating }) => {
    const { expanded, hasExpandedValue, setExpanded } = useContext(ReviewContext);
    return (
        <div className="rating-container">
            {rating === "n/a" ? (
                <p className="review-in-progress">
                    Review In Progress...
                </p>
            ) : (
                <p className="review-rating">
                    {`${rating} / 5`}
                </p>
            )}
            {hasExpandedValue && (
                <span className="expand-text" onClick={() => setExpanded(!expanded)}>{expanded ? 'Collapse' : 'Expand'}</span>
            )}
        </div>
    )
};
const RatingGroup = ({ ratingGroup }) => (
    <div className="review-rating-group-container">
        {ratingGroup.map(({ type, rating }) => (
            <div key={type + '-' + rating} className="review-rating-group">
                <span className="review-rating-type">{type}:</span>
                <Rating rating={rating} />
            </div>
        ))}
    </div>
)
const DateSection = ({ date }) => date ? <span className="review-date">{date}</span> : null;
const ExpandedReview = ({ Element }) => (
    <div className="expanded-review-container">
        {Element}
    </div>
)


export const ReviewContainer = ({ children }) => <div className="reviews-container">{children}</div>;

ReviewContainer.Review = Review;
ReviewContainer.Header = Header;
ReviewContainer.Subheader = Subheader;
ReviewContainer.Date = DateSection;
ReviewContainer.Content = Content;
ReviewContainer.Rating = Rating;
ReviewContainer.RatingGroup = RatingGroup;