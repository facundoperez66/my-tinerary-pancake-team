import React, { useState } from "react";
import "./navbar.css";
import { Link as LinkRouter } from 'react-router-dom'
import { Link as Navlink } from 'react-router-dom'
import { useSelector } from 'react-redux'





const SideNavBar = () => {
	const [isExpanded, setExpendState] = useState(false);
	const { online, role } = useSelector(state => state.user)





	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand">
							<img src="icons/Logo.svg" alt="" srcset="" />
							<h2>Barra de Navegacion</h2>
						</div>
					)}
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>


				<div className="nav-menu">
					{!online && (
						<>
							<LinkRouter to="/SignIn">
								<div className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} >  <button><img src="./icons/iniciarsesion.png" alt="" />
								</button>
								</div>
							</LinkRouter>
							<LinkRouter to="/SignUp">
								<div className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} > <button><img src="./icons/registrarse.png" alt="" />
								</button>
								</div>
							</LinkRouter>
						</>
					)}

					{role === 'user' && (
						<>
							<LinkRouter to="/MyTineraries">
								<div className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} >  <button><img src="./icons/itinerario.png" alt="" />
								</button>
								</div>
							</LinkRouter>
							<LinkRouter to="/MyShows">
								<div className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} >  <button><img src="./icons/show.png" alt="" />
								</button>
								</div>
							</LinkRouter>
						</>
					)}





					
					{online && (
					<LinkRouter>
						<div className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} >  <button><img src="./icons/logout.png" alt="" />
						</button>
						</div>
					</LinkRouter>
					 )}










				</div>
			</div>


			<div className="nav-footer">
				{isExpanded && (
					<div className="nav-details">
						<img
							className="nav-footer-avatar"

							alt=""
							srcset=""
						/>
					</div>
				)}

			</div>
		</div>
	);
};

export default SideNavBar;