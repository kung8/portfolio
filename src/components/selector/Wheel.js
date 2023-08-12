import React, { useEffect, useState } from 'react';
import "./index.css";

const Wheel = (props) => {
	const { items, disabled, onSelect, isReset, setIsReset } = props;
	const [counter, setCounter] = useState(0);
	const [selectedItem, setSelectedItem] = useState(null);

	const wheelVars = {
		"--nb-item": items.length,
		"--selected-item": selectedItem,
	};

	useEffect(() => {
		if (isReset) {
			setSelectedItem(null);
		}
	}, [isReset])

	useEffect(() => {
		onSelect(undefined);
		setSelectedItem(null);
		// eslint-disable-next-line
	}, [items]);

	const spinning = selectedItem !== null ? "spinning" : "";

	const selectItem = async () => {
		if (selectedItem === null) {
			const selectedItem = Math.floor(Math.random() * items.length);
			await setSelectedItem(selectedItem);
			const prevCounter = counter;
			await setCounter(prevCounter + 1);

			setTimeout(() => {
				if (onSelect) {
					onSelect(items[selectedItem]);
				}
				if (setIsReset) {
					setIsReset(false);
				}
			}, 3950)
		} else {
			setSelectedItem(null)
			setTimeout(selectItem, 500);
		}
	}

	return (
		<div className="wheel-container">
			<div
				className={`wheel ${spinning ? spinning : undefined} ${disabled ? 'remove-cursor' : undefined}`}
				style={wheelVars}
				onClick={() => !disabled ? selectItem() : null}
			>
				{items.map((item, index) => (
					<div key={index} className="wheel-item" style={{ "--item-nb": index }}>
						{item}
					</div>
				))}
			</div>
		</div>
	);
}

export default Wheel;