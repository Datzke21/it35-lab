import { 
    IonAvatar,
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
      useIonRouter
  } from '@ionic/react';
  import { eye, lockClosed} from 'ionicons/icons';
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
        <IonInput labelPlacement="stacked" label="Email" placeholder="Email">
          <IonIcon slot="start" icon={lockClosed} aria-hidden="true"></IonIcon>
          <IonButton fill="clear" slot="end" aria-label="Show/hide">
            <IonIcon slot="icon-only" name={eye} aria-hidden="true"></IonIcon>
          </IonButton>
        </IonInput>
        <IonInput type="password" label="Password" value="Never Gonna Give you up">
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