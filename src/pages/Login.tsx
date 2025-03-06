import { 
    IonIcon,
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
      useIonRouter,
      IonImg,
  } from '@ionic/react';
  import { eye, lockClosed} from 'ionicons/icons';
  import { IonAvatar } from '@ionic/react';
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
        <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </IonAvatar>           
        <IonList>
      <IonItem>
        <IonInput labelPlacement="stacked" label="" placeholder="Email">
          <IonIcon slot="start" icon={lockClosed} aria-hidden="true"></IonIcon>
          <IonButton fill="clear" slot="end" aria-label="Show/hide">
            <IonIcon slot="icon-only" name={eye} aria-hidden="true"></IonIcon>
          </IonButton>
        </IonInput>
        <IonInput placeholder="Password" label="">
          <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
        </IonInput>
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
  