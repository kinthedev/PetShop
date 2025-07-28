import React from "react"
import Image1 from "../../assets/Pet Accessories.png"
import Image2 from "../../assets/Toys.png"
import Image3 from "../../assets/Food.png"
const ServicesDate = [
	{
		id: 1,
		name: "Accessories",
		img: Image1,
		des: "Lorem ispsum dolor sit amet",
	},
	{ id: 2, name: "Toy", img: Image2, des: "Lorem ispsum dolor sit amet" },
	{ id: 3, name: "Food", img: Image3, des: "Lorem ispsum dolor sit amet" },
	{ id: 4, name: "Food", img: Image3, des: "Lorem ispsum dolor sit amet" },
	{ id: 5, name: "Food", img: Image3, des: "Lorem ispsum dolor sit amet" },
]
const OurServices = () => {
	return (
		<div className=" px-12 w-full container  py-16">
			<div className="">
				<h1 className="text-2xl font-bold text-center py-12">Our Services</h1>
				<div className="flex flex-wrap  justify-center space-y-12  space-x-12">
					{ServicesDate.map(({ id, name, des, img }) => (
						<div key={id}>
							<img
								src={img}
								alt=""
								className="shadow-img max-w-[350px] h-auto  mx-auto rounded-lg duration-300 cursor-pointer hover:scale-110"
							/>
							<div className="text-center space-y-2 mt-2">
								<h1 className="text-2xl font-semibold p-4">{name}</h1>
								<p>{des}</p>
								<button className="primary-btn">See more</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default OurServices
