import { IonContent, IonPage, IonButton, IonInput,IonCheckbox, IonLabel } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import './login.css';
import { Toast } from '../toast';
import { registerUser } from '../firebaseConfig'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
const axios = require('axios')


const Register: React.FC = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [Cpassword, setCPassword] = useState('');
	const[vaccinated,setVaccinated] = useState(true)
	const [name, setName] = useState('');
	const history = useHistory()

	async function reg() {
		const res = await registerUser(username, password)
		if (password !== Cpassword) {
			Toast('Passwords Do Not Match')
		}
		if (password.length! > 6) {
			Toast('Please Choose a longer password',)
		}
		if (!res) {
			Toast("User Exists")
		}
		if (res) {
			Toast('Registration Complete')
			axios.post('https://api.arhaanb.co/cura/users', {
				username: name,
				vaccinated: vaccinated
			}).then((res: any) => {
				console.log(res)
			}).catch((error: any) => {
				console.error(error)
			})
			history.replace('/login')
		}
	}
	return (
		<IonPage>
			<IonContent className="Formstyle">
				<IonInput className="form" placeholder="Username" onIonChange={(e: any) => setUsername(e.target.value)} />
				<IonInput className="form" placeholder="Name" onIonChange={(e: any) => setName(e.target.value)} />
				<IonInput type='password' className="form" placeholder="Password" onIonChange={(e: any) => setPassword(e.target.value)} />
				<IonInput type='password' className="form" placeholder="Password" onIonChange={(e: any) => setCPassword(e.target.value)} />
				<IonLabel>Have You Been Vaccinated?</IonLabel>
				<IonCheckbox checked={vaccinated} onIonChange={e=>setVaccinated(e.detail.checked)}></IonCheckbox>
				<IonButton className="buttonLogin" onClick={reg}>Register</IonButton>
				<p className='help'>Already have an Account? <Link to='/login'>Login</Link></p>
			</IonContent>
		</IonPage>
	);
};

export default Register;
