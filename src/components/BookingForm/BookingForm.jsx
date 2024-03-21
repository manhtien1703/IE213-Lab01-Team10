import styles from "./BookingForm.module.css";
import { useState } from "react";
import {
  ageOptions,
  genderOptions,
  locationTypesOptions,
  mediaOptions,
  partyTypesOptions,
  timeOptions,
} from "./BookingFormOptions";

export default function BookingForm() {
  const [numberOfGest, setNumberOfGest] = useState("");
  const [date, setDate] = useState(() => {
    const now = new Date().toLocaleString("es-US", timeOptions);
    const [datePart] = now.split(", ");
    const [day, month, year] = datePart.split("/");
    return `${year}-${month}-${day}`;
  });

  const [partyType, setPartyType] = useState(0);
  const [location, setLocation] = useState(0);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState(0);
  const [age, setAge] = useState(0);
  const [anotherReq, setAnotherReq] = useState("");
  const [time, setTime] = useState("");
  const [media, setMedia] = useState([]);
  const [hide, setHide] = useState(true);

  const formatDate = (dateString) => {
    const parts = dateString.split("-");
    if (parts.length === 3) {
      const [year, month, day] = parts;
      return `${day}/${month}/${year}`;
    } else {
      return dateString;
    }
  };

  const formatDatetime = (datetimeString) => {
    const [datePart, timePart] = datetimeString.split(", ");
    return `${timePart} - ${datePart}`;
  };

  const handleMediaChange = (event) => {
    const mediaValues = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setMedia(mediaValues);
  };

  return (
    <div className={styles.container}>
      <form
        action="booking"
        method="POST"
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          setTime(new Date().toLocaleString("es-US", timeOptions));
          console.log(time);
          setHide(false);
        }}
      >
        <div className={styles.header}>
          <h1>THÔNG TIN ĐẶT CHỖ</h1>
        </div>
        <div className={styles.body}>
          <div className={`${styles.body_head} ${styles.group}`}>
            <div>
              <label htmlFor="participant">
                Số khách tham dự bữa tiệc của quý khách:
              </label>
              <input
                type="text"
                id="participant"
                value={numberOfGest}
                maxLength={5}
                required
                onChange={(e) =>
                  setNumberOfGest(e.target.value.replace(/[^0-9]/g, ""))
                }
              />
            </div>
            <div>
              <label htmlFor="time">Ngày</label>
              <input
                type="date"
                id="time"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div className={`${styles.party} ${styles.group}`}>
            <p>Loại tiệc: </p>
            {partyTypesOptions.map((type) => (
              <div className={styles["gap-5"]} key={type.id}>
                <input
                  type="checkbox"
                  id={"party" + type.id}
                  name="kindParty"
                  value={type.id}
                  checked={type.id == partyType}
                  onChange={(event) => {
                    setPartyType(event.target.value);
                  }}
                />
                <label htmlFor={"party" + type.id}>{type.value}</label>
              </div>
            ))}
          </div>

          <div className={`${styles.location} ${styles.group}`}>
            <p>Địa điểm: </p>

            {locationTypesOptions.map((type) => (
              <div className={styles["gap-5"]} key={type.id}>
                <input
                  type="radio"
                  id={"location" + type.id}
                  name="typeLocation"
                  value={type.id}
                  checked={type.id == location}
                  onChange={(event) => {
                    setLocation(event.target.value);
                  }}
                />
                <label htmlFor={"location" + type.id}>{type.value}</label>
              </div>
            ))}
          </div>

          <div className={`${styles.info} ${styles.group}`}>
            <div>
              <label htmlFor="name">Tên quý khách: </label>
              <input
                type="text"
                id="name"
                value={name}
                required
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div>
              <label htmlFor="address">Địa chỉ liên lạc: </label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>

          <div className={`${styles.group} ${styles["group--flex"]}`}>
            <div>
              <label htmlFor="age">Độ tuổi: </label>
              <select
                onChange={(event) => {
                  setAge(event.target.value);
                }}
              >
                {ageOptions.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.value}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles["gap-5"]}>
              <p>Giới tính: </p>
              {genderOptions.map((type) => (
                <div className={styles["gap-5"]} key={type.id}>
                  <input
                    type="radio"
                    id={"gender" + type.id}
                    name="typeGender"
                    value={type.id}
                    checked={type.id == gender}
                    onChange={(event) => {
                      setGender(event.target.value);
                    }}
                  />
                  <label htmlFor={"gender" + type.id}>{type.value}</label>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`${styles.group} ${styles["gap-10"]} ${styles["know-from"]}`}
          >
            <label htmlFor="source">
              Quý khách biết đến nhà hàng của chúng tôi qua:{" "}
            </label>
            <select
              id="source"
              multiple
              value={media}
              onChange={handleMediaChange}
            >
              {mediaOptions.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.group}>
            <label htmlFor="requirement form_body_group">
              Các yêu cầu khác của quý khách:
            </label>
            <div>
              <textarea
                id="requirement"
                rows="5"
                spellCheck={false}
                onChange={(e) => {
                  setAnotherReq(e.target.value);
                }}
              ></textarea>
            </div>
          </div>

          <div className={styles.group}>
            <button className={styles.btn} type="submit">
              Đặt chỗ
            </button>
          </div>
        </div>
      </form>

      {!hide && (
        <div className={styles.result}>
          <div className={styles.header}>
            <h1>THÔNG TIN ĐẶT CHỖ</h1>
          </div>
          <div className={styles.body}>
            <div className={styles.group}>
              <div>
                <h3>Thông tin khách hàng</h3>
                <p>
                  Họ tên: {name} - Độ tuổi: {ageOptions[age].name} / Giới tính:{" "}
                  {genderOptions[gender].name}
                </p>
              </div>

              <div>
                <p>Địa chỉ: {address}</p>
              </div>
            </div>
            <div className={styles.group}>
              <div>
                <h3>Thông tin đặt chỗ</h3>
                <p>
                  Số khách hàng tham gia buổi tiệc: {numberOfGest} - Ngày đặt
                  tiệc: {formatDate(date)}
                </p>
              </div>
              <div>
                <p>
                  Loại tiệc: {partyTypesOptions[partyType].value} / Địa điểm: {partyTypesOptions[location].value}
                </p>
              </div>
            </div>
            <div className={styles.group}>
              <h3>Các yêu cầu kèm theo:</h3>
              <p style={{ whiteSpace: "pre-line" }}>{anotherReq}</p>
            </div>
            <div className={styles.group}>
              <p style={{ textAlign: "center" }}>
                <i>Quý khách biết đến nhà hàng chúng tôi qua:</i>{" "}
                {media.join(", ")}
              </p>
              <center>
                Chúng tôi đã nhận được thông tin đặt chỗ của quý khách vào lúc: <b>{formatDatetime(time)}</b>
              </center>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
