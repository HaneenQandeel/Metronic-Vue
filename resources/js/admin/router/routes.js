import Dashboard from '../components/Dashboard';
import Layout from '../../Layout';
import Register from '../components/User/Register';
import LogIn from '../components/User/log';
import StateColors from '../components/StateColors'
import Typography from '../components/Typography'

export default  [
    { path: '', component:  Layout },
    { path: '/state', component:  StateColors },
    { path: '/registerUser', component:  Register },
    { path: '/logIn', component:  LogIn},
    { path: '/state-color', component:  StateColors },
    { path: '/typography', component:  Typography }
]
