import React, { useState } from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'

const steps = {
    1: Step1,
    2: Step2,
    3: Step3,
    4: Step4
}


const StepControl = () => {
    const [step, setStep] = useState(1);
    const Step = steps[step];

    function onNext() {
        setStep(step + 1);
    }

    return (
        <>
            <div className="left">
                <h3>Your Campaigns</h3>
                <span>Check the list of campaigns you created</span>
            </div>
            <Step onNext={onNext} />
        </>
    )
}

export default StepControl