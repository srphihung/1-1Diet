import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Recipes from './pages/js/Recipes/Recipes';
import BMI from './pages/js/BMI';
import Experience from './pages//js/Experience';
import DietInfo from './pages/js/DietInfo';
import AboutUs from './pages/js/AboutUs';
import SearchConsulent from './pages/js/SearchConsulent';
import Appointments from './pages/js/Appointments/Appointments';
import News from './pages/js/News/News';
import ClientStory from './pages/js/Stories/ClientStory';
import AboutApp from './pages/js/AboutApp';
import RecipeInfo from './pages/js/Recipes/RecipeInfo';
import Progress from './pages/js/Voortgang/Progress';
import AppointmentInfo from './pages/js/Appointments/AppointmentInfo';
import AuthService from "./services/auth.service";
import IUser from './types/user.type';
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import EventBus from "./common/EventBus";
import {Component} from "react";

type Props = {};

type State = {
  showModeratorBoard: boolean,
  showAdminBoard: boolean,
  currentUser: IUser | undefined
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        // showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        // showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }

    EventBus.on("logout", this.logOut);
  }

  componentWillUnmount() {
    EventBus.remove("logout", this.logOut);
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const {currentUser, showModeratorBoard, showAdminBoard} = this.state;

    return (
        <IonApp>
          <IonReactRouter>
            <IonRouterOutlet>
              {/*Main nav routes */}
              <Route path={["/", "/home"]} exact component={Home}/>
              <Route path="/news" component={News}/>
              <Route path="/calendar" component={Appointments}/>
              <Route path="/recipes" component={Recipes}/>
              <Route path="/profile" component={Profile}/>
              <Route path="/login" component={Login}/>

              {/* Secondary nav routes */}
              <Route path="/bmi" component={BMI}/>
              <Route path="/experience" component={Experience}/>
              <Route path="/dietinfo" component={DietInfo}/>
              <Route path="/aboutus" component={AboutUs}/>
              <Route path="/searchConsulents" component={SearchConsulent}/>
              <Route path="/stories" component={ClientStory}/>
              <Route path="/aboutApp" component={AboutApp}/>
              <Route path="/recipe/:title" component={RecipeInfo}/>
              <Route path="/voortgang" component={Progress}/>
              <Route path="/afspraak/:datum_tijd" component={AppointmentInfo}/>

              {/* tertiary nav routes */}
              <Route exact path="/register" component={Register}/>
              <Route path="/user" component={BoardUser}/>
              <Route path="/mod" component={BoardModerator}/>
              <Route path="/admin" component={BoardAdmin}/>
            </IonRouterOutlet>
          </IonReactRouter>
        </IonApp>
    );
  }
}
export default App;
