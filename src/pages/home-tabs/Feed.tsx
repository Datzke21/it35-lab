import { 
  IonButton,
    IonButtons,
      IonCard,
      IonCardContent,
      IonCardSubtitle,
      IonCardTitle,
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
          <IonCard
>         <IonHeader>
          <IonCardTitle>One Piece</IonCardTitle>
          <IonCardSubtitle>Zoro</IonCardSubtitle>
      </IonHeader>
      
      <IonCardContent>"Only those who have suffered long, can see the light within the shadows." – Roronoa Zoro

        <IonButton fill='clear'>Action1</IonButton>
        
        <IonButton fill='clear'>Action2</IonButton>

      </IonCardContent>
  </IonCard>        
  </IonContent>
      </IonPage>
    );
  };
  export default Feed;