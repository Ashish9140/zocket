import { Switch, Route } from "react-router-dom";
import Header from '../components/Header';
import Home from './Home';
import Campaigns from '../components/Campaign/Campaigns';
import Products from './Products';
import Customers from './Customers';
import StepControl from "../components/Campaign/steps/StepControl";

const Main = () => {
    return (
        <div className="user-main-content">
            <Header />
            <div className="user-main">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/campaigns" component={Campaigns} />
                    <Route exact path="/products" component={Products} />
                    <Route exact path="/customers" component={Customers} />
                    <Route exact path="/new-compaign" component={StepControl} />
                </Switch>
            </div>
        </div>
    )
}

export default Main