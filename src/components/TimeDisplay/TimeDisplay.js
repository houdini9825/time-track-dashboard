import styles from './TimeDisplay.module.scss';
import classname from 'classname';
import EllipsisIcon from '../../images/icon-ellipsis.svg';
import workImg from '../../images/icon-work.svg';
import exerciseImg from '../../images/icon-exercise.svg';
import playImg from '../../images/icon-play.svg';
import selfcareImg from '../../images/icon-self-care.svg';
import socialImg from '../../images/icon-social.svg';
import studyImg from '../../images/icon-study.svg';

const timeText = {
	weekly: 'Last Week',
	daily: 'Yesterday',
	monthly: 'Last Month',
};

const imageMap = {
	'Self Care': selfcareImg,
	Work: workImg,
	Exercise: exerciseImg,
	Social: socialImg,
	Study: studyImg,
	Play: playImg,
};

function TimeDisplay({ type, currAmt, prevAmt, timePeriod }) {
	const containerClasses = classname(styles.container, {
		[styles.orange]: type === 'Work',
		[styles.green]: type === 'Exercise',
		[styles.blue]: type === 'Play',
		[styles.purple]: type === 'Social',
		[styles.red]: type === 'Study',
		[styles.yellow]: type === 'Self Care',
	});

	return (
		<div className={containerClasses}>
			<img className={styles.typeIcon} src={imageMap[type]} />
			<div className={styles.dataContainer}>
				<div className={styles.playContainer}>
					<h3>{type}</h3>
					<img src={EllipsisIcon} />
				</div>
				<div className={styles.amtContainer}>
					<p className={styles.currAmt}>{currAmt}hrs</p>
					<p className={styles.prevAmt}>
						{timeText[timePeriod]} - {prevAmt}hrs
					</p>
				</div>
			</div>
		</div>
	);
}

export default TimeDisplay;
