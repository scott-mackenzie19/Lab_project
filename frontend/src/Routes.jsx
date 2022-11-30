import { BrowswerRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Login from './pages/profile/Login';
import Login from './pages/login/login';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route path="/login">
                    <Home />
                </Route>
                <Route path="/register">
                    <Home />
                </Route>
                <Route path="/profile/:id">
                    <Profile id={lastItem} />
                </Route>
            </Switch>
        </Router>
    )
}