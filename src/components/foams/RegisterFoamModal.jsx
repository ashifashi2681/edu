import React from "react";
import * as motion from 'motion/react-client'
import CustomInput from "../ui/CustomInput";
import CustomButton from "../ui/CustomButton";

function RegisterFoamModal() {
	return (
		<>
			<div className="fixed inset-0 bg-black opacity-50 z-10"></div>
			<div className="fixed z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-5 flex sm:flex-col items-center justify-center w-full h-full">


			
				<motion.div
					initial={{ opacity: 0, translateX: -20 }}
					transition={{ duration: 0.5 }}
					animate={{ opacity: 1, translateX: 0 }}
					className="bg-white w-3/6 lg:w-4/6 md:w-5/6 sm:w-full h-fit shadow-2xl rounded-2xl sm:rounded-md z-10 p-10 md:p-7 sm:p-3">
					<h2 className="text-md font-[600] text-center mb-5">
						Join with us
					</h2>
					<div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
						<CustomInput
							label={"Name"}
							placeHolder={"Eg. Jhon Doe"}
							type={"text"}
						/>
						<CustomInput
							label={"Place"}
							placeHolder={"Eg. Calicut"}
							type={"text"}
						/>
						<CustomInput
							label={"Email"}
							placeHolder={"Eg. jhon@example.com"}
							type={"email"}
						/>
						<CustomInput
							label={"Purpose"}
							placeHolder={"Eg. Tution inquiry"}
							type={"text"}
						/>
						<CustomInput
							label={"Phone"}
							placeHolder={"9800000000"}
							type={"number"}
						/>
						<CustomInput
							label={"WhatsApp"}
							placeHolder={"9800000000"}
							type={"number"}
						/>
					</div>
					<CustomButton className={"mt-5 rounded-md w-fit"}>
						Join
					</CustomButton>
				</motion.div>



				<motion.div
					initial={{ opacity: 0, translateX: 20 }}
					transition={{ duration: 0.5 }}
					animate={{ opacity: 1, translateX: -50 }}
					className="relative w-2/6 lg:w-3/6 md:absolute h-full md:h-5/6 sm:hidden bg-linear-[148deg] from-[#F9E7F7] from-0% via-[#F7A29B] via-50% to-[#6C5BDF] to-100% shadow-2xl rounded-2xl">
					<motion.div
						animate={{ x: 50, y: 0 }}
						transition={{
							duration: 4,
							repeat: Infinity,
							repeatType: "reverse",
						}}
						class="size-28 rounded-full bg-radial-[at_25%_25%] from-white to-[#F7A29B] to-75% shadow-lg absolute top-3 left-5 opacity-50"></motion.div>
					<motion.div
						animate={{ x: 0, y: 50 }}
						transition={{
							duration: 5,
							repeat: Infinity,
							repeatType: "reverse",
						}}
						class="size-20 rounded-full bg-radial-[at_25%_25%] from-white to-[#ED7E8F] to-75% shadow-lg absolute top-1/2 left-3/5 opacity-30"></motion.div>
					<motion.div
						animate={{ x: -50, y: 0 }}
						transition={{
							duration: 4,
							repeat: Infinity,
							repeatType: "reverse",
						}}
						class="size-32 rounded-full bg-radial-[at_25%_25%] from-white to-[#6C5BDF] to-75% shadow-lg absolute bottom-3 right-5 opacity-50"></motion.div>
					<div className="absolute pl-14 pr-3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full join-title md:hidden">
						<h2 className="text-xl font-[600] text-center">
							We welcome you!
						</h2>
						<p className="text-center !text-bk">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Corporis blanditiis aliquid consectetur? Magni
							ratione fugit consequuntur.
						</p>
					</div>
				</motion.div>
			</div>
		</>
	);
}

export default RegisterFoamModal;
