// "use client";

// import { useState } from "react";

// import Image from "next/image";

// import UserProfile from "@/assets/dashboard/user-profile.png";
// import GoogleSVG from "@/assets/dashboard/google.svg";
// import Tabbar from "../../Tabbar";

// export default function Details() {
// 	const [detailOption, setDetailOption] = useState<string>("my-account");

// 	const tabbarAccount = [
// 		{
// 			id: 1,
// 			tab: "my-account",
// 			tab_name: "My account"
// 		},
// 		{
// 			id: 2,
// 			tab: "change-password",
// 			tab_name: "Change Password"
// 		},
// 		{
// 			id: 3,
// 			tab: "change-email",
// 			tab_name: "Change e-mail"
// 		}
// 	];

// 	function changeTab(tab: string) {
// 		setDetailOption(tab);
// 	}

// 	return (
// 		<div className="md:w-[1100px] w-full container mx-auto mt-20  relative text-white">
// 			<div className="md:p-10 p-5 backdrop-blur-md clip-path-element" style={{ background: "rgba(49, 55, 66, 0.80)" }}>
// 				<Tabbar />
// 				<div className="bg-[#41434B] clip-path-element w-full p-8 mt-10">
// 					<div className="flex md:flex-row flex-col md:gap-8 gap-4 w-full mb-8">
// 						<Image src={UserProfile} alt="" className="clip-path-images" />
// 						<div className="flex flex-col justify-between w-full">
// 							<div className="flex md:flex-row flex-col-reverse justify-between w-full">
// 								<div className="gap-2 md:mb-0 mb-4">
// 									<p className="text-base font-semibold">Aparecido</p>
// 									<p className="text-base font-medium text-white/60">maniadecomprar123@gmail.com</p>
// 								</div>
// 								<div className="gap-2 md:mb-0 mb-4">
// 									<p className="text-base font-semibold md:text-end">Created since</p>
// 									<p className="text-base font-medium text-white/60">March 11, 2025</p>
// 								</div>
// 							</div>
// 							<button className="bg-white w-40 cursor-pointer h-10 clip-path-images shape-google button-product font-semibold text-black gap-2 flex items-center justify-center"><GoogleSVG />Conectado</button>
// 						</div>
// 					</div>
// 					<div className="overflow-x-auto" style={{ WebkitOverflowScrolling: "touch", scrollBehavior: "smooth", scrollSnapType: "x mandatory" }}>
// 						<ul className="flex md:gap-8 gap-6 border-b-2 border-white/20 pb-[8px] md:w-full w-[400px]">
// 							{tabbarAccount.map((item, index) => (
// 								<li className="text-md font-semibold cursor-pointer " key={index}>
// 									<div className={`${detailOption == item.tab ? 'text-white underline underline-offset-14 decoration-2 decoration-[#0BC4E5]' : 'text-white/60'}`} onClick={() => changeTab(item.tab)}>
// 										{item.tab_name}
// 									</div>
// 								</li>
// 							))}
// 						</ul>
// 					</div>
// 					<div className="flex md:flex-row flex-col mt-6">
// 						<div className="flex-1 md:mb-0 mb-4">
// 							<h2 className="text-2xl font-semibold ">My account</h2>
// 						</div>
// 						<div className="flex-3">
// 							<form action="" className="max-w-xl" >
// 								<h3 className="md:text-xl text-lg font-semibold mb-1">Public information</h3>
// 								<p className="text-sm text-white/60 md:mb-6 mb-4">Will be displayed publicly</p>
// 								<div className="mb-10">
// 									<label htmlFor="display_name" className="text-base font-medium">Display Name</label>
// 									<input id="display_name" className="transition border border-white/60 focus:border-white/100 w-full p-4 font-medium outline-none focus:bg-white/10 mt-2" placeholder="Display name" />
// 								</div>
// 								<h3 className="text-xl font-semibold mb-1">Personal information</h3>
// 								<p className="text-sm text-white/60 md:mb-6 mb-4">Will not be displayed publicly</p>
// 								<div className="mb-4">
// 									<label htmlFor="display_name" className="text-base font-medium">Login</label>
// 									<input id="display_name" className="transition border border-white/60 focus:border-white/100 w-full p-4 font-medium outline-none focus:bg-white/10 mt-2" placeholder="Login" />
// 								</div>
// 								<div className="flex md:flex-row flex-col gap-6 mb-4">
// 									<div className="group">
// 										<label htmlFor="display_name" className="text-base font-medium">First name</label>
// 										<input id="display_name" className="transition border border-white/60 focus:border-white/100 w-full p-4 font-medium outline-none focus:bg-white/10 mt-2" placeholder="First name" />
// 									</div>
// 									<div className="group">
// 										<label htmlFor="display_name" className="text-base font-medium">Last name</label>
// 										<input id="display_name" className="transition border border-white/60 focus:border-white/100 w-full p-4 font-medium outline-none focus:bg-white/10 mt-2" placeholder="Last name" />
// 									</div>
// 								</div>
// 								<div className="mb-4">
// 									<label htmlFor="display_name" className="text-base font-medium">CPF</label>
// 									<input id="display_name" className="transition border border-white/60 focus:border-white/100 w-full p-4 font-medium outline-none focus:bg-white/10 mt-2" placeholder="Document" />
// 								</div>
// 								<div className="mb-4">
// 									<label htmlFor="display_name" className="text-base font-medium">Phone Number</label>
// 									<input id="display_name" className="transition border border-white/60 focus:border-white/100 w-full p-4 font-medium outline-none focus:bg-white/10 mt-2" placeholder="Phone Number" />
// 								</div>
// 								<div className="mb-4">
// 									<label htmlFor="display_name" className="text-base font-medium">Birth date</label>
// 									<input id="display_name" className="transition border border-white/60 focus:border-white/100 w-full p-4 font-medium outline-none focus:bg-white/10 mt-2" placeholder="Birth date" />
// 								</div>
// 								<div className="mb-4">
// 									<label htmlFor="display_name" className="text-base font-medium">Time zone</label>
// 									<input id="display_name" className="transition border border-white/60 focus:border-white/100 w-full p-4 font-medium outline-none focus:bg-white/10 mt-2" placeholder="Time zone" />
// 								</div>
// 								<div className="flex gap-2 mb-4">
// 									<input type="checkbox" className="accent-black focus:accent-cyan-300" />
// 									<p className="md:text-base text-sm">I want to receive awesome deals by email and save some money!</p>
// 								</div>
// 								<div className="box-shape">
// 									<button className="ml-auto w-full bg-[#0BC4E5] cursor-pointer h-14 shape button-product font-semibold text-black gap-2 px-10">Save informations</button>
// 								</div>
// 							</form>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }