import {
  IonAlert,
  IonAvatar,
  IonButton,
  IonContent,
  IonIcon,
  IonInput,
  IonInputPasswordToggle,
  IonPage,
  IonToast,
  IonModal,
  useIonRouter
} from '@ionic/react';
import { happyOutline } from 'ionicons/icons';
import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import logo from '../assets/itachi.jpg';

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const doLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setErrorMessage(error.message);
      setShowAlert(true);
    } else {
      setShowToast(true);
      setTimeout(() => {
        navigation.push('/it35-lab/app', 'forward', 'replace');
      }, 300);
    }
  };

  return (
    <IonPage>
      <IonContent className='ion-padding'>
        <div style={{
          backgroundImage: `url(${logo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '19%'
        }}>
          <IonAvatar style={{ width: '260px', height: '260px', marginBottom: '15px', border: '4px solidrgb(100, 5, 5)' }}>
            <img alt="itachi.jpg" src={logo} />
          </IonAvatar>
          <h1 style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>Welcome Back Ninja! </h1>
          <IonInput
            label="Email"
            labelPlacement="floating"
            fill="outline"
            type="email"
            placeholder="20191832@nbsc.edu.ph"
            value={email}
            onIonChange={e => setEmail(e.detail.value!)}
          />
          <IonInput style={{
            marginTop: '10px',
          }}
            fill="outline"
            type="password"
            placeholder="Password"
            value={password}
            onIonChange={e => setPassword(e.detail.value!)}
          ><IonInputPasswordToggle slot="end"></IonInputPasswordToggle></IonInput>
        </div>
        <IonButton onClick={doLogin} expand="block" shape='round' color='warnng'
        style={{
          marginTop: '20px',
                fontWeight: 'bold',
                letterSpacing: '1px',
                background: 'linear-gradient(to right,rgb(255, 21, 0),rgb(226, 12, 8))',
        }}>
          Login
        </IonButton>

        <IonButton routerLink="/it35-lab/register" expand="full" fill="clear" shape='round'>
          Don't have an account? Register here
        </IonButton>

        {/* IonAlert for displaying login errors */}
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header="Login Failed"
          message={errorMessage}
          buttons={['OK']}
        />

        {/* IonToast for success message */}
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Login successful! Redirecting..."
          duration={1500}
          position="top"
          color="primary"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;