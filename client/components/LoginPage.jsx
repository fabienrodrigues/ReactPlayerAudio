import React from 'react';
import './medias/styles/scss/loginPage.scss';

export default class LoginPage extends React.Component {
	render() {
		return (
			<div id="loginPage">
				<img src="./client/components/medias/images/bg_login.jpg" alt=""/>

				<form className="loginPageForm">
					<div className="singleForm">
						<input type="email" id="loginEmail" placeholder="E-mail"/>
					</div>

					<div className="singleForm">
						<input type="password" id="loginPassword" placeholder="Mot de passe"/>
					</div>

					<div className="singleForm">
						<input type="submit" id="loginSubmit" value="Valider" className="btn primary"/>
					</div>
					
					<div className="singleForm">
						<p className="message">Pas encore inscrit ? <a href="" className="linkRegister">S'inscrire</a></p>
					</div>
				</form>
			</div>
		);
	}
}