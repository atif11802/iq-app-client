import Link from "next/link";
import React, { useEffect, useState } from "react";
import Header from "../components/Head";
import useLocalStorage from "../hooks/useLocalStorage";
import { motion } from "framer-motion";

const Home = () => {
	const [user, setUser] = useLocalStorage("user", null);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const handleLogout = () => {
		setUser(null);
	};

	return (
		<>
			{mounted && (
				<Header
					title='IQ Test'
					content='This is the home page of the IQ Test app.'
				>
					<div className=' h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600'>
						<div className='flex flex-col items-center justify-center h-full'>
							{!user ? (
								<div>
									{" "}
									<h1 className='text-4xl font-bold text-white'>
										Check your Iq here
									</h1>
									<p className='text-2xl font-bold text-gray-300'>
										This is a simple app to check your iq, you can check your iq
										by just logging in.
									</p>
									<div className='flex w-52 justify-between items-center'>
										<Link href='/Login'>
											<button className='px-6 py-2 mt-4 text-black bg-purple-400 rounded-md hover:bg-purple-500 transition duration-300 delay-100 hover:delay-100'>
												Login
											</button>
										</Link>
										<Link href='/SignUp'>
											<button className='px-6 py-2 mt-4 text-black bg-purple-400 rounded-md hover:bg-purple-500 transition duration-300 delay-100 hover:delay-100'>
												SignUp
											</button>
										</Link>
									</div>
								</div>
							) : (
								<div>
									<motion.div
										initial='hidden'
										animate='visible'
										variants={{
											hidden: {
												opacity: 0,
												scale: 0.8,
											},
											visible: {
												opacity: 1,
												scale: 1,
												transition: {
													delay: 0.5,
												},
											},
										}}
									>
										<h1 className='text-4xl font-bold text-white'>
											Welcome {user.name}
										</h1>
									</motion.div>

									<p className='text-2xl font-bold text-gray-300'>
										You can check your iq by clicking the button below.
									</p>
									<div className='flex w-52 justify-between items-center'>
										<Link href='/test'>
											<button className='px-6 py-2 mt-4 text-black bg-purple-400 rounded-md hover:bg-purple-500 transition duration-300 delay-100 hover:delay-100'>
												Iq List
											</button>
										</Link>

										<button
											onClick={handleLogout}
											className='px-6 py-2 mt-4 text-black bg-purple-400 rounded-md hover:bg-purple-500 transition duration-300 delay-100 hover:delay-100'
										>
											Logout
										</button>
									</div>
								</div>
							)}
						</div>
					</div>
				</Header>
			)}
		</>
	);
};

export default Home;
