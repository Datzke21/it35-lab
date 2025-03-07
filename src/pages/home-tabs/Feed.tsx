import { 
  IonAvatar,
  IonButton,
    IonButtons,
    IonIcon,
    IonItem,
    IonText,
    IonList,
      IonCard,
      IonCardContent,
      IonCardSubtitle,
      IonCardTitle,
      IonContent, 
      IonHeader, 
      IonMenuButton, 
      IonPage, 
      IonTitle, 
      IonToolbar, 
      IonLabel
  } from '@ionic/react';
  import { chatbubbleEllipsesOutline, ellipsisHorizontal, heart, paperPlaneOutline } from 'ionicons/icons';
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
        <IonList lines='none'>
          <IonItem className='ion-margin-top'>
            <IonAvatar slot='start'>
            <img alt="Sample" src="https://tse1.mm.bing.net/th?id=OIP.rX298mOw30d82kcPsL9cxgHaEK&pid=Api&P=0&h=180qzytdg8xliuaelun.jpg"/>
            </IonAvatar>
            <IonLabel>
              <IonText>
                One piece
              </IonText>
            </IonLabel>
          </IonItem>
        </IonList>
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