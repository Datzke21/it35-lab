import { IonContent, 
  IonHeader, 
  IonIcon,
   IonLabel,
    IonPage, 
    IonRouterOutlet, 
    IonTabBar, 
    IonTabButton, 
    IonTabs, 
    IonTitle, 
    IonToolbar 
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Daryl Dajao</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent >
    </IonPage>
  );
};

export default Home;
