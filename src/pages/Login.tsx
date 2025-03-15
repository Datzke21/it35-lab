import { 
  IonAlert,
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
      useIonRouter,
  } from '@ionic/react';
  import { eye, lockClosed} from 'ionicons/icons';
  const Login: React.FC = () => {
    const navigation = useIonRouter();

    const doLogin = () => {
        navigation.push('/it35-lab/app','forward','replace');
    }
    function setEmail(arg0: string): void{
      throw new Error('Function not implemented.');
    }
    function setPassword(args0: string): void{
      throw new Error('Function not implemented');
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

      
        
        <IonContent className='ion-padding'>
        <div style={{textAlign: "center", marginBottom: "20px"}}>
          <IonAvatar style={{width: "120px", heigh: "120px", margin: "auto"}}>
            <img src='https://tse1.mm.bing.net/th?id=OIP.rX298mOw30d82kcPsL9cxgHaEK&pid=Api&P=0&h=180qzytdg8xliuaeLun.jpg' alt='avatar'
            style={{width: "100%", height: "100px", borderRadius: "50%"}}
            />
          </IonAvatar>
        </div>
        <>
        <IonInput
        label='Email'
        labelPlacement="floating" 
          value=""
          onIonInput={(e) => setEmail(e.detail.value!)}
          placeholder="Enter email" />

          < br/>
          <IonInput 
          type="password" 
          label="Password" 
          labelPlacement="floating"
          value=""
          onIonInput={(e) => setPassword(e.detail.value!)}
          placeholder="Enter password" />
            <IonInputPasswordToggle slot="end" />
            
        </>
            <IonButton onClick={() => doLogin()} expand='full'>
                login
            </IonButton>
            <IonButton onClick={() => doLogin()} expand='full'>
                Signup
            </IonButton>

        </IonContent>
      </IonPage>
    );
  };
  
  export default Login;
  