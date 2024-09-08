import React, { useState } from 'react';
import { useCategoryName } from '../hooks/use-category-name';

export const EmptyGroceryListItem = ({ setGroceryList }) => {
    const [inputValue, setInputValue] = useState('');
    const [checked, setChecked] = useState(false);
    const { getCategoryName } = useCategoryName();

    return (
        <div className="grocery-list-item">
            <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
            <input
                type="text"
                placeholder="Add item"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && inputValue) {
                        const category = getCategoryName(inputValue);
                        setGroceryList(prev => [...prev, { name: inputValue, index: prev.length, checked, category }]);
                        setInputValue('');
                        setChecked(false);
                    }
                }}
            />
        </div>
    )
}