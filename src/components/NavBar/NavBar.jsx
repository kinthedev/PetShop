import React from "react"
import { GiHamburgerMenu } from "react-icons/gi"

const NavBar = ({ sideBar, setSideBar }) => {
	return (
		<>
			<ul className="md:flex z-20 gap-10 font-bold md:visible invisible ">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#">Services</a>
				</li>
				<li>
					<a href="#">Where to find</a>
				</li>
				<li>
					<a href="#">Contact</a>
				</li>
			</ul>
			{sideBar && (
				<div className="absolute z-20 bg-primary-second  top-30 w-full left-0 rounded-3xl py-10">
					<ul className="md:flex z-20 gap-10 font-semibold text-xl uppercase space-y-5  text-center  ">
						<li className="cursor-pointer">
							<a href="#">Home</a>
						</li>
						<li className="cursor-pointer">
							<a href="#">Services</a>
						</li>
						<li className="cursor-pointer">
							<a href="#">Where to find</a>
						</li>
						<li className="cursor-pointer">
							<a href="#">Contact</a>
						</li>
					</ul>
				</div>
			)}
			<div>
				<GiHamburgerMenu
					onClick={() => {
						setSideBar(!sideBar)
					}}
					className="text-3xl cursor-pointer
                            md:hidden"
				/>
			</div>
		</>
	)
}

export default NavBar
