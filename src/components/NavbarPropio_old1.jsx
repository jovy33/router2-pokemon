import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom'

export default function NavbarPropio() {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#home">
					<img
						alt=""
						src="/pokebola.png"
						width="30"
						height="30"
						className="d-inline-block align-top"
					/>{' '}
					React Bootstrap
				</Navbar.Brand>
			</Container>
		</Navbar>
	)
}
