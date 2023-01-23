import { useState } from 'react';
import styles from './TimePeriod.module.scss';

function TimePeriod({ times, onChangeSelection }) {
	const [chosenTime, setChosenTime] = useState(1);

	const handleClick = (e) => {
		setChosenTime(Number(e.target.dataset.val));
		onChangeSelection(e.target.textContent.toLowerCase());
	};

	const renderedItems = times.map((t) => {
		const classes = chosenTime === t.id ? styles.selected : '';

		return (
			<p
				className={classes}
				onClick={handleClick}
				key={t.id}
				data-val={t.id}
			>
				{t.name}
			</p>
		);
	});

	return <div className={styles.container}>{renderedItems}</div>;
}

export default TimePeriod;
