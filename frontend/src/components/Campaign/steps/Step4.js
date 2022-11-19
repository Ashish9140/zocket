import React, { useContext, useEffect } from 'react'
import { CompaignsContext } from '../../../CompaignsContext'
import { postCompaigns, getCompaigns } from '../../../http';
import StepBar from '../StepBar';
import { useHistory } from 'react-router-dom'

const Step4 = () => {

  const { type, name, budget, startdate, enddate, location, avatar } = useContext(CompaignsContext);

  const history = useHistory();

  const handleCLick = async () => {
    let date = new Date();
    let createddate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
    const data = await postCompaigns({ type, name, budget, startdate, enddate, location, avatar, createddate });
    history.push("/campaigns")
  }


  return (
    <>
      <br />
      <div className="mainstep">
        <StepBar amount={100} />
      </div>
      <br />
      <div className="kyc">
        <h2>Ready to go</h2><span>  (Step 4 of 4)</span>
        <hr />
        <div className="step4-cards">
          <label>
            <input type="radio" name="plan" className='radio r1' defaultChecked />
            <div className="single-card">
              <div className='card-header'>
                <div className="image">
                  <img src="/image/spon.jpg" alt="img" />
                </div>
                <div className="heading">
                  <h3>Mukund Cake Shop</h3>
                  <span>Sponsored</span>
                </div>
              </div>
              <div>
                <p>
                  We are the best bakery arround you.
                  Please like my page to get updates on
                  exciting offers and discounts
                </p>
              </div>
              <div className='cake-img'>
                <img src="/image/cakes2.jpg" alt="cakes" />
              </div>
            </div>
          </label>
          <label>
            <input type="radio" name="plan" className='radio r1' />
            <div className="single-card">
              <div className='card-header'>
                <div className="image">
                  <img src="/image/spon.jpg" alt="img" />
                </div>
                <div className="heading">
                  <h3>Mukund Cake Shop</h3>
                  <span>Sponsored</span>
                </div>
              </div>
              <div>
                <p>
                  We are the best bakery arround you.
                  Please like my page to get updates on
                  exciting offers and discounts
                </p>
              </div>
              <div className='cake-img'>
                <img src="/image/cakes2.jpg" alt="cakes" />
              </div>
            </div>
          </label>
          <label>
            <input type="radio" name="plan" className='radio r1' />
            <div className="single-card">
              <div className='card-header'>
                <div className="image">
                  <img src="/image/spon.jpg" alt="img" />
                </div>
                <div className="heading">
                  <h3>Mukund Cake Shop</h3>
                  <span>Sponsored</span>
                </div>
              </div>
              <div>
                <p>
                  We are the best bakery arround you.
                  Please like my page to get updates on
                  exciting offers and discounts
                </p>
              </div>
              <div className='cake-img'>
                <img src="/image/cakes2.jpg" alt="cakes" />
              </div>
            </div>
          </label>
          <label>
            <input type="radio" name="plan" className='radio r1' />
            <div className="single-card">
              <div className='card-header'>
                <div className="image">
                  <img src="/image/spon.jpg" alt="img" />
                </div>
                <div className="heading">
                  <h3>Mukund Cake Shop</h3>
                  <span>Sponsored</span>
                </div>
              </div>
              <div>
                <p>
                  We are the best bakery arround you.
                  Please like my page to get updates on
                  exciting offers and discounts
                </p>
              </div>
              <div className='cake-img'>
                <img src="/image/cakes2.jpg" alt="cakes" />
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

export default Step4 