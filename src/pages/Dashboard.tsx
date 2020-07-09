import { IonContent, IonCol, IonPage, IonButton, IonFab, IonFabButton, IonFabList, IonIcon, IonGrid } from '@ionic/react';
import React, { useState, useEffect } from 'react';
// remove import ComponentLifecycle from react
// import ExploreContainer from '../components/ExploreContainer';
import './Dashboard.css';
// import { getCurrentUser } from '../firebaseConfig';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { logoutUser } from '../firebaseConfig'
import { eyedropOutline, barChartOutline, heartOutline, personOutline, analyticsOutline } from 'ionicons/icons';
// import { error } from 'console';
const axios = require('axios')


const Dashboard: React.FC = () => {
	const [vaccine, setVaccine] = useState('')
	const [user, setUser] = useState([{
		username: '',
		Vaccinated: false
	}])
	const username = useSelector((state: any) => state.user.username)
	const history = useHistory()


	async function logout() {
		await logoutUser()
		history.replace('/login')
	}



	useEffect(() => {
		axios.post('https://api.arhaanb.co/cura/user', {
			username: username
		}).then((res: any) => {
			setUser(res.data.vaccinated)
		}).catch((error: any) => {
			// console.log(error)
		})

	}, [username])

	useEffect(() => {
		if (Boolean(user) === true) {
			const vaccineStatus = 'Vaccinated'
			setVaccine(vaccineStatus)
		} else {
			const vaccineStaus = 'Not Vaccinated'
			setVaccine(vaccineStaus)
		}

	})

	// console.log(user)
	//{username} is the registered username so use that kbye
	return (
		<IonPage>
			<IonContent>
				<IonGrid>
					<IonCol>
						<p className='Greeting'> Hello {username}</p>
						{/* <IonHeader collapse="condense">
					</IonHeader> */}
						{/* <IonTitle size="small">{vaccine}</IonTitle> */}
						<p>{vaccine}</p>
						<IonButton className='logoutButton' expand="block" onClick={logout}>Logout</IonButton>
					</IonCol>
				</IonGrid>
				<IonFab slot='fixed' vertical='bottom' horizontal='end'>
					<IonFabButton>
						<IonFabButton>
							<IonIcon icon={analyticsOutline} />
						</IonFabButton>
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
			</IonContent>
		</IonPage>
	);
};

export default Dashboard;
