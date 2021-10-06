import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Recipes from './pages/js/Recipes'
import BMI from './pages/js/BMI'
import Experience from './pages//js/Experience'
import DietInfo from './pages/js/DietInfo'
import AboutUs from './pages/js/AboutUs'
import SearchConsulent from './pages/js/SearchConsulent'
import Appointments from './pages/js/Appointments/Appointments'
import Account from './pages/js/Account/Account'
import News from './pages/js/News/News'
import ClientStory from './pages/js/Stories/ClientStory';
import AboutApp from './pages/js/AboutApp'
import RecipeInfo from './pages/js/Recipes/RecipeInfo'
import Progress from './pages/js/Voortgang/Progress'
import AppointmentInfo from './pages/js/Appointments/AppointmentInfo'

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {/*Main nav routes */}
        <Route path="/home" exact component={Home} />
        <Route path="/news" component={News} />
        <Route path="/calendar" component={Appointments} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/account" component={Account} />

        {/* Secondary nav routes */}
        <Route path="/bmi" component={BMI} />
        <Route path="/experience" component={Experience} />
        <Route path="/dietinfo" component={DietInfo} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/searchConsulents" component={SearchConsulent} />
        <Route path="/stories" component={ClientStory} />
        <Route path="/aboutApp" component={AboutApp} />
        <Route path="/recipe/:title" component={RecipeInfo} />
        <Route path="/voortgang" component={Progress} />
        <Route path="/afspraak/:datum_tijd" component={AppointmentInfo} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
