import { IonButton, 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  useIonRouter } from '@ionic/react';

const Register: React.FC = () => {
const navigation = useIonRouter();

return (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Register</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent className="ion-padding">
      <h2>Registration Successful!</h2>
      <IonButton expand="full" onClick={() => navigation.push('/login')}>Go to Login</IonButton>
    </IonContent>
  </IonPage>
);
};

export default Register;
