import styles from './AcademicPerformanceForm.module.css';
import { useState } from 'react';

const AcademicPerformanceForm = () => {
	const [semester1, setSemester1] = useState('');
	const [semester2, setSemester2] = useState('');
	const [average, setAverage] = useState(null);
	const [result, setResult] = useState('');
	const [assessment, setAssessment] = useState('');

	const calculateResult = (event) => {
		event.preventDefault();
		console.log('Calculate result');
		if (
			Number.isNaN(semester1) ||
			Number.isNaN(semester2) ||
			!semester1.trim() ||
			!semester2.trim()
		)
			return;

		const avg = (Number(semester1) + Number(semester2) * 2) / 3;
		const res = avg >= 5 ? 'Được lên lớp' : 'Ở lại lớp';
		let ass;
		if (avg < 5) ass = 'Yếu';
		else if (avg < 6.5) ass = 'Trung bình';
		else if (avg < 8) ass = 'Khá';
		else ass = 'Giỏi';

		setAverage(avg);
		setResult(res);
		setAssessment(ass);
	};
	return (
		<center>
			<form className={styles.form} method="POST" action="/">
				<div className={styles.header}>
					<h1 className="title">KẾT QUẢ HỌC TẬP</h1>
				</div>
				<div className={styles.content}>
					<div className={styles.group}>
						<label htmlFor="semester1">
							Điểm HK1:
						</label>
						<input
							id="semester1"
							type="number"
							value={semester1}
							onChange={(e) => setSemester1(e.target.value)}
						/>
					</div>
					<div className={styles.group}>
						<label htmlFor="semester2">
							Điểm HK2:
						</label>
						<input
							id="semester2"
							type="text"
							value={semester2}
							onChange={(e) => setSemester2(e.target.value)}
						/>
					</div>
					<div className={styles.group}>
						<label htmlFor="average">
							Điểm trung bình:
						</label>
						<input
							className={styles['read-only']}
							id="average"
							readOnly
							type="text"
							value={average}
						/>
					</div>
					<div className={styles.group}>
						<label htmlFor="result">
							Kết quả:
						</label>
						<input
							className={styles['read-only']}
							id="result"
							readOnly
							type="text"
							value={result}
						/>
					</div>
					<div className={styles.group}>
						<label htmlFor="assessment">
							Xếp loại học lực:
						</label>
						<input
							className={styles['read-only']}
							id="assessment"
							readOnly
							type="text"
							value={assessment}
						/>
					</div>
					<div className={styles.group}>
						<button className={styles.btn} onClick={calculateResult}>
							Xem kết quả
						</button>
					</div>
				</div>
			</form>
		</center>
	);
}

export default AcademicPerformanceForm;
