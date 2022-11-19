import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
// import { Steps } from 'rsuite';

const StepBar = ({ amount }) => {
    return (
        <ProgressBar percent={amount}>
            <Step>
                {({ accomplished, index }) => (
                    <div
                        className={`indexedStep ${accomplished ? "accomplished" : null}`}
                    >
                        {index + 1}
                    </div>
                )}
            </Step>
            <Step>
                {({ accomplished, index }) => (
                    <div
                        className={`indexedStep ${accomplished ? "accomplished" : null}`}
                    >
                        {index + 1}
                    </div>
                )}
            </Step>
            <Step>
                {({ accomplished, index }) => (
                    <div
                        className={`indexedStep ${accomplished ? "accomplished" : null}`}
                    >
                        {index + 1}
                    </div>
                )}
            </Step>
            <Step>
                {({ accomplished, index }) => (
                    <div
                        className={`indexedStep ${accomplished ? "accomplished" : null}`}
                    >
                        {index + 1}
                    </div>
                )}
            </Step>
        </ProgressBar>
    );
}

export default StepBar