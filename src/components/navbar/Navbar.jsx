import React, { useState } from "react";
import "./Navbar.css";
import {Link as LinkRouter} from 'react-router-dom'


const SideNavBar = () => {
	const [isExpanded, setExpendState] = useState(false);
	
	
	
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
<LinkRouter to="/Cities">
<div className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} >  <button><img src="./icons/tierra.svg" alt="" />
	 </button> 
</div>
</LinkRouter>
<LinkRouter to="/Hotels">
<div className={isExpanded ? "menu-item" : "menu-item menu-item-NX"} > <button><img src="./icons/hotel.svg" alt="" />
</button> 
</div>
</LinkRouter>
						
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