import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Các trang chức năng</h1>
      <div className={styles.navigation}>
        <Link to={"/form1"}>Kết quả học tập</Link>
        <Link to={"/form4"}>Theo dõi học tập</Link>
        <Link to={"/form5"}>Thông tin đặt chỗ</Link>
      </div>
    </div>
  );
}
