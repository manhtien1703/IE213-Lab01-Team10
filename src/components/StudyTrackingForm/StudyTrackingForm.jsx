import styles from "./StudyTrackingForm.module.css";
import studyTrackingImage from "../../assets/StudyTracking.jpg";
import { useState } from "react";

export default function StudyTrackingForm() {
  const [studentFullName, setStudentFullName] = useState("");
  const [teacherFullName, setTeacherFullName] = useState("");
  const [studentClass, setSchoolClass] = useState("");
  const [registrationDate, setRegistrationDate] = useState("");
  const [incompleteTasks, setIncompleteTasks] = useState("");
  const [completionOptions, setCompletionOptions] = useState([]);
  const [isShowResult, setIsShowResult] = useState(false);

  const handleSubmit = () => {
    setIsShowResult(true);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <div className={styles.heading}>
          <h2>THEO DÕI HỌC TẬP</h2>
        </div>
        <div className={styles.body}>
          <div className={styles.container}>
            <div className={styles.left}>
              <div className={styles.control}>
                <label htmlFor="studentName">Họ tên học sinh : </label>
                <input
                  type="text"
                  id="studentName"
                  name="studentName"
                  value={studentFullName}
                  onChange={(e) => setStudentFullName(e.target.value)}
                />
              </div>
              <div className={styles.control}>
                <label htmlFor="teacher">Giáo viên phụ trách : </label>
                <input
                  type="text"
                  id="teacher"
                  name="teacher"
                  value={teacherFullName}
                  onChange={(e) => setTeacherFullName(e.target.value)}
                />
              </div>
              <div className={styles.control}>
                <div className={styles.half}>
                  <label htmlFor="class">Lớp : </label>
                  <input
                    type="text"
                    id="class"
                    name="class"
                    value={studentClass}
                    onChange={(e) => setSchoolClass(e.target.value)}
                  />
                </div>
                <div className={styles.half}>
                  <label htmlFor="Date">Ngày : </label>
                  <input
                    type="date"
                    id="Date"
                    name="Date"
                    value={registrationDate}
                    onChange={(e) => {
                      setRegistrationDate(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className={styles.textarea}>
                <label htmlFor="task">Những việc phân công chưa làm: </label>
                <textarea
                  name="task"
                  id="task"
                  cols="20"
                  rows="10"
                  value={incompleteTasks}
                  onChange={(e) => setIncompleteTasks(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className={styles.right}>
              <img src={studyTrackingImage} alt="" />
            </div>
          </div>

          <div className={styles.checkbox}>
            <p htmlFor="">Chọn hình thức hoàn thành: </p>
            <div className={styles.item}>
              <input
                type="checkbox"
                name="firstCheckbox"
                id="firstCheckbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    setCompletionOptions([...completionOptions, "tại lớp"]);
                  } else {
                    setCompletionOptions(
                        completionOptions.filter((option) => option !== "tại lớp")
                    );
                  }
                }}
              />
              <label htmlFor="firstCheckbox">
                Những việc chưa làm sẽ được hoàn thành ngay tại lớp
              </label>
            </div>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                name="secondCheckbox"
                id="secondCheckbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    setCompletionOptions([...completionOptions, "Tại nhà"]);
                  } else {
                    setCompletionOptions(
                      completionOptions.filter((option) => option !== "Tại nhà")
                    );
                  }
                }}
              />
              <label htmlFor="secondCheckbox">
                Sẽ hoàn thành những việc chưa làm tại nhà và nộp lại giáo viên
                vào ngày hôm sau
              </label>
            </div>
          </div>

          <div className={styles.submit}>
            <button type="submit" onClick={handleSubmit}>
              Ghi nhận
            </button>
          </div>
        </div>
      </div>

      {isShowResult && (
          <div className={styles.result}>
          <h1>Thông tin phiếu theo dõi</h1>
          <p>
            Tên học sinh: {studentFullName} - Lớp: {studentClass}
          </p>
          <p>
            Ngày đăng ký: {registrationDate.replace("-", "/")} - Giáo viên phụ
            trách: {teacherFullName}
          </p>
          <p>Những công việc đã được phân công nhưng chưa hoàn thành: </p>
          <p>{incompleteTasks}</p>
          <p>Cam kết sẽ hoàn thành tại: {completionOptions.join(" - ")}</p>
        </div>
      )}
    </div>
  );
}
