import "../pages/styles/ProgressBar/Styles.css";
import React from "react";


type ProgressBarProps = {
    valuePercentage: number;
};


const BMIProgressBar = (props: ProgressBarProps) => {
    const { valuePercentage: value } = props;

    const reverseValue = 100 - value;
    return (
        <div className="wrapper">
            <div className="barContainer2">
                <div className="contentFill" style={{ width: `${reverseValue}%` }} />
            </div>
            <div className="textValue">{`Test BMI`}</div>
        </div>
    );
};

export default function ProgressBarBMI() {
    return (
        <div className={"App"}>
            <div style={{ width: "100%" }}>
                <BMIProgressBar valuePercentage={85} />
                <BMIProgressBar valuePercentage={45} />
                <BMIProgressBar valuePercentage={24} />
            </div>
        </div>
    );
}
