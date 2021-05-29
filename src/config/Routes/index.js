import {Route, Switch} from "react-router-dom";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Stores from "../../pages/Stores";
import StoreDetails from "../../pages/StoreDetails";
import Counter from "../../pages/Counter";
import NotFound from "../../pages/NotFound";
import Categories from "../../pages/Categories";
import Regions from "../../pages/Regions";

export default function Routes () {
    return (
        <Switch>
            <Route exact path={"/"} component={Home}/>
            <Route exact path={"/cadastro"} component={Register}/>
            <Route exact path={"/login"} component={Login}/>
            <Route exact path={"/lojas"} component={Stores}/>
            <Route exact path={"/lojas/:id"} component={StoreDetails}/>
            <Route exact path={"/contador"} component={Counter}/>
            <Route exact path={"/categorias"} component={Categories}/>
            <Route exact path={"/bairros"} component={Regions}/>
            <Route exact path={"/categorias/:category/lojas"} component={Stores}/>
            <Route exact path={"/bairros/:region/lojas"} component={Stores}/>

            <Route path={"/*"} component={NotFound}/>
        </Switch>
    );
}