import "./Form1.css";
import { useState } from "react";

export default function Form1() {

    const [score1, setScore1] = useState();
    const [score2, setScore2] = useState();
    const [meanScore, setMeanScore] = useState();
    const [result, setResult] = useState("");
    const [rank, setRank] = useState("");


    const calculateMeanScore = (score1, score2) => {
        return (((parseFloat(score1) + parseFloat(score2) * 2) / 3).toFixed(1))
    }

    const evaluate = (score) => {
        if (score >= 5) {
            return "Được lên lớp"
        } else {
            return "Ở lại lớp"
        }
    }

    const rating = (score) => {
        if (score >= 8) {
            return "Giỏi"
        } else if (score >= 6.5) {
            return "Khá"
        } else if (score >= 5) {
            return "Trung bình"
        } else {
            return "Yếu"
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let currentScore = calculateMeanScore(score1, score2)
        let currentEvalurate = evaluate(currentScore)
        let currentRank = rating(currentScore)
        setMeanScore(currentScore)
        setResult(currentEvalurate)
        setRank(currentRank)
    };

    return (
        <div className="academic_transcript_wrapper">
            <form id="academicTranscript" method="post" action=".">
                <div className="academic_transcript_heading">
                    <h1>kết quả học tập</h1>
                </div>
                <div className="academic_transcript_input">
                    <label htmlFor="score1">Điểm HK1 : </label>
                    <input
                        type="number"
                        id="score1"
                        name="score1"
                        step="any"
                        value={score1}
                        onChange={(e) => setScore1(e.target.value)}
                    />
                </div>

                <div className="academic_transcript_input">
                    <label htmlFor="score2">Điểm HK2 : </label>
                    <input
                        type="number"
                        id="score2"
                        name="score2"
                        step="any"
                        value={score2}
                        onChange={(e) => setScore2(e.target.value)}
                    />
                </div>

                <div className="academic_transcript_input">
                    <label htmlFor="mean_score">Điểm trung bình : </label>
                    <input className="disabled_input"
                        type="number"
                        id="mean_score"
                        name="mean_score"
                        step="any"
                        value={meanScore}
                        disabled
                    />
                </div>

                <div className="academic_transcript_input">
                    <label htmlFor="result">Kết quả : </label>
                    <input className="disabled_input"
                        type="text"
                        id="result"
                        name="result"
                        value={result}
                        disabled
                    />
                </div>

                <div className="academic_transcript_input">
                    <label htmlFor="rank">Xếp loại học lực : </label>
                    <input className="disabled_input"
                        type="text"
                        id="rank"
                        name="rank"
                        value={rank}
                        disabled
                    />
                </div>
                <button type="submit"
                    className="btn_transcipt"
                    onClick={handleSubmit}
                >
                    Xem kết quả
                </button>
            </form>
        </div>
    );
}
