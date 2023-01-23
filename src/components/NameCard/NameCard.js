import styles from './NameCard.module.scss';
import PersonImg from '../../images/image-jeremy.png';

function NameCard({ fname, lname }) {
	return (
		<div className={styles.container}>
			<img src={PersonImg} />
			<div className={styles.reportContainer}>
				<p>Report for</p>
				<div className={styles.nameContainer}>
					<h2>{fname}</h2>
					<h2>{lname}</h2>
				</div>
			</div>
		</div>
	);
}

export default NameCard;
