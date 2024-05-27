import React from 'react';

const SectionTitle = ({ category, type = 'Recommendations' }) => <h3 className="recommendation-category">{category} {type}</h3>

export const RecommendationPage = ({ children }) => (
    <div className="recommendation-category-container">
        {children}
    </div>
);

RecommendationPage.SectionTitle = SectionTitle;