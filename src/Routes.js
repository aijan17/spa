import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Home from "./components/home/index";
import AddTenants from "./components/listTenants/AddTenants"


const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/add_clients" component={AddTenants}/>

            </Switch>
        </BrowserRouter>

    )
}

export default Routes;