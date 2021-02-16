import React from 'react';

import Icon from '../components/SvgSprites'

const Footer = () => {
	
	return (
		<footer>
			<ul>
				<h3>Redes Sociais</h3>
				<li>
					
					<a href="" id="link-facebook">
						
							<Icon icon="facebook"/>
					
					
					</a>
					
				</li>

				<li>
				
					<a href="" id="link-twitter">
						
							<Icon icon="twitter"/>
						
						
					</a>
	
				</li>
				
				<li>
					
					<a href="" id="link-linkedin">
						
							<Icon icon="linkedin"/>
						
						
					</a>
	
						
				</li>

				<li>
					
					<a href="" id="link-youtube">
						
							<Icon icon="youtube"/>
					
						
					</a>	
				</li>
			</ul>

			<ul>
				<h3>Contato</h3>
				<li>
		
					<a href="">
						<Icon icon="pin"/>
				
					
						<h5 href="">Endereço </h5>
					</a>
		
				</li>
				<li>
				
					<a href="">
						<Icon icon="phone-call"/>
						<h5 href="">Telefone</h5>
					</a>
	
				</li>
				<li>
					
					<a href="">
						<Icon icon="whatsapp"/>
						<h5 href="">Whatsap</h5>
					</a>
						
				</li>
				<li>	
				
					<a href="">
						<Icon icon="mensagem"/>
						<h5 href="">E-mail</h5>
					</a>
	
				</li>
			</ul>
		</footer>
	);
};
    
export default Footer;