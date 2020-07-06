import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonFab,IonFabButton,IonFabList, IonIcon,IonInput } from '@ionic/react';
import React ,{useState}from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Dashboard.css';
import {getCurrentUser} from '../firebaseConfig';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import {logoutUser} from '../firebaseConfig'
import { eyedropOutline, barChartOutline, heartOutline, personOutline, analyticsOutline} from 'ionicons/icons';
import { Toast } from '../toast';
const axios = require('axios')



const Admin: React.FC = () => {
    const history = useHistory()

  async function logout (){
    await logoutUser()
    history.replace('/login')
  }
  const [hostp,setHosp] = useState('');
  const [description,setDescription] = useState('');
  const [vaccines,setVaccines] = useState('');
  const [location,setLocation] = useState('')
  function sendHospital(){
    axios.post('https://api.arhaanb.co/cura/hospitals',{
        name: hostp,
        description:description,
        vaccines:vaccines,
        location:location
    }).then((res:any) =>{
        console.log(res)
        Toast('Hospital Registered')
    }).catch((error:any) => {
        console.error(error)
      })
  }
  //{username} is the registered username so use that kbye
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent>
      <IonToolbar>
        </IonToolbar>
        <p className='Greeting'> Hello Minte</p>
        <IonHeader collapse="condense">
        </IonHeader> 
        <IonInput className="form" placeholder="hospital" onIonChange={(e:any) => setHosp(e.target.value)}/>
            <IonInput className="form" placeholder="description" onIonChange={(e:any) => setDescription(e.target.value)}/>
            <IonInput  className="form" placeholder="vaccines" onIonChange={(e:any) => setVaccines(e.target.value)}/>
            <IonInput  className="form" placeholder="Location" onIonChange={(e:any) => setLocation(e.target.value)}/>
        <IonButton color="secondary" className="buttonLogin" onClick={sendHospital}>Register</IonButton>
        <br>
        </br>
        <br/>
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

export default Admin;
