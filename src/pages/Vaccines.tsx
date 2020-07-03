import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonFab,IonFabButton,IonFabList, IonIcon,IonCard,IonCardContent,IonCardHeader,IonCardSubtitle,IonCardTitle } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Dashboard.css';
import {getCurrentUser} from '../firebaseConfig';
import { Redirect, useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import {logoutUser} from '../firebaseConfig'
import { eyedropOutline, barChartOutline, heartOutline, personOutline, analyticsOutline} from 'ionicons/icons';


const Vaccines: React.FC = () => {

  //Lmao sorry for messy code but just style kthx ly
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent>
        <p>Vaccines</p>
        <IonCard color='tertiary'>
          <IonCardHeader>
            <IonCardTitle>HARDCODE VACCINE NAMES</IonCardTitle>
            <IonCardSubtitle>its 4AM im sleepy</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
              SHOTS SHOTS SHOTS SHOTS SHOTS SHOTS SHOTS SHOTS SHOTS SHOTS SHOTS SHOTS 
      </IonCardContent>
        </IonCard>
        <IonCard color='tertiary'>
          <IonCardHeader>
          <IonCardTitle>HARDCODE VACCINE NAMES</IonCardTitle>
            <IonCardSubtitle>Awwwwwwww</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
          SHOTS SHOTS SHOTS SHOTS SHOTS SHOTS SHOTS SHOTS SHOTS SHOTS SHOTS SHOTS 
      </IonCardContent>
        </IonCard>
        <IonCard color='tertiary'>
          <IonCardHeader>
          <IonCardTitle>HARDCODE VACCINE NAMES</IonCardTitle>
            <IonCardSubtitle>Awwwwwwww</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
          SHOTS SHOTS SHOTS SHOTS SHOTS SHOTS SHOTS SHOTS SHOTS SHOTS SHOTS SHOTS 
      </IonCardContent>
        </IonCard>
        <IonCard color='tertiary'>
          <IonCardHeader>
          <IonCardTitle>HARDCODE VACCINE NAMES</IonCardTitle>
            <IonCardSubtitle>Awwwwwwww</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
          SHOTS SHOTS SHOTS SHOTS SHOTS SHOTS SHOTS SHOTS SHOTS SHOTS SHOTS SHOTS 
      </IonCardContent>
        </IonCard>
                <IonCard color='tertiary'>
          <IonCardHeader>
          <IonCardTitle>HARDCODE VACCINE NAMES</IonCardTitle>
            <IonCardSubtitle>Awwwwwwww</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
          SHOTS SHOTS SHOTS SHOTS SHOTS SHOTS SHOTS SHOTS SHOTS SHOTS SHOTS SHOTS 
      </IonCardContent>
        </IonCard>
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

export default Vaccines;
