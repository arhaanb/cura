import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonFab,IonFabButton,IonFabList, IonIcon } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Dashboard.css';
import {getCurrentUser} from '../firebaseConfig';
import { Redirect, useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import {logoutUser} from '../firebaseConfig'
import { eyedropOutline, barChartOutline, heartOutline, personOutline, analyticsOutline} from 'ionicons/icons';


const Hospitals: React.FC = () => {

  //{username} is the registered username so use that kbye
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent>
      <IonToolbar>
        </IonToolbar>
        <p>HOSPITALS</p>
        <IonHeader collapse="condense">
        </IonHeader> 
        <IonFab slot='fixed' vertical='bottom' horizontal='end'>
        <IonFabButton>   
        <IonIcon icon={analyticsOutline}/>
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

export default Hospitals;
