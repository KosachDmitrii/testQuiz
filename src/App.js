import Shop from "./components/shop/Shop";
import { Redirect, Route } from "react-router-dom";
import './App.css';
import { PATH_SHOP } from "./config/confi_nav";

function App() {

    return <>
        <Redirect to={PATH_SHOP} />
        <Route path={PATH_SHOP} render={() => {
            return <Shop/>
        }}>
        </Route>
    </>
}

export default App;
