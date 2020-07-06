import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonFab,IonFabButton,IonFabList, IonIcon, useIonViewWillEnter } from '@ionic/react';
import React, { useState, ComponentLifecycle } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Dashboard.css';
import {getCurrentUser} from '../firebaseConfig';
import { Redirect, useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import {logoutUser} from '../firebaseConfig'
import { eyedropOutline, barChartOutline, heartOutline, personOutline, analyticsOutline} from 'ionicons/icons';
const axios = require('axios')


const Dashboard: React.FC = () => {
  const [data,setData] = useState('')
  const [user,setUser] = useState('')
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
      </IonHeader>
      <IonContent>
      <IonToolbar>
        </IonToolbar>
        <p className='Greeting'> Hello {username}</p>
        <IonHeader collapse="condense">
        </IonHeader> 
        <IonButton className='logoutButton'  onClick={logout}>Logout</IonButton>
        <IonFab slot='fixed' vertical='bottom' horizontal='end'>
        <IonFabButton>  
        <IonFabButton>   
        <IonIcon icon={analyticsOutline}/>
             </IonFabButton>
            </IonFabButton>
        <IonFabList side='top'>        
        <IonFabButton routerLink='/Vaccines'>
        <IonIcon icon={eyedropOutline}/>
          </IonFabButton>     
        <IonFabButton routerLink='/news'>
          <IonIcon icon={barChartOutline}></IonIcon>
          </IonFabButton>     
        <IonFabButton routerLink='/hospitals'>
        <IonIcon icon={heartOutline}></IonIcon>
        </IonFabButton>
        <IonFabButton routerLink='/dashboard'>
        <IonIcon icon={personOutline}></IonIcon>
        </IonFabButton>
        </IonFabList>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
