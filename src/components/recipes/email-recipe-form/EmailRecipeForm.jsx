import { useState } from 'react';
import { ShareRecipeForm } from './ShareRecipeForm';
import { RecipeFeedbackForm } from './RecipeFeedbackForm';

const SHARE_VALUE = 'share';
const FEEDBACK_VALUE = 'feedback';

const formTypeOptions = [
    { value: SHARE_VALUE, label: 'Share a Recipe' },
    { value: FEEDBACK_VALUE, label: 'Recipe Feedback' },
]

export const EmailRecipe = ({ recipeName }) => {
    const [formType, setFormType] = useState('share');

    if (recipeName) {
        return (
            <section className="email-recipe-form-with-tabs">
                <div className="form-type-tabs">
                    {formTypeOptions.map((option) => (
                        <button
                            key={option.value}
                            onClick={() => setFormType(option.value)}
                            className={`tab-button ${formType === option.value ? 'active' : ''}`}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
                {formType === SHARE_VALUE && <ShareRecipeForm />}
                {formType === FEEDBACK_VALUE && <RecipeFeedbackForm recipeName={recipeName} />}
            </section>
        )
    }

    return (
        <section className="email-recipe-form-with-tabs">
            <ShareRecipeForm showTitle />
        </section>
    )
}