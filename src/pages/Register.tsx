import { 
  IonButton,
  IonContent, 
  IonHeader, 
  IonInput,
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

const Register: React.FC = () => {
  const navigation = useIonRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);

  const registerUser = () => {
    if (!username || !email || !password) {
      return;
    }

    // Store user data in localStorage (for demo purposes)
    localStorage.setItem('username', username);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    // Show success toast and redirect to login
    setShowToast(true);
    setTimeout(() => navigation.push('/login', 'forward', 'replace'), 2000);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar> 
      </IonHeader>

      <IonContent className='ion-padding'>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Username</IonLabel>
            <IonInput 
              value={username}
              onIonInput={(e) => setUsername(e.detail.value!)}
              placeholder="Enter username"
            />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput 
              type="email"
              value={email}
              onIonInput={(e) => setEmail(e.detail.value!)}
              placeholder="Enter email"
            />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput 
              type="password"
              value={password}
              onIonInput={(e) => setPassword(e.detail.value!)}
              placeholder="Enter password"
            />
          </IonItem>
        </IonList>

        <IonButton onClick={registerUser} expand='full'>Sign Up</IonButton>
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

export default Register;
