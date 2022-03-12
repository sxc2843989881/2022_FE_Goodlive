import React from 'react'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from '../page/Main/Home'
import LifeService from '../page/Main/LifeService'
import Shop from '../page/Main/Shop'
import User from '../page/Main/User'
import City from '../page/City'
import Layout from '../page/Main/Layout'
import Search from '../page/Search'
import BottomNav from '../components/BottomNav'
import Details from '../page/Details'
import Login from '../page/Login'
import Order from '../page/Order'

const AppRouter = () => { 
    return(
        <Router>
            <Switch>
                <Route path='/city' component={City}></Route>
                <Route path='/details/:id' component={Details}></Route>
                <Route path='/search/:keywords' component={Search}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/order' component={Order}></Route>
            <Layout path="/">
                <BottomNav/>
                <Switch>
                    <Route exact path='/' component={ Home } ></Route>
                    <Route path='/life' component={ LifeService } ></Route>
                    <Route path='/shop' component={ Shop } ></Route>
                    <Route path='/user' component={ User } ></Route>
                </Switch>
            </Layout>
            </Switch>
        </Router>
    )
}
export default AppRouter