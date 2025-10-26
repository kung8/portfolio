import { formatYieldUnit, getRecipeFontSizeClass } from '../utils';
import { InaccurateTimeStatement } from './InaccurateTimeStatement';
import { useRecipeContext } from './RecipeContext';

const QuickYieldAdjustment = ({ isActive, value }) => {
    const { item, setAppliedYieldAmount } = useRecipeContext();
    const originalAmount = item?.yields?.amount ?? 1;
    return (
        <span className={`quick-yield-adjustment ${isActive ? 'active' : ''} ${getRecipeFontSizeClass()}`} onClick={() => setAppliedYieldAmount(originalAmount * value)}>{value + 'x'}</span>
    )
}

export const Yield = () => {
    const { appliedYieldAmount, item, setAppliedYieldAmount } = useRecipeContext();
    const originalAmount = item?.yields?.amount ?? 1;
    const unit = item?.yields?.unit ?? 'serving';
    const conversionRate = appliedYieldAmount / originalAmount;

    return (
        <div className="yields-container">
            <div className="yields">
                <span className={`yield-text ${getRecipeFontSizeClass()}`}>Yields:</span>
                <div className="yield-amount-container">
                    <div className="applied-yield-input-container">
                        <input className={`applied-yield-input ${getRecipeFontSizeClass()}`} type="number" min={1} value={appliedYieldAmount} onChange={(e) => setAppliedYieldAmount(e.target.value)} />
                        <span className={`applied-yield-text ${getRecipeFontSizeClass()}`}>{formatYieldUnit(appliedYieldAmount, unit)}</span>
                    </div>
                    <span className={`dash ${getRecipeFontSizeClass()}`}>-</span>
                    <div className="quick-yield-adjustment-container">
                        <span className={`scale-text ${getRecipeFontSizeClass()}`}>Scale</span>
                        <QuickYieldAdjustment isActive={conversionRate === 1} value={1} />
                        <QuickYieldAdjustment isActive={conversionRate === 2} value={2} />
                        <QuickYieldAdjustment isActive={conversionRate === 3} value={3} />
                    </div>
                </div>
            </div>
            <InaccurateTimeStatement />
        </div>
    )
}