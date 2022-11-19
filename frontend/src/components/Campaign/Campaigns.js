
import CompaignsList from './CompaignsList'
import { useHistory } from 'react-router-dom'

import './style.css'


const Campaigns = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push("/new-compaign")
    }

    return (
        <>
            <div className="chead">
                <div className="left">
                    <h3>Your Campaigns</h3>
                    <span>Check the list of campaigns you created</span>
                </div>
                <div className="right">
                    <button onClick={handleClick}>+ Create new campaign</button>
                </div>
            </div>
            <CompaignsList />
        </>
    )
}

export default Campaigns