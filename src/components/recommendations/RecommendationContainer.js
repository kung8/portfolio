import React, { createContext, useContext, useState } from 'react';
import { formatSource } from './format-source';

const RecommendationContext = createContext(null);

const Recommendation = ({ children, ExpandedElement }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <RecommendationContext.Provider value={{ expanded, hasExpandedValue: !!ExpandedElement, setExpanded }}>
            <div className="review">{children}</div>
            {ExpandedElement && expanded && (
                <ExpandedRecommendation Element={ExpandedElement} />
            )}
        </RecommendationContext.Provider>

    )
}
const Header = ({ title, subtitle }) => {
    const { expanded, hasExpandedValue, setExpanded } = useContext(RecommendationContext);

    return (
        <div className="recommendation-header">
            <div className="recommendation-title-container">
                <h4 className="recommendation-title">{title}</h4>
                <span className="recommendation-subtitle">{subtitle}</span>
            </div>
            {hasExpandedValue && (
                <span className="expand-text" onClick={() => setExpanded(!expanded)}>{expanded ? 'Collapse' : 'Expand'}</span>
            )}
        </div>
    )
}
const Subheader = ({ additionalText, source }) => (
    <div className="review-subheader">
        {source ? <span className="review-source">Recommendation from {formatSource(source)}</span> : <span></span>}
        {additionalText ? <span className="review-additional-text">{additionalText}</span> : <span></span>}
    </div>
);
const ExpandedRecommendation = ({ Element }) => (
    <div className="expanded-review-container">
        {Element}
    </div>
)
export const RecommendationContainer = ({ children }) => <div className="recommendations-container">{children}</div>

RecommendationContainer.Recommendation = Recommendation;
RecommendationContainer.Header = Header;
RecommendationContainer.Subheader = Subheader;