import React, { useEffect, useState } from 'react';
import closeBtn from '../../Assets/x.png';

const EmptyGroceryListItem = ({ setGroceryList }) => {
    const [inputValue, setInputValue] = useState('');
    const [checked, setChecked] = useState(false);
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
                        setGroceryList(prev => [...prev, { name: inputValue, checked }]);
                        setInputValue('');
                        setChecked(false);
                    }
                }}
            />
        </div>
    )
}

const GroceryListItem = ({ checked, index, groceryList, name, setGroceryList }) => {
    const [inputValue, setInputValue] = useState(name);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const newGroceryList = [...groceryList];
            if (newGroceryList[index]?.name && inputValue) {
                newGroceryList[index].name = inputValue;
                setGroceryList(newGroceryList);
            }
        }, 500);

        return () => clearTimeout(timeout);
        // eslint-disable-next-line
    }, [inputValue, index, groceryList]);

    return (
        <div className="grocery-list-item">
            <input
                type="checkbox"
                checked={checked}
                onChange={() => {
                    const newGroceryList = [...groceryList];
                    newGroceryList[index].checked = !checked;
                    setGroceryList(newGroceryList);
                }}
            />
            {checked ? (
                <label className={checked ? 'checked' : ''}>{inputValue}</label>
            ) : (
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            )}
        </div>
    )
}

export const GroceryListModal = ({ show, handleClose, groceryList, setGroceryList }) => {
    const showClass = show ? 'opened' : '';

    const deleteChecked = () => setGroceryList(prev => prev.filter(item => !item.checked));

    const deleteAll = () => {
        setGroceryList([]);
    }

    return (
        <>
            <div className={`overlay ${showClass}`} onClick={handleClose} />
            <div className={`grocery-list-modal ${showClass}`}>
                <div className="modal-header">
                    <h3>Grocery List</h3>
                    <button className="close" onClick={handleClose}>
                        <img src={closeBtn} alt="close" onClick={handleClose} />
                    </button>
                </div>
                <div className="grocery-list">
                    {groceryList.map((item, index) => (
                        <GroceryListItem key={item.name + '-' + index} {...{ ...item, index, groceryList, setGroceryList }} />
                    ))}
                    <EmptyGroceryListItem setGroceryList={setGroceryList} />
                </div>
                <div className="modal-footer">
                    <span onClick={groceryList.filter(item => item.checked).length > 0 ? deleteChecked : undefined} className={groceryList.filter(item => item.checked).length > 0 ? 'has-values' : ''}>Delete Checked</span>
                    <span onClick={groceryList.length > 0 ? deleteAll : undefined} className={groceryList.length > 0 ? 'has-values' : ''}>Delete All</span>
                </div>
            </div>
        </>
    )
}