import { RecommendationContainer } from './RecommendationContainer';
import { ReviewContainer } from './ReviewContainer';

const SectionTitle = ({ category, type = 'Recommendations' }) => <h3 className="recommendation-category">{category} {type}</h3>

const RecommendationPage = ({ children }) => (
    <div className="recommendation-category-container">
        {children}
    </div>
);

RecommendationPage.SectionTitle = SectionTitle;
export { RecommendationPage, RecommendationContainer, ReviewContainer };