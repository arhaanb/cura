import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonFab,IonFabButton,IonFabList, IonIcon,IonItem,IonBadge,IonLabel,IonAlert } from '@ionic/react';
import React ,{useState}from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Dashboard.css';
import {getCurrentUser} from '../firebaseConfig';
import { Redirect, useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import {logoutUser} from '../firebaseConfig'
import { eyedropOutline, barChartOutline, heartOutline, personOutline, analyticsOutline} from 'ionicons/icons';
import { hostname } from 'os';
import Vaccines from './Vaccines';


const Hospitals: React.FC = () => {
    const [showAlert, setShowAlert] = useState(false);

  //map these somehow
const hosps = ['confidentialcare','mycare','MINTE','Carmel']
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent>
        <p>HOSPITALS</p>
            {hosps.map((hospital,i)=>(
                        <IonItem button onClick={() => {
                            setShowAlert(true)
                         }}>
                     <IonLabel>{hospital}</IonLabel> 
                    </IonItem>
            ))}
            <IonAlert
            isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            cssClass='my-custom-class'
            header={'This Hospital is currently Functional!'}
            subHeader={''}
             message={'Feel Free to Visit!'}
            buttons={['Okay']}/>
    
  </IonContent>
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
    </IonPage>
  );
};

export default Hospitals;
