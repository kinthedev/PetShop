import React, { useState } from "react"
import LogoImg from "../../assets/Logo.png"
import Pet from "../../assets/Pet.png"
import NavBar from "../NavBar/NavBar"
const Hero = () => {
	const [sideBar, setSideBar] = useState(false)
	return (
		<div className=" bg-primary-second px-4 md:px-12 py-6 ">
			<div className="bg-primary-first  rounded-xl w-full ">
				<div className="flex relative justify-between  mx-10 items-center px-4 md:px-10 py-4">
					{/* Logo */}
					<div className="flex  items-center gap-2">
						<img src={LogoImg} alt="" className=" w-[50px]" />
						<h2 className="uppercase text-xl font-semibold">petibo</h2>
					</div>
					{/* NavBar link */}
					<NavBar sideBar={sideBar} setSideBar={setSideBar} />
				</div>
				<div className="grid grid-cols-1  lg:grid-cols-3  sm:place-items-center">
					<div className="relative left-12 space-y-2 max-w-[300px]">
						<h1 className="text-3xl font-bold uppercase text-shadow">a happy pet</h1>
						<p className="">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptate
							saepe nemo, officiis doloribus quos!
						</p>
						<button className="primary-btn">Shop Now</button>
					</div>
					<div>
						<img
							src={Pet}
							alt=""
							className=" z-10 relative -top-[30px] lg:max-w-[400px] max-w-[300px] shadow-img-cat"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
