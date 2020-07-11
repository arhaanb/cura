import { IonContent, IonHeader, IonPage, IonFab, IonFabButton, IonFabList, IonIcon, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import React from 'react';
// import ExploreContainer from '../components/ExploreContainer';
import './Dashboard.css';
// import { getCurrentUser } from '../firebaseConfig';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
// import { logoutUser } from '../firebaseConfig'
import '../fonts/fonts.css';
import './Hospitals.css'
import { eyedropOutline, barChartOutline, heartOutline, personOutline, analyticsOutline } from 'ionicons/icons';


const Vaccines: React.FC = () => {

	const history = useHistory()
	const username = useSelector((state: any) => state.user.username)
	function dashrouting() {
		if (username === 'minet') {
			history.replace('/admindash')
		} else {
			history.replace('/dashboard')
		}
	}

	//Lmao sorry for messy code but just style kthx ly
	return (
		<IonPage>
			<IonHeader>
			</IonHeader>
			<IonContent>
				<div className="header">
					<h1 className="center title">Vaccines</h1>
					<p className="center">Know your medicine.</p>
				</div>

				<IonCard color='tertiary' className="card new">
					<IonCardHeader>
						<IonCardTitle className="center tag">COV6699ee</IonCardTitle>
						{/* <IonCardSubtitle>its 4AM im sleepy</IonCardSubtitle> */}
						<p><span className="subhead">Type:</span>Antibody Treatment</p>
						<p><span className="subhead">Stage:</span>Completed, in Production</p>
						<p className="lastchild"><span className="subhead">Research Center:</span>MINET Biotech</p>
						<p>
							Sona Sone Patole Lakhaan Sona Sone Patole Yeah... Ae Takdiyaan Rehndiyaan Aankhaan
							Ae Takdiyaan Rehndiyaan..
							Yeah...
							Ho...
							Wassup
							You Soniyo, She Put Up A Show
							Unless I'm Impress, Baby I Gotta Go
							I Won't Mind Tell You That I Take You Floor
							But Tonight No Bites
							Cause The Wife Will Know
						</p>
					</IonCardHeader>
					<IonCardContent>

					</IonCardContent>
				</IonCard>




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

export default Vaccines;
