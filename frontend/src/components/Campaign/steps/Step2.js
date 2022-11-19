import React, { useContext } from 'react'
import { CompaignsContext } from '../../../CompaignsContext'
import StepBar from '../StepBar';

const Step2 = ({ onNext }) => {

    const { setName, setAvatar } = useContext(CompaignsContext);
    const names = ["Bluberry cake with raw topping", "Chocolate truffle cake", "Browine cake with fluffy cream", "Ferro rocher cake", "Custurd mixed with fruit cake", "Best raw topping choco cake", "Green cup cakes", "Blueberry topping cakes", "Strawberry cakes with blueberry"];
    const avatar = ["bb.jpg", "ct.jpg", "b.jpg", "fr.jpg", "cm.jpg", "brp.jpg", "gc.jpg", "bbt.jpg", "sb.jpg"];

    const handleCLick = () => {
        for (let i = 0; i < 9; i++) {
            if (document.querySelector(`.r${i + 1}`).checked) {
                setName(names[i]);
                setAvatar(avatar[i]);
                break;
            }
        }
        onNext();
    }

    return (
        <>
            <br />
            <div className="mainstep">
                <StepBar amount={45} />
            </div>
            <br />
            <div className="kyc">
                <h2>Choose the Product</h2><span> (Step 2 of 4)</span>
                <hr />
                <div className="cards">
                    <label>
                        <input type="radio" name="plan" className='radio r1' defaultChecked />
                        <div className="card-single">
                            <div>
                                <img src="/image/bb.jpg" alt="" className="cakesimg" />
                            </div>
                            <div>
                                <h3>Bluberry cake with raw topping</h3>
                                <span>Rs: 2,290</span>
                            </div>
                        </div>
                    </label>
                    <label>
                        <input type="radio" name="plan" className='radio r2' />
                        <div className="card-single">
                            <div>
                                <img src="/image/ct.jpg" alt="" className="cakesimg" />
                            </div>
                            <div>
                                <h3>Chocolate truffle cake</h3>
                                <span>Rs: 2,190</span>
                            </div>
                        </div>
                    </label>
                    <label>
                        <input type="radio" name="plan" className='radio r3' />
                        <div className="card-single">
                            <div>
                                <img src="/image/b.jpg" alt="" className="cakesimg" />
                            </div>
                            <div>
                                <h3>Browine cake with fluffy cream</h3>
                                <span>Rs: 1,222</span>
                            </div>
                        </div>
                    </label>
                    <label>
                        <input type="radio" name="plan" className='radio r4' />
                        <div className="card-single">
                            <div>
                                <img src="/image/fr.jpg" alt="" className="cakesimg" />
                            </div>
                            <div>
                                <h3>Ferro rocher cake</h3>
                                <span>Rs: 1,234</span>
                            </div>
                        </div>
                    </label>
                    <label>
                        <input type="radio" name="plan" className='radio r5' />
                        <div className="card-single">
                            <div>
                                <img src="/image/cm.jpg" alt="" className="cakesimg" />
                            </div>
                            <div>
                                <h3>Custurd mixed with fruit cake</h3>
                                <span>Rs: 2,456</span>
                            </div>
                        </div>
                    </label>
                    <label>
                        <input type="radio" name="plan" className='radio r6' />
                        <div className="card-single">
                            <div>
                                <img src="/image/brp.jpg" alt="" className="cakesimg" />
                            </div>
                            <div>
                                <h3>Best raw topping choco cake</h3>
                                <span>Rs: 2,345</span>
                            </div>
                        </div>
                    </label>
                    <label>
                        <input type="radio" name="plan" className='radio r7' />
                        <div className="card-single">
                            <div>
                                <img src="/image/gc.jpg" alt="" className="cakesimg" />
                            </div>
                            <div>
                                <h3>Green cup cakes</h3>
                                <span>Rs: 1,234</span>
                            </div>
                        </div>
                    </label>
                    <label>
                        <input type="radio" name="plan" className='radio r8' />
                        <div className="card-single">
                            <div>
                                <img src="/image/bbt.jpg" alt="" className="cakesimg" />
                            </div>
                            <div>
                                <h3>Blueberry topping cakes</h3>
                                <span>Rs: 2,456</span>
                            </div>
                        </div>
                    </label>
                    <label>
                        <input type="radio" name="plan" className='radio r9' />
                        <div className="card-single">
                            <div>
                                <img src="/image/sb.jpg" alt="" className="cakesimg" />
                            </div>
                            <div>
                                <h3>Strawberry cakes with blueberry</h3>
                                <span>Rs: 2,345</span>
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

export default Step2