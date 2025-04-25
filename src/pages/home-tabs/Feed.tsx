import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonText
} from '@ionic/react';
import FeedContainer from '../../components/FeedContainer';

const Feed: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonButtons slot="start">
            <IonMenuButton />
           </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen color="light">
        <div style={{ padding: '16px' }}>
          <IonCard className="ion-activatable ripple-parent">
            <IonCardHeader>
              <IonCardTitle>Welcome to your feed</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonText color="medium">
                Here's where you’ll see your latest updates.
              </IonText>
            </IonCardContent>
          </IonCard>

          <FeedContainer />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Feed;