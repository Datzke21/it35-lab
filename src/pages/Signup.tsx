import { 
  IonAvatar,
  IonButton,
  IonContent, 
  IonHeader, 
  IonInput,
  IonInputPasswordToggle,
  IonItem,
  IonLabel,
  IonList,
  IonPage, 
  IonTitle, 
  IonToolbar, 
  useIonRouter,
  IonToast
} from '@ionic/react';
import React, { useState } from 'react';

const Signup: React.FC = () => {
  const navigation = useIonRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);

  const register = () => {
    if (!username || !email || !password) {
      return;
    }

    localStorage.setItem('username', username);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    setShowToast(true);
    setTimeout(() => navigation.push('/login', 'forward', 'replace'), 2000);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Signup</IonTitle>
        </IonToolbar> 
      </IonHeader>

      <IonContent className='ion-padding'>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Username</IonLabel>
            <IonInput 
              value={username}
              onIonInput={(e) => setUsername(e.detail.value!)}
              placeholder=""
            />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput 
              type="email"
              value={email}
              onIonInput={(e) => setEmail(e.detail.value!)}
              placeholder=""
            />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput 
              type="password"
              value={password}
              onIonInput={(e) => setPassword(e.detail.value!)}
              placeholder=""
            />
            <IonInputPasswordToggle slot="end" />
          </IonItem>
        </IonList>

        <IonButton onClick={register} expand='full'>Register</IonButton>
        <IonButton onClick={() => navigation.push('/login')} expand='full' color="secondary">Back to Login</IonButton>

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Registration Successful! Redirecting to login..."
          duration={2000}
          color="success"
        />
      </IonContent>
    </IonPage>
  );
};

export default Signup;
