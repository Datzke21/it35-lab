import { 
    IonAvatar,
    IonButton,
    IonButtons,
      IonContent, 
      IonHeader, 
      IonInput,
      IonInputPasswordToggle,
      IonItem,
      IonList,
      IonMenuButton, 
      IonPage, 
      IonText,
      IonTitle, 
      IonToolbar, 
      useIonRouter
  } from '@ionic/react';
  
  const login: React.FC = () => {
    const navigation = useIonRouter();

    const doLogin = () => {
        navigation.push('/it35-lab/app','forward','replace');
    }
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Login</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonAvatar>
          
        </IonAvatar>

        <IonList>
          <IonItem>
            <IonInput placeholder='Username'></IonInput>
            <IonInput placeholder='Password'></IonInput>
          </IonItem>
        </IonList>
        <IonContent className='ion-padding'>
            <IonButton onClick={() => doLogin()} expand='full'>
                login
            </IonButton>
        </IonContent>
      </IonPage>
    );
  };
  
  export default login;