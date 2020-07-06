import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonFab,IonFabButton,IonFabList, IonIcon,IonItem,IonBadge,IonLabel,IonAlert, useIonViewWillEnter, IonCard } from '@ionic/react';
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
import { State } from 'ionicons/dist/types/stencil-public-runtime';
const axios = require('axios') 

const Hospitals: React.FC = () => {
    const [showAlert, setShowAlert] = useState(false);

        //Basically, data aa raha hai but it isnt being saved to this state figure out what type the data is and use proper brackets in the state
    const [hospital,setHospital] = useState((''))


    
    async function dataloader(){
     await axios.get('https://api.arhaanb.co/cura/hospitals')
      .then((res:any) =>{

        //this state isnt being saved
        setHospital(res)
        console.log(hospital)

        //the data is being logged
        console.log(res.data)
      })
    }

    //load data every time view mounts
    const mount = useIonViewWillEnter(dataloader)

  
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent>
        <p>HOSPITALS</p>
            <IonAlert
            isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            cssClass='my-custom-class'
            header={'This Hospital is currently Functional!'}
            subHeader={''}
             message={'Feel Free to Visit!'}
            buttons={['Okay']}/>
    
  </IonContent>
  <p>{}aaa</p>
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
