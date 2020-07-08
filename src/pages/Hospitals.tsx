import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonFab, IonFabButton, IonFabList, IonIcon, IonItem, IonBadge, IonLabel, IonAlert, useIonViewWillEnter, IonCard, IonCardTitle, IonCardContent, IonCardSubtitle, IonCardHeader, IonInfiniteScroll } from '@ionic/react';
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
		description: '',
		location: '',
		name: '',
		vaccines: '',
		id: ''
	}

	])


	useEffect(() => {
		axios.get('https://api.arhaanb.co/cura/hospitals')
			.then((res: any) => {
				setHospital(res.data)
			})
	}, [])
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
			<IonContent scrollEvents={true}>
				<p>HOSPITALS</p>


				<IonInfiniteScroll>
					{hospital.map(hospital => (
						<IonCard color='dark' key={hospital.name}>
							<IonCardHeader>
								<IonCardTitle>{hospital.name}</IonCardTitle>
								<IonCardSubtitle>{hospital.location}</IonCardSubtitle>
								<IonCardContent>{hospital.description}</IonCardContent>
								{/* <IonButton color='secondary' onClick={() => setShowAlert(true)}>More</IonButton> */}
								{/* <IonAlert
								isOpen={showAlert}
								onDidDismiss={() => setShowAlert(false)}
								cssClass='my-custom-class'
								key={hospital.name}
								header={hospital.name}
								subHeader={hospital.location}
								message={hospital.description}
								buttons={['Close']} /> */}
							</IonCardHeader>
						</IonCard>
					))}
				</IonInfiniteScroll>
			</IonContent>



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
					<IonFabButton routerLink='/dashboard'>
						<IonIcon icon={personOutline}></IonIcon>
					</IonFabButton>
				</IonFabList>
			</IonFab>
		</IonPage>
	);
};

export default Hospitals;
