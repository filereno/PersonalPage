import React from 'react';
import Tecnology from './Tecnology'
import Contact from './Contact'
import Testimony from './testimony/Testimony'
import imageDrone from '../../images/drone.jpg'
import imageInd from '../../images/industry.jpg'
import imageIot from '../../images/iot.jpg'
import imageVison from '../../images/vision.jpg'


const Main = () => {
	
	return (
		<main>
			<section id="tecnology">
				<Tecnology icon="drone" image={imageDrone} tittle="Tecnologias Open Source de Desenvolvimento para Veículos Aéreos não Tripulados" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sint voluptatem ducimus in vitae laborum aperiam totam minima fugiat error, esse eum. Suscipit itaque et error ex voluptates earum quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sint voluptatem ducimus in vitae laborum aperiam totam minima fugiat error, esse eum. Suscipit itaque et error ex voluptates earum quod.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sint voluptatem ducimus in vitae laborum aperiam totam minima fugiat error, esse eum. Suscipit itaque et error ex voluptates earum quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sint voluptatem ducimus in vitae laborum aperiam totam minima fugiat error, esse eum. Suscipit itaque et error ex voluptates earum quod.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sint voluptatem ducimus in vitae laborum aperiam totam minima fugiat error, esse eum. Suscipit itaque et error ex voluptates earum quod. Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
				<Tecnology icon="eye" image={imageVison} tittle="Visão Computacional" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sint voluptatem ducimus in vitae laborum aperiam totam minima fugiat error, esse eum. Suscipit itaque et error ex voluptates earum quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sint voluptatem ducimus in vitae laborum aperiam totam minima fugiat error, esse eum. Suscipit itaque et error ex voluptates earum quod.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sint voluptatem ducimus in vitae laborum aperiam totam minima fugiat error, esse eum. Suscipit itaque et error ex voluptates earum quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sint voluptatem ducimus in vitae laborum aperiam totam minima fugiat error, esse eum. Suscipit itaque et error ex voluptates earum quod.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sint voluptatem ducimus in vitae laborum aperiam totam minima fugiat error, esse eum. Suscipit itaque et error ex voluptates earum quod. Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
				<Tecnology icon="iot" image={imageIot} tittle="Internet das Coisas" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sint voluptatem ducimus in vitae laborum aperiam totam minima fugiat error, esse eum. Suscipit itaque et error ex voluptates earum quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sint voluptatem ducimus in vitae laborum aperiam totam minima fugiat error, esse eum. Suscipit itaque et error ex voluptates earum quod.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sint voluptatem ducimus in vitae laborum aperiam totam minima fugiat error, esse eum. Suscipit itaque et error ex voluptates earum quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sint voluptatem ducimus in vitae laborum aperiam totam minima fugiat error, esse eum. Suscipit itaque et error ex voluptates earum quod.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sint voluptatem ducimus in vitae laborum aperiam totam minima fugiat error, esse eum. Suscipit itaque et error ex voluptates earum quod. Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
				<Tecnology icon="industry" image={imageInd} tittle="Industria 4.0" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sint voluptatem ducimus in vitae laborum aperiam totam minima fugiat error, esse eum. Suscipit itaque et error ex voluptates earum quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sint voluptatem ducimus in vitae laborum aperiam totam minima fugiat error, esse eum. Suscipit itaque et error ex voluptates earum quod.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sint voluptatem ducimus in vitae laborum aperiam totam minima fugiat error, esse eum. Suscipit itaque et error ex voluptates earum quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sint voluptatem ducimus in vitae laborum aperiam totam minima fugiat error, esse eum. Suscipit itaque et error ex voluptates earum quod.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sint voluptatem ducimus in vitae laborum aperiam totam minima fugiat error, esse eum. Suscipit itaque et error ex voluptates earum quod. Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
			</section>
			<section id="contact">
				<Contact/>		
			</section>
			<section id="testimony">
				<Testimony/>
			</section>
		</main>
	);
};
    
export default Main;