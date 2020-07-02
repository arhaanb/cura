import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Dashboard.css';
import {getCurrentUser} from '../firebaseConfig';
import { Redirect, useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import {logoutUser} from '../firebaseConfig'

const Dashboard: React.FC = () => {

  const username = useSelector((state:any) => state.user.username)
  const history = useHistory()
  async function logout (){
    await logoutUser()
    history.replace('/login')
  }
  //{username} is the registered username so use that kbye
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p className='Greeting'> Hello {username}</p>
        <IonHeader collapse="condense">
        </IonHeader>
        <IonButton className='logoutButton'  onClick={logout}>Logout</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
