import React from 'react';

const Menu = () => {
	
	return (
		<menu>
			<ul>
				<li>
					<h4><a href="#home">Home</a></h4>
					{/* <Link to="/" exact>Inicio</Link> */}
				</li>
				<li>
					<h4><a href="#home">Tutoriais</a></h4>
					{/* <Link to="/technologies">Tecnologias</Link> */}
				</li>
				<li>
					<h4><a href="#home">About</a></h4>
					{/* <Link to="/testimonials">Testemunhos</Link> */}
				</li>
			</ul>
		</menu>
	);
};
    
export default Menu;