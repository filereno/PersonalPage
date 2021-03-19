import React, { useState, useRef, useEffect } from 'react';
import { Formik, useField} from 'formik'
import IconLoupe from '../../generics/Sprites'
import Scrolling from '../../generics/Scrolling'

const CampImp = ({label, ...props}) => {
	const [field, meta] = useField(props);
	
	return (
		<div className="form-group">
			<input
				{...field}
				{...props}
			/>
		</div>
	)
}

const Search = () => {

	const { scrollY } = Scrolling();

	const itemTop = useRef();
	
	const [ checked, setChecked ] = useState(false);

	useEffect(() => {
		if (scrollY == 0) {
			if (checked == true)  {
				itemTop.current.style.display = "flex";
			} else if (checked == false) {
				itemTop.current.style.display = "none";			
			}

		} else if (scrollY > 0) {
			itemTop.current.style.display = "none";
		}

					
	},[checked, scrollY])

	return (
		<div>
			<div>
				<input 
					type="checkbox" 
					id="switch-search"
					defaultChecked={checked}
					onChange={() => setChecked(!checked)}
				/>
				<label htmlFor="switch-search" id="button-menu" className="menu-bar">
					<i ><IconLoupe icon="loupe"></IconLoupe></i>
				</label>
			</div>
			<Formik initialValues={{search: ''}}
				onSubmit={(value) => alert(JSON.stringify(value))}			
			>
				{(props) => (
					<form ref={itemTop} onSubmit={props.handleSubmit} noValidate>
					
					<CampImp
						type="text"
						id="search"
						name="search"
						label="Search"
					/>	
					<button type="submit">Search
						<IconLoupe icon="loupe"></IconLoupe>
					</button>
				</form>
				)}
				
			</Formik>
		</div>
	);
}

export default Search;