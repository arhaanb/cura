import { IonContent,  IonPage,  IonButton, IonInput } from '@ionic/react';
import React , {useState}from 'react';
import './login.css';
import { Toast } from '../toast';
import {registerUser} from '../firebaseConfig'
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [Cpassword,setCPassword] = useState('');

    async function reg(){
        const res = await registerUser(username,password)
        if(password !== Cpassword){
            Toast('Passwords Do Not Match')
        }
        if (res){
            Toast('Registration Complete')
        }
    }
  return (
    <IonPage>
        <IonContent className="Formstyle">
            <IonInput className="form" placeholder="Username" onIonChange={(e:any) => setUsername(e.target.value)}/>
            <IonInput type='password' className="form" placeholder="Password" onIonChange={(e:any) => setPassword(e.target.value)}/>
            <IonInput type='password' className="form" placeholder="Password" onIonChange={(e:any) => setCPassword(e.target.value)}/>
        <IonButton className="buttonLogin" onClick={reg} routerLink='/login'>Register</IonButton>
        <p className='help'>Already have an Account? <Link to='/login'>Login</Link></p>
        </IonContent>
    </IonPage>
  );
};

export default Register;
