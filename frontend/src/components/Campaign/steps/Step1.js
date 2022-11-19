import React, { useContext } from 'react'
import { CompaignsContext } from '../../../CompaignsContext';
import StepBar from '../StepBar';


const Step1 = ({ onNext }) => {
    const { setType } = useContext(CompaignsContext);
    const types = ["Get Leads as calls", "Get Leads as Facebook messages", "Increase page followers", "Get Customer Leads", "Get more youtube views", "Get more website traffic", "Increase Live store traffic", "Increase your App installs", "Increase the catalogue sales"];

    const handleCLick = () => {
        for (let i = 0; i < 9; i++) {
            if (document.querySelector(`.r${i + 1}`).checked) {
                // console.log(types[i])
                setType(types[i]);
                break;
            }
        }
        onNext();
    }

    return (
        <>
            <br />
            <div className="mainstep">
                <StepBar amount={10} />
            </div>
            <br />
            <div className="kyc">
                <h2>What you want to do?</h2> <span> (Step 1 of 4)</span>
                <hr />
                <div className="cards">
                    <label>
                        <input type="radio" name="plan" className='radio r1' defaultChecked />
                        <div className="card-single">
                            <div>
                                <span className="fa-solid fa-phone-volume"></span>
                            </div>
                            <div>
                                <h3>Get Leads as calls</h3>
                                <span>Reach broad audience and get leads through calss</span>
                            </div>
                        </div>
                    </label>
                    <label>
                        <input type="radio" name="plan" className='radio r2' />
                        <div className="card-single">
                            <div>
                                <span className="fa-regular fa-message"></span>
                            </div>
                            <div>
                                <h3>Get Leads as Facebook messages</h3>
                                <span>Get more FBmessages from Leads</span>
                            </div>
                        </div>
                    </label>
                    <label>
                        <input type="radio" name="plan" className='radio r3' />
                        <div className="card-single">
                            <div>
                                <span className="fa-regular fa-user"></span>
                            </div>
                            <div>
                                <h3>Increase page followers</h3>
                                <span>Encourage customers follow your page</span>
                            </div>
                        </div>
                    </label>
                    <label>
                        <input type="radio" name="plan" className='radio r4' />
                        <div className="card-single">
                            <div>
                                <span className="fa-solid fa-person-breastfeeding"></span>
                            </div>
                            <div>
                                <h3>Get Customer Leads</h3>
                                <span>Reach broad audience and get leads through calss</span>
                            </div>
                        </div>
                    </label>
                    <label>
                        <input type="radio" name="plan" className='radio r5' />
                        <div className="card-single">
                            <div>
                                <span className="fa-regular fa-paper-plane"></span>
                            </div>
                            <div>
                                <h3>Get more youtube views</h3>
                                <span>Increase organic views by obtaining user attention</span>
                            </div>
                        </div>
                    </label>
                    <label>
                        <input type="radio" name="plan" className='radio r6' />
                        <div className="card-single">
                            <div>
                                <span className="fa-solid fa-shield-halved"></span>
                            </div>
                            <div>
                                <h3>Get more website traffic</h3>
                                <span>Get the right people to visit your website</span>
                            </div>
                        </div>
                    </label>
                    <label>
                        <input type="radio" name="plan" className='radio r7' />
                        <div className="card-single">
                            <div>
                                <span className="fa-solid fa-bore-hole"></span>
                            </div>
                            <div>
                                <h3>Increase Live store traffic </h3>
                                <span>Visits to local stores, restaurants & Dealerships </span>
                            </div>
                        </div>
                    </label>
                    <label>
                        <input type="radio" name="plan" className='radio r8' />
                        <div className="card-single">
                            <div>
                                <span className="fa-brands fa-instalod"></span>
                            </div>
                            <div>
                                <h3>Increase your App installs</h3>
                                <span>Reach broad audience and get leads through calss</span>
                            </div>
                        </div>
                    </label>
                    <label>
                        <input type="radio" name="plan" className='radio r9' />
                        <div className="card-single">
                            <div>
                                <span className="fa-solid fa-universal-access"></span>
                            </div>
                            <div>
                                <h3>Increase the catalogue sales</h3>
                                <span>Reach broad audience and get leads through calss</span>
                            </div>
                        </div>
                    </label>
                </div>

            </div>
            <div className="continue-btn">
                <button onClick={handleCLick}>Continue</button>
            </div>
        </>
    )
}

export default Step1