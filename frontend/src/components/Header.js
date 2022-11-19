import React from 'react'

const Header = () => {
    return (
        <>
            <div className="user-header">
                <h2>
                    <label htmlFor="nav-toggle">
                        <span className="las la-bars"></span>
                    </label>
                </h2>
                <div className="user-wrapper" >
                    {/* <span>Free trial ends in 2 days</span> */}
                    <img src='/image/bb.jpg' alt="user" width="40px" height="40px" />
                    {/* Mukund cake shop */}
                </div>
            </div>
        </>
    )
}

export default Header