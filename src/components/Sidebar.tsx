import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export interface SideBarProps {
	children: React.ReactNode;
}

const Sidebar = ({ children }: SideBarProps) => {
	return (
		<div
			className='flex
		'
		>
			<div className='w-80 absolute sm:relative dark:bg-gray-800  shadow md:h-full flex-col justify-between hidden sm:flex'>
				<div className='px-8 h-screen'>
					<div className='flex flex-col  mt-8'>
						<motion.div
							whileHover={{
								zIndex: 1,
								scale: [1, 1.2, 1.1],
								rotate: [0, 10, -10, 0],

								transition: { duration: 0.3 },
								filter: [
									"hue-rotate(0) contrast(100%)",
									"hue-rotate(360deg) contrast(200%)",
									"hue-rotate(45deg) contrast(300%)",
									"hue-rotate(0) contrast(100%)",
								],
							}}
						>
							<Link href='/admin'>
								<div className='dark:text-white text-black p-3 rounded-xl hover:bg-purple-600'>
									admin
								</div>
							</Link>
						</motion.div>
						<motion.div
							whileHover={{
								zIndex: 1,
								scale: [1, 1.2, 1.1],
								rotate: [0, 10, -10, 0],

								transition: { duration: 0.3 },
								filter: [
									"hue-rotate(0) contrast(100%)",
									"hue-rotate(360deg) contrast(200%)",
									"hue-rotate(45deg) contrast(300%)",
									"hue-rotate(0) contrast(100%)",
								],
							}}
							// whileHover={{
							// 	position: "relative",
							// 	zIndex: 1,
							// 	scale: [1, 0, 0],
							// 	rotate: [0, 10, -10, 0],

							// 	transition: { duration: 0.3 },
							// 	filter: [
							// 		"hue-rotate(0) contrast(100%)",
							// 		"hue-rotate(360deg) contrast(200%)",
							// 		"hue-rotate(45deg) contrast(300%)",
							// 		"hue-rotate(0) contrast(100%)",
							// 	],
							// }}
						>
							<Link href='/admin/Hello'>
								<div className='dark:text-white text-black p-3 rounded-xl hover:bg-purple-600'>
									hello
								</div>
							</Link>
						</motion.div>
					</div>
				</div>
			</div>
			{children}
		</div>
	);
};

export default Sidebar;
