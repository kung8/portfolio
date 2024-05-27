import React from 'react';

const Review = ({ children }) => <div className="review">{children}</div>;
const Header = ({ title, subtitle }) => (
    <div className="review-header">
        <h4 className="review-title">{title}</h4>
        <span className="review-subtitle">{subtitle}</span>
    </div>
)
const Content = ({ review }) => review ? <p className="review-text">{review}</p> : null;
const Rating = ({ rating }) => <p className="review-rating">{rating === "n/a" ? "N/A" : `${rating} / 5`}</p>;
const DateSection = ({ date }) => date ? <span className="review-date">{date}</span> : null;

export const ReviewContainer = ({ children }) => <div className="reviews-container">{children}</div>;

ReviewContainer.Review = Review;
ReviewContainer.Header = Header;
ReviewContainer.Date = DateSection;
ReviewContainer.Content = Content;
ReviewContainer.Rating = Rating;