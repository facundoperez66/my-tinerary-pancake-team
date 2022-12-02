import "./NavBar2.css"
import React, { useState } from "react";

import { Link as LinkRouter } from 'react-router-dom'
import ButtonExit from "../ButtonExit/ButtonExit";
import { useSelector, useDispatch } from 'react-redux'
import userActions from "../../redux/actions/userActions"
import Swal from 'sweetalert2'





const NavBar2 = () => {
	const dispatch = useDispatch()
	
	const { online, role, token } = useSelector(state => state.user)
	const { logout } = userActions


	function signOut() {
		Swal.fire({
			title: 'Do you want to exit?',
			text: "You will need to log in again later.",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, log out!'
		})
			.then((result) => {
				if (result.isConfirmed) {
					dispatch(logout(token))
					Swal.fire(
						'Logged out!',
						'You have been logged out',
						'success'
					)
				}
			})
	}



    return (
        <div ParteSuperior23>
			
            <div className="PruebaBotons2 ">
				<LinkRouter to="/index">
            <div className="ParteSuperiorIzquierda">
				<p>MYTINERARY</p>
			</div>
</LinkRouter>


			<div className="ClaseDeBotones123">
{!online && (
						<>



							<LinkRouter to="/SignIn">
								<div> <button><p>Sign In</p>
								</button>
								</div>
							</LinkRouter>
							<LinkRouter to="/SignUp">
                            <div> <button><p>Sign Up</p>
								</button>
								</div>
							</LinkRouter>
						</>
                        
					)}
{online && (
						<LinkRouter to='/Profile' text='MY PROFILE' >
							<div>  <button><p>Profiles</p>
							</button>
							</div>


						</LinkRouter>
					)}
					




					{online && role === 'admin' && (
						<>
							<LinkRouter to="/Mycities">
								<div>  <button><p>My Cities</p>
								</button>
								</div>
							</LinkRouter>
							<LinkRouter to="/MyHotels">
								<div>  <button><p>My Hotels</p>
								</button>
								</div>
							</LinkRouter>
							<LinkRouter to='/newReactions' >

							<div>  <button><p>New Reactions</p>
								</button>
								</div>

							</LinkRouter>

							<LinkRouter to="/Cities">
								<div>  <button><p>Cities</p>
								</button>
								</div>
							</LinkRouter>
							<LinkRouter to="/Hotels">
								<div> <button><p>Hotels</p>
								</button>
								</div>
							</LinkRouter>

						</>
					)}

{role === 'user' && (

						<>
				<LinkRouter to='/newitinerary' classN='btn3' text='NEW ITINERARY' >
				<div> <button><p>New Itinerary</p>
								</button>
								</div>
							</LinkRouter>

							<LinkRouter to='/newShow' classN='btn3' text='NEW SHOW' >
				<div> <button><p>New Show</p>
								</button>
								</div>
							</LinkRouter>

							<LinkRouter to='/MyTineraries' text='MY ITINERARY' >
							<div> <button><p>MyTineraries</p>
								</button>
								</div>
							</LinkRouter>

							<LinkRouter to='/MyShows' text='MY SHOWS' >
							<div> <button><p>My Shows</p>
								</button>
								</div>
							</LinkRouter>

							<div>
						

					</div>
						</>
					)}
{online && (
                                <ButtonExit fx={signOut} text='LOG OUT'>
									<div> <button><p>Sign Out</p>
								</button>
								</div>
									</ButtonExit>
                            )}
</div>


</div>

				</div>
        






    );
}

export default NavBar2;




















