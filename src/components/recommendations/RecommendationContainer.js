import React from 'react';

const Recommendation = ({ children }) => <div className="review">{children}</div>;
const Header = ({ title, subtitle }) => (
    <div className="recommendation-header">
        <div className="recommendation-title-container">
            <h4 className="recommendation-title">{title}</h4>
            <span className="recommendation-subtitle">{subtitle}</span>
        </div>
    </div>
)
const Source = ({ source }) => source ? <span className="recommendation-source">Recommendation from {source}</span> : null;

export const RecommendationContainer = ({ children }) => <div className="recommendations-container">{children}</div>

RecommendationContainer.Recommendation = Recommendation;
RecommendationContainer.Header = Header;
RecommendationContainer.Source = Source;