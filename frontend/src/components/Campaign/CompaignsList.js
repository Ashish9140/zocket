import React, { useState, useContext, useEffect } from 'react'
import { getCompaigns, deleteCompaigns } from '../../http'
import { CompaignsContext } from '../../CompaignsContext'

const CompaignsList = () => {
    const { allCompaign, setAllcompaign } = useContext(CompaignsContext);
    const [compaigns, setCompaigns] = useState();

    useEffect(() => {
        const getValue = async () => {
            let compaigns = await getCompaigns();
            setAllcompaign(compaigns.data);
            setCompaigns(compaigns.data);
        }
        getValue();
    }, []);

    const handleChange = () => {
        const platform = document.querySelector('.platform');
        const status = document.querySelector('.status');
        const filterC = (compaign) => {
            // console.log(compaign)
            if ((status.value === "All Status" || compaign.status === status.value) && (platform.value === "All Status" || compaign.platform === platform.value))
                return true;
            return false;
        }
        setCompaigns(allCompaign.filter(filterC));
    }

    const handleDelete = async (index) => {
        let fetchedData = await deleteCompaigns({ _id: compaigns[index]._id });
        setAllcompaign(fetchedData.data);
        setCompaigns(fetchedData.data);
    }


    return (
        (compaigns !== undefined) ?

            <div className="kyc">
                <div className="whole-list">
                    <div className="list-body">
                        <div className="list-top">
                            <div className="searchBar">
                                <i className="la la-search" />
                                <input type="text" placeholder='Search Capaigns' />
                            </div>
                            <div className="search-left">
                                <div>
                                    <label>Platform: </label>
                                    <select className='platform' onChange={handleChange}>
                                        <option>All Status</option>
                                        <option>Facebook</option>
                                        <option>Youtube</option>
                                        <option>Google</option>
                                    </select>
                                </div>
                                <div>
                                    <label>Status: </label>
                                    <select className='status' onChange={handleChange}>
                                        <option>All Status</option>
                                        <option>Live now</option>
                                        <option>Paused</option>
                                        <option>Exhausted</option>
                                    </select>
                                </div>
                                <div>
                                    <select className='lastdays'>
                                        <option>Last 30 days</option>
                                        <option>Last 20 days</option>
                                        <option>Last 10 days</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <table className="content-table">
                            <thead>
                                <tr>
                                    <th>On/Off</th>
                                    <th>Campaign</th>
                                    <th>Date Range</th>
                                    <th>Clicks</th>
                                    <th>Budget</th>
                                    <th>Location</th>
                                    <th>Plateform</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    compaigns.map((compaign, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    <label className="toggle">
                                                        <input className="toggle-checkbox" type="checkbox" />
                                                        <div className="toggle-switch"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <div className="table-card">
                                                        <img src={`/image/${compaign.avatar}`} alt="alt" className='cakesimg' />
                                                        <div>
                                                            <h4>{compaign.name}</h4>
                                                            <span>created {compaign.createddate}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{compaign.startdate} to {compaign.enddate}</td>
                                                <td>{compaign.clicks}</td>
                                                <td>INR {compaign.budget}</td>
                                                <td>{compaign.location}</td>
                                                <td>{compaign.platform}</td>
                                                <td>{compaign.status}</td>
                                                <td>
                                                    <i className="fa-solid fa-eye-dropper" />
                                                    <i className="fa-regular fa-trash-can" title='Delete' style={{ marginLeft: "10px", cursor: "pointer" }} onClick={() => {
                                                        handleDelete(index);
                                                    }} />
                                                </td>

                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            :
            <div>
                Loading
            </div>
    )
}

export default CompaignsList