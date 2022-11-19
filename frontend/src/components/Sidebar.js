import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    let location = useLocation().pathname;
    return (
        <>
            <input type="checkbox" id="nav-toggle" />
            <div className="sidebar">
                <div className="sidebar-brand">
                    <h1><img src="/image/logo2.png" alt="logo" /> <span>Zocket</span></h1>
                </div>
                <div className="sidebar-menu">
                    <ul>
                        <li><Link to="/" className={location === "/" ? "active" : ""}>
                            <span className="fa-solid fa-house-user"></span><span>Home</span>
                        </Link></li>

                        <li><Link to="/campaigns" className={location === "/campaigns" ? "active" : ""}>
                            <span className="fa-solid fa-volume-high"></span><span>Campaigns</span>
                        </Link></li>

                        <li><Link to="/products" className={location === "/products" ? "active" : ""}>
                            <span className="fa-brands fa-product-hunt"></span><span>Products</span>
                        </Link></li>

                        <li><Link to="/customers" className={location === "/customers" ? "active" : ""}>
                            <span className="fa-brands fa-intercom"></span><span>Customers</span>
                        </Link></li>

                        <li><Link to="/new-compaign" className={location === "/new-compaign" ? "active" : ""}>
                            <span className="lar la-user-circle"></span><span>Add Compaign</span>
                        </Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar