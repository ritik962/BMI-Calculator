import { useState } from "react";

const BMICalculator = () => {
  const [inputWeight, setInputWeight] = useState("");
  const [inputHeight, setInputHeight] = useState("");
  const [bmi, setBMI] = useState("");
  const [message, setMessage] = useState("");
  const [bmiStyle, setBmiStyle] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("BMI Calculated");

    if (inputWeight <= 0 || inputHeight <= 0) {
      alert("Weight and Height must be positive numbers & should not be 0");
      return;
    }

    const weight = parseFloat(inputWeight);
    const height = parseFloat(inputHeight);
    let bmi = (weight * 10000) / (height * height);
    console.log(typeof bmi);

    bmi = Math.round(bmi * 10) / 10;
    setBMI(bmi.toFixed(1));
    let style = {};
    let bmiCategoryMessage = "";
    if (bmi < 18.5) {
      style = { color: "#f44336", fontWeight: "bold" };
      bmiCategoryMessage = "You are Underweight";
    } else if (bmi >= 18.5 && bmi < 23) {
      style = { color: "#4caf50", fontWeight: "bold" };
      bmiCategoryMessage = "You are Normal Weight";
    } else if (bmi >= 23 && bmi < 25) {
      style = { color: "#ff9800", fontWeight: "bold" };
      bmiCategoryMessage = "You are at risk of becoming overweight";
    } else if (bmi >= 25 && bmi < 30) {
      style = { color: "#ff5722", fontWeight: "bold" };
      bmiCategoryMessage = "You are Overweight";
    } else if (bmi >= 30) {
      style = { color: "#d32f2f", fontWeight: "bold" };
      bmiCategoryMessage = "You are Obese";
    }

    setBmiStyle(style);
    setMessage(bmiCategoryMessage);
  };

  const reload = (e) => {
    e.preventDefault();
    setInputWeight("");
    setInputHeight("");
    setBMI("");
    setMessage("");
    setBmiStyle({});
    console.log(bmi);
  };

  return (
    <div className="wrapper">
      <h1 className="title">BMI Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div className="weight input-wrapper">
          <label htmlFor="weight">Weight (Kgs)</label>
          <input
            id="weight"
            type="number"
            placeholder="Enter Weight Value"
            value={inputWeight}
            onChange={(e) => setInputWeight(e.target.value)}
          />
        </div>
        <div className="height input-wrapper">
          <label htmlFor="height">Height (cms)</label>
          <input
            id="height"
            type="number"
            placeholder="Enter Height Value"
            value={inputHeight}
            onChange={(e) => setInputHeight(e.target.value)}
          />
        </div>
        <div className="action-btns">
          <button type="submit" className="btn submit">
            Submit
          </button>
          <button className="btn reload" onClick={reload}>
            Reload
          </button>
        </div>
        <div className="output">
          {bmi ? (
            <>
              <h3>Your BMI is: {bmi}</h3>
              <p style={bmiStyle}>{message}</p>
            </>
          ) : (
            <p>Please enter your weight and height to calculate BMI.</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default BMICalculator;
