import styles from './NamePeriodContainer.module.scss';
import NameCard from '../NameCard/NameCard';
import TimePeriod from '../TimePeriod/TimePeriod';

const times = [
	{
		id: 0,
		name: 'Daily',
	},
	{
		id: 1,
		name: 'Weekly',
	},
	{
		id: 2,
		name: 'Monthly',
	},
];

function NamePeriodContainer({ onChangeSelection, className }) {
	return (
		<div className={`${styles.container} ${className}`}>
			<NameCard fname="Jeremy" lname="Robson" />
			<TimePeriod onChangeSelection={onChangeSelection} times={times} />
		</div>
	);
}

export default NamePeriodContainer;
