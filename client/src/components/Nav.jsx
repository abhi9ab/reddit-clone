import React, { useState } from 'react'
import { redditLogo } from "../assets/images";
import { chat, create, bell, user, hamburger, search, editAvatar, achievements, contributorProgram, darkMode, logOut, advertiseOnReddit, settings, premium } from "../assets/icons";
import { useNavigate } from 'react-router-dom';

const Nav = () => {
	const [ isActive, setIsActive ] = useState(false);
	const navigate = useNavigate();
	return (
	<header className=' w-full fixed z-10 border border-b-gray-400 bg-reddit-bg'>
		<nav className='flex justify-between items-center h-14 '>
			<a href="./">
				<img src={redditLogo} width={130} height={30} alt='logo' />
			</a>
			<form className='flex items-center cursor-pointer bg-gray-800 max-content pl-5 rounded-full w-full lg:max-w-xl sm:max-w-80'>
				<img src={search}/>
				<input placeholder='search for anything' id='search' name='search' type='text' className='w-full'></input>
			</form>
			<form className='border-none flex justify-between gap-10 items-center max-lg:hidden mr-5 h-10'>
				<img src={chat} />
				<button onClick={() => navigate('create')} className='hover:bg-transparent'><img src={create}/></button>
				<img src={bell} />
				<div>
					<div>
						<button type='button'><img src={user} onClick={event => {setIsActive(!isActive); event.stopPropagation();}}/></button>
					</div>
					{isActive && 
						<div className='profile-dropdown-menu flex flex-col gap-7 bg-reddit-2 px-4 py-5 w-60 fixed border border-white top-14 right-1 z-50 text-sm h-[500px] overflow-y-hidden hover:overflow-y-scroll '>
							<div className='flex gap-3 items-center'>
								<img src={user}/>
								<div className='flex flex-col'>
									<p>View Profile</p>
									<p className='text-xs-sm text-gray-400'>u/username</p>
								</div>
							</div>
							<div className='flex gap-3 items-center'>
								<img src={editAvatar}/>
								<p>Edit Avatar</p>
							</div>
							<div className='flex gap-3 items-center'>
								<img src={achievements}/>
								<div className='flex flex-col'>
									<p>Achievements</p>
									<p className='text-xs-sm text-gray-400'>5 unlocked</p>
								</div>
							</div>
							<div className='flex gap-3 items-center'>
								<img src={contributorProgram}/>
								<div className='flex flex-col'>
									<p>Contributor</p>
								</div>
							</div>
							<div className='flex gap-3 items-center'>
								<img src={darkMode}/>
								<p>Dark Mode</p>
							</div>
							<div className='flex gap-3 items-center'>
								<img src={logOut}/>
								<p>Log Out</p>
							</div>
							<hr></hr>
							<div className='flex gap-3 items-center'>
								<img src={advertiseOnReddit}/>
								<p>Advertise on Reddit</p>
							</div>
							<hr></hr>
							<div className='flex gap-3 items-center'>
								<img src={settings}/>
								<p>Settings</p>
							</div>
							<hr></hr>
							<div className='flex gap-3 items-center'>
								<img src={premium}/>
								<p>Premium</p>
							</div>
						</div>
					}

				</div>
			</form>
			
			<div className='hidden max-lg:block'>
				<img src={hamburger} alt='hamburger icon' width={25} height={25} />
			</div>
		</nav>
		
	</header>
	)
}

export default Nav;
