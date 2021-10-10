import {BrowserRouter as Router, Route, Switch, NavLink, withRouter } from 'react-router-dom';
import Login from '../components/Login/Login'
import Signup from '../components/Login/Signup';
import HomePage from '../components/HomePage/Homepage'
import ProtectedRoute from './ProtectedRoute';
import {UserProvider} from '../components/Context/UserContext'
import Add_task from '../components/Add_task/Add_task'
function Navigation(props) {
    return (
        <Router>
                <Switch>
                    <Route exact path="/" authenticated={props.authenticated} component={withRouter(Login)} />
                    <Route path="/signup" component={withRouter(Signup)} />
                    <Route path="/addtask" component={withRouter(Add_task)} />
                    <UserProvider>
                        <ProtectedRoute authenticated={props.authenticated} path="/homepage" component={HomePage} />
                    </UserProvider>
                </Switch>
        </Router>
    )
}
export default Navigation