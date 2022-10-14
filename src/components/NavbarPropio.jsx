import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';

export default function NavbarPropio() {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand>
					<img width="50" src="/pokebola.png" alt="" />
				</Navbar.Brand>
				<Navbar.Collapse className="justify-content-end">
					<NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} end to="/">
						Home
					</NavLink>
					{" - "}
					<NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} end to="/pokemones">
						Pokemones
					</NavLink>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
