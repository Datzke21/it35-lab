import { 
    IonAvatar,
    IonButton,
    IonButtons,
      IonContent, 
      IonHeader, 
      IonInput,
      IonInputPasswordToggle,
      IonItem,
      IonLabel,
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
          <label>UserName</label>
            <input type="text" name="User Name"></input>
            <IonInput placeholder='Username'></IonInput>
            <label>Password</label>
            <input type="password" name="Password"></input>
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