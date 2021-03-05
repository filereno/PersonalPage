import React from 'react';
import { Formik, useField} from 'formik'

const CampImp = ({label, ...props}) => {
	const [field, meta] = useField(props);
	
	return (
		<div className="form-group">
			<label htmlFor={props.id}>{label}</label>
			<input
				{...field}
				{...props}
				className={meta.error && meta.touched ? 'invalid' : ''}/>
			
			{meta.error && meta.touched ? <div className="invalid-name">{meta.error}</div> : null}
		</div>
	)
}

const CampTextArea = ({label, ...props}) => {
	const [field, meta] = useField(props);
	
	return (
		<div className="form-group">
			<label htmlFor={props.id}>{label}</label>
			<textarea
				{...field}
				{...props}
				className={meta.error && meta.touched ? 'invalid' : ''}/>
			
			{meta.error && meta.touched ? <div className="invalid-name">{meta.error}</div> : null}
		</div>
	)
}

const Contact = () => {

	return (
		<div>
			 <h1>Contate-nos</h1>

			<Formik initialValues={{nome: '', email: '', date: '', subject: '', message: ''}}
			validate={(values) => {
				const errors ={};
				if (!values.nome) {
					errors.nome = 'O nome é obrigatório';
				}
				if (!values.email) {
					errors.email = 'O email é obrigatório';
				} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i.test(values.email)) {
					errors.email = 'Email invalido';
				}
				if (!values.subject) {
					errors.subject = 'Um assunto é obrigatório';
				}
				if (!values.date) {
					errors.date = 'Uma data é obrigatório';
				}
				if (!values.message) {
					errors.message = 'O texto é obrigatório';
				}

				return errors;
			}}
			onSubmit={(values)=>alert(JSON.stringify(values))}
			>
				{(props) => (
				<form onSubmit={props.handleSubmit} noValidate>
					<CampImp
							type="text" 
							id="nome" 
							name="nome" 
							label="Nome"
							placeholder="Digite seu nome completo..." 	
					/>
					<CampImp
							type="email" 
							id="email" 
							name="email" 
							label="E-mail"
							placeholder="Digite seu email..."	
					/>
					<CampImp
							type="text" 
							id="subject" 
							name="subject"  
							label="Assunto"
							placeholder="Digite o assunto..."		
					/>
					<CampImp
							type="date" 
							id="date" 
							name="date"
							label="Data"
					/>
					<CampTextArea
							type="text" 
							id="message" 
							name="message" 
							label="Menssage"
							placeholder="Deixe sua mensagem..."	
					/>
					<button type="submit">Enviar</button>
				</form>
				)}
			 </Formik>
		</div>
	);

};
    
export default Contact;