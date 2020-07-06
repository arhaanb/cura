import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonFab, IonFabButton, IonFabList, IonIcon, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Dashboard.css';
import { getCurrentUser } from '../firebaseConfig';
import { Redirect, useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { logoutUser } from '../firebaseConfig'
import { eyedropOutline, barChartOutline, heartOutline, personOutline, analyticsOutline } from 'ionicons/icons';


const News: React.FC = () => {

	//{username} is the registered username so use that kbye
	return (
		<IonPage>
			<IonHeader>
			</IonHeader>
			<IonContent>
				<p>NEWS</p>
				<IonCard color='light'>
					<IonCardHeader>
						<IonCardTitle>ARHAAN Heart AP</IonCardTitle>
						<IonCardSubtitle>Awwwwwwww</IonCardSubtitle>
					</IonCardHeader>
					<IonCardContent>
						ARHAAN ARHAAN ARHAAN ARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAAN
						ARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAAN
						ARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAAN
      </IonCardContent>
				</IonCard>
				<IonCard color='light'>
					<IonCardHeader>
						<IonCardTitle>ARHAAN Heart AP</IonCardTitle>
						<IonCardSubtitle>Awwwwwwww</IonCardSubtitle>
					</IonCardHeader>
					<IonCardContent>
						ARHAAN ARHAAN ARHAAN ARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAAN
						ARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAAN
						ARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAAN
      </IonCardContent>
				</IonCard>
				<IonCard color='light'>
					<IonCardHeader>
						<IonCardTitle>ARHAAN Heart AP</IonCardTitle>
						<IonCardSubtitle>Awwwwwwww</IonCardSubtitle>
					</IonCardHeader>
					<IonCardContent>
						ARHAAN ARHAAN ARHAAN ARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAAN
						ARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAAN
						ARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAAN
      </IonCardContent>
				</IonCard>
				<IonCard color='light'>
					<IonCardHeader>
						<IonCardTitle>ARHAAN Heart AP</IonCardTitle>
						<IonCardSubtitle>Awwwwwwww</IonCardSubtitle>
					</IonCardHeader>
					<IonCardContent>
						ARHAAN ARHAAN ARHAAN ARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAAN
						ARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAAN
						ARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAAN
      </IonCardContent>
				</IonCard>
				<IonCard color='light'>
					<IonCardHeader>
						<IonCardTitle>ARHAAN Heart AP</IonCardTitle>
						<IonCardSubtitle>Awwwwwwww</IonCardSubtitle>
					</IonCardHeader>
					<IonCardContent>
						ARHAAN ARHAAN ARHAAN ARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAAN
						ARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAAN
						ARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAANARHAAN ARHAAN ARHAAN
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
						<IonFabButton routerLink='/dashboard'>
							<IonIcon icon={personOutline}></IonIcon>
						</IonFabButton>
					</IonFabList>
				</IonFab>
			</IonContent>
		</IonPage>
	);
};

export default News;
