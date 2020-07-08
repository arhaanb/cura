import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonFab, IonFabButton, IonFabList, IonIcon, useIonViewWillEnter } from '@ionic/react';
import React, { useState, ComponentLifecycle, useEffect } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Dashboard.css';
import { getCurrentUser } from '../firebaseConfig';
import { Redirect, useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { logoutUser } from '../firebaseConfig'
import { eyedropOutline, barChartOutline, heartOutline, personOutline, analyticsOutline } from 'ionicons/icons';
import { error } from 'console';
const axios = require('axios')


const Dashboard: React.FC = () => {
	const [vaccine,setVaccine] = useState('')
	const [user, setUser] = useState([{
		username:'',
		Vaccinated:false
	}])
	const username = useSelector((state: any) => state.user.username)
	const history = useHistory()


	async function logout() {
		await logoutUser()
		history.replace('/login')
	}



	useEffect(() => {
		axios.post('https://api.arhaanb.co/cura/user',{
			username:username
		}).then((res:any)=>{
			setUser(res.data.vaccinated)
		}).catch((error:any)=>{
			console.log(error)
		})
			
	}, [username])

	useEffect(()=>{
		if(Boolean(user) === true){
			const vaccineStatus = 'Vaccinated'
			setVaccine(vaccineStatus)
		}else{
			const vaccineStaus = 'Not Vaccinated'
			setVaccine(vaccineStaus)
		}

	})

	console.log(user)
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
				<p>{vaccine}</p>
				<IonButton className='logoutButton' onClick={logout}>Logout</IonButton>
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
