import { 
    IonButtons,
      IonContent, 
      IonItem,
      IonLabel,
      IonHeader, 
      IonMenuButton, 
      IonPage, 
      IonTitle, 
      IonToolbar,
      IonList
  } from '@ionic/react';
  const Favorites: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Favorites</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent color="Light Blue">
          <IonList inset={true}>
          <IonItem>
            <IonLabel>One Piece</IonLabel>
          </IonItem>
          <IonItem>
          <IonLabel>Dragonn Ball</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Hunter x Hunter</IonLabel>
        </IonItem>
          </IonList>
        </IonContent>
      </IonPage>
    );
  };
  export default Favorites;