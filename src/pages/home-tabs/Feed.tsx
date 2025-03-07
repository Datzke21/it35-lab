import { 
  IonButton, 
  IonCard, 
  IonCardContent,
  IonCardHeader, 
  IonCardSubtitle,
   IonCardTitle,
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
      
      <IonCard color="white">
      <IonCardHeader>
        <IonCardTitle>One piece</IonCardTitle>
        <IonCardSubtitle></IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Only those who have suffered long, can see the light within the shadows." – Roronoa Zoro</IonCardContent>

      <IonButton fill="clear">Action 1</IonButton>
      <IonButton fill="clear">Action 2</IonButton>
    </IonCard>
    );
  };
  export default Feed;