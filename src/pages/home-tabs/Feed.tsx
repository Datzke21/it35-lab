import { 
    IonButtons,
      IonContent, 
      IonHeader, 
      IonMenuButton, 
      IonPage, 
      IonTitle, 
      IonToolbar 
  } from '@ionic/react';
  const Feed: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Feed</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <center>
        <div className="feed-container">
      <h3 className="feed-title">Welcome</h3>
      <h3 className="feed-title">To</h3>
      <h3 className="feed-title">Daryl Dajao</h3>
      <h3 className="feed-title">Feed</h3>
        <img src=""alt="Daryl Dajao" />
        </div>
        </center>
        </IonContent>
      </IonPage>
    );
  };
  export default Feed;