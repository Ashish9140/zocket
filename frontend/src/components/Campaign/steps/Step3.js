import React, { useContext } from 'react'
import { CompaignsContext } from '../../../CompaignsContext'
import { useState } from 'react'
import StepBar from '../StepBar';

const Step3 = ({ onNext }) => {

    const [budgetValue, setBudgetValue] = useState(20000);
    const [radiusValue, setRadiusValue] = useState(24);
    const [input, SetInput] = useState();

    const { setBudget, setStartdate, setEnddate, setLocation, startdate, enddate, location } = useContext(CompaignsContext);

    const handleCLick = async () => {
        await setStartdate(document.querySelector(".startdate").value);
        await setEnddate(document.querySelector(".enddate").value);
        if (startdate !== undefined && enddate !== undefined && input !== undefined) {
            await setLocation(input);
            await setBudget(budgetValue);
            onNext();
        } else {
            alert("Enter all the fields")
        }
    }

    return (
        <>
            <br />
            <div className="mainstep">
                <StepBar amount={78} />
            </div>
            <br />
            <div className="kyc">
                <h2>Campaigns Settings</h2><span> (Step 3 of 4)</span>
                <hr />
                <div className="step3box">
                    <h3 style={{ textDecoration: "underline" }}>Budget and dates info</h3>
                    <div className="input-group">
                        <div>
                            <label>Start Date</label>
                            <div>
                                <input type="date" required="required" className='startdate' />
                            </div>
                        </div>
                        <div>
                            <label>End Date</label>
                            <div>
                                <input type="date" required="required" className='enddate' />
                            </div>
                        </div>
                    </div>
                    <div className="range-input">
                        <label>Enter campaigns budget</label>
                        <input
                            list="tickmarks"
                            max={100000}
                            onChange={(e) => { setBudgetValue(e.target.value) }}
                            step={10}
                            type="range"
                            value={budgetValue}
                        />
                    </div>
                    <div>
                        <label className="Rangelabel">{budgetValue} INR</label>
                    </div>
                </div>
                <div className="step3box">
                    <h3 style={{ textDecoration: "underline" }}>Location Info</h3>
                    <div className='location'>
                        <label>Select Location</label>
                        <div>
                            <input type="text" required="required" value={input} placeholder='Enter your location' onChange={(e) => { SetInput(e.target.value) }} />
                        </div>
                    </div>
                    <div className="range-input">
                        <label>Select target radius</label>
                        <input
                            list="tickmarks"
                            max={30}
                            onChange={(e) => { setRadiusValue(e.target.value) }}
                            step={1}
                            type="range"
                            value={radiusValue}
                        />
                    </div>
                    <div>
                        <label className="Rangelabel">{radiusValue} Km</label>
                    </div>
                </div>
            </div>
            <div className="continue-btn">
                <button onClick={handleCLick}>Continue</button>
            </div>
        </>
    )
}

export default Step3