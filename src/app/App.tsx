import React from 'react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import '../css/App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { RestaurantPage } from './screens/MemberPage';
import { ComminityPage } from './screens/CommunityPage';
import { OrdersPage } from './screens/OrdersPage';
import { MemberPage } from './screens/RestaurantPage';
import { HelpPage } from './screens/HelpPage';
import { LoginPage } from './screens/LoginPage';
import { HomePage } from './screens/HomePage';

function Dishes() {  
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/restaurant">RestaurantPage</Link>
                        </li>
                        <li>
                            <Link to="/community">CommunityPage</Link>
                        </li>
                        <li>
                            <Link to="orders">OrdersPage</Link>
                        </li>
                        <li>
                            <Link to="member-page">MemberPage</Link>
                        </li>
                        <li>
                            <Link to="help">HelpPage</Link>
                        </li>
                        <li>
                            <Link to="login">LoginPage</Link>
                        </li>
                        <li>
                            <Link to="/">HomePage</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/restaurant">
                        <RestaurantPage/>
                    </Route>
                    <Route path="/community">
                        <ComminityPage/>
                    </Route>
                    <Route path="/orders">
                                <OrdersPage/>
                    </Route>
                    <Route path="/member-page">
                                <MemberPage/>
                    </Route>
                    <Route path="/help">
                                <HelpPage/>
                    </Route>
                    <Route path="/login">
                                <LoginPage/>
                    </Route>         
                    <Route path="/">
                        <HomePage/>
                    </Route>
                </Switch>
            </div>
     </Router>
    )
}
  
export default Dishes;

function Home() {
    return <h2>Home</h2>
}



