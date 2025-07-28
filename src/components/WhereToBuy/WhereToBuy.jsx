import React from "react"
import Map from "../../assets/world-map.png"
const WhereToBuy = () => {
	return (
		<div className="  py-8 px-4 md:px-12 h-screen ">
			<div className="grid  container space-y-6 grid-cols-1  lg:grid-cols-3 h-full w-full place-items-center ">
				<div className="space-y-6 ">
					<h1 className="max-w-[300px] text-3xl font-bold text-purple-800">
						Where to buy our products
					</h1>
					<div className="flex space-x-4 ">
						<input type="text" placeholder="City" className="input-text" />
						<input type="text" placeholder="Zipcode" className="input-text" />
						<button className="primary-btn1">Search</button>
					</div>
				</div>
				<div className="col-span-2">
					<img src={Map} alt="" className="object-cover w-[400px] lg:w-[500px]   " />
				</div>
			</div>
		</div>
	)
}

export default WhereToBuy
