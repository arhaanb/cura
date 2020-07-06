import { IonContent, IonPage,  IonButton, IonInput } from '@ionic/react';
import React , {useState}from 'react';
import './login.css';
import {loginUS} from '../firebaseConfig'
import { Toast } from '../toast';
import { useDispatch } from 'react-redux';
import {setUserState} from '../Reducers/Actions'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
    const [Username,setUsername] = useState('');
    const [Password,setPassword] = useState('');
    const dispatch = useDispatch()
    const history = useHistory()

    async function loginUser(){
        const res:any = await loginUS(Username,Password)
        if(!res){
            Toast('Wrong login')
        }else{Toast('Logged In')
        try
        {dispatch(setUserState(res.user.email))
        if (Username === 'minet' || Password === 'minettime'){
            history.replace('/admindash')}
        else 
           {history.replace('/dashboard')}
        }
        catch(error){
            Toast(error)
            console.log(error)
        }
    }}
  return (
    <IonPage className='body'>
        <IonContent className="Formstyle">
            <IonInput className="form" placeholder="Username" onIonChange={(e:any) => setUsername(e.target.value)}/>
            <IonInput type='password' className="form" placeholder="Password" onIonChange={(e:any) => setPassword(e.target.value)}/>
        <IonButton className='buttonLogin' onClick={loginUser}>Login</IonButton>
        <p className='help'>Don't Have an Account? <Link to='/register'>Register</Link></p>
        </IonContent>
    </IonPage>
  );
};

export default Login;
