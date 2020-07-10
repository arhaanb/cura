import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonFab, IonFabButton, IonFabList, IonIcon, IonItem, IonBadge, IonLabel, IonAlert, useIonViewWillEnter, IonCard,IonCardTitle,IonCardContent,IonCardSubtitle,IonCardHeader, IonInfiniteScroll } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Dashboard.css';
import { getCurrentUser } from '../firebaseConfig';
import { Redirect, useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { logoutUser } from '../firebaseConfig'
import { eyedropOutline, barChartOutline, heartOutline, personOutline, analyticsOutline, key } from 'ionicons/icons';
import { hostname } from 'os';
import Vaccines from './Vaccines';
import { State } from 'ionicons/dist/types/stencil-public-runtime';
const axios = require('axios')

const Hospitals: React.FC = () => {
	const [showAlert, setShowAlert] = useState(false);
	

	//Basically, data aa raha hai but it isnt being saved to this state figure out what type the data is and use proper brackets in the state
	const [hospital, setHospital] = useState([{
		description:'',
		location:'',
		name:'',
		vaccines:'',
		id:''
	}

	])
	const history = useHistory()
	const username = useSelector((state: any) => state.user.username)
	function dashrouting(){
		if(username === 'minet'){
			history.replace('/admindash')
		}else{
			history.replace('/dashboard')
		}
	}
	 useEffect(()=>{
		axios.get('https://api.arhaanb.co/cura/hospitals')
		.then((res: any) => {
			setHospital(res.data)
		})
	},[])
	console.log(hospital)
	const data = hospital


	async function dataloader() {

	}

	//load data every time view mounts
	const mount = useIonViewWillEnter(dataloader)


	return (
		<IonPage>
			
			<IonHeader>
			</IonHeader>
			<IonContent 
			scrollEvents={true}>
				<p>HOSPITALS</p>
				<IonAlert
					isOpen={showAlert}
					onDidDismiss={() => setShowAlert(false)}
					cssClass='my-custom-class'
					header={'This Hospital is currently Functional!'}
					subHeader={'hjh'}
					message={'Feel Free to Visit!'}
					buttons={['Okay']} />


			{hospital.map(hospital=>(
				<IonInfiniteScroll>
				<IonCard color='dark'>
				<IonCardHeader>
					<IonCardTitle key={hospital.name}>{hospital.name}</IonCardTitle>
					<IonCardSubtitle key={hospital.location}>{hospital.location}</IonCardSubtitle>
					<IonCardContent key={hospital.description}>{hospital.description}</IonCardContent>
					<IonButton color='secondary' onClick={() => setShowAlert(true)}>More</IonButton>
				</IonCardHeader>
				
				</IonCard>
				</IonInfiniteScroll>
			))}



			<IonFab slot='fixed' vertical='bottom' horizontal='end'>
				<IonFabButton>
					<IonIcon icon={analyticsOutline} />
				</IonFabButton>
				<IonFabList side='top'>
					<IonFabButton routerLink='/Vaccines'>
						<IonIcon icon={eyedropOutline} />
					</IonFabButton>
					<IonFabButton routerLink='/news'>
						<IonIcon icon={barChartOutline}></IonIcon>
					</IonFabButton>
					<IonFabButton routerLink='/hospitals'>
						<IonIcon icon={heartOutline}></IonIcon>
					</IonFabButton>
					<IonFabButton onClick={dashrouting}>
						<IonIcon icon={personOutline}></IonIcon>
					</IonFabButton>
				</IonFabList>
			</IonFab>
			</IonContent>
		</IonPage>
	);
};

export default Hospitals;
