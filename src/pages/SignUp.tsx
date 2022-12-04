import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import React, { useEffect } from "react";
import Header from "../components/Head";
import useLocalStorage from "../hooks/useLocalStorage";
import useSignup from "../hooks/useSignup";

const Login = () => {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [userName, setUserName] = React.useState("");

	const [user, setUser] = useLocalStorage("user", null);

	const mutation = useSignup({
		email,
		password,
		name: userName,
	});

	const handleSubmit = () => {
		if (email.length > 0 && password.length > 0 && userName.length > 0) {
			mutation.mutate();
		}
	};

	useEffect(() => {
		if (mutation.isSuccess) {
			setUser(mutation.data);
		}
		if (user) {
			Router.push("/");
		}
		if (mutation.isError) {
		}
	}, [mutation, setUser, user]);

	return (
		<Header title='sign up' content='Signup to your account'>
			<section className='h-full gradient-form bg-gray-200 md:h-screen'>
				<div className='container py-12 px-6 h-full'>
					<div className='flex justify-center items-center flex-wrap h-full g-6 text-gray-800'>
						<div className='xl:w-10/12'>
							<div className='block bg-white shadow-lg rounded-lg'>
								<div className='lg:flex lg:flex-wrap g-0'>
									<div className='lg:w-6/12 px-4 md:px-0'>
										<div className='md:p-12 md:mx-6'>
											<div className='text-center'>
												<div className='bg-mint text-mint fill-current flex justify-center items-center'>
													<Link href='/'>
														<Image
															// src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp'
															src='/pngwing.com.png'
															alt='Picture of the author'
															width='200'
															height='48'
														></Image>
													</Link>
												</div>
											</div>
											<form>
												<p className='mb-4'>Please Register your account</p>

												<div className='mb-4'>
													<input
														type='text'
														className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
														id='exampleFormControlInput1'
														placeholder='user name'
														value={userName}
														onChange={(e) => setUserName(e.target.value)}
													/>
												</div>

												<div className='mb-4'>
													<input
														type='text'
														className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
														id='exampleFormControlInput2'
														placeholder='email'
														value={email}
														onChange={(e) => setEmail(e.target.value)}
													/>
												</div>

												<div className='mb-4'>
													<input
														type='password'
														className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
														id='exampleFormControlInput3'
														placeholder='Password'
														value={password}
														onChange={(e) => setPassword(e.target.value)}
													/>
												</div>
												<div className='text-center pt-1 mb-12 pb-1'>
													<button
														className='inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3'
														type='button'
														data-mdb-ripple='true'
														data-mdb-ripple-color='light'
														style={{
															backgroundImage:
																"linear-gradient(to right,  #ee7724, #d8363a,#dd3675,#b44593)",
														}}
														onClick={handleSubmit}
													>
														Sign up
													</button>
												</div>
												<div className='flex items-center justify-between pb-6'>
													<p className='mb-0 mr-2'>Have an account?</p>
													<Link href='/Login'>
														<button
															type='button'
															className='inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
															data-mdb-ripple='true'
															data-mdb-ripple-color='light'
														>
															Login
														</button>
													</Link>
												</div>
											</form>
										</div>
									</div>
									<div
										className='lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none'
										style={{
											backgroundImage:
												"linear-gradient(to right,  #ee7724, #d8363a,#dd3675,#b44593)",
										}}
									>
										<div className='text-white px-4 py-6 md:p-12 md:mx-6'>
											<h4 className='text-xl font-semibold mb-6'>
												welcome to the Iq test app
											</h4>
											<p className='text-sm'>
												i am a web developer and i am working on this app to
												help you learn more about yourself and your iq.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Header>
	);
};

export default Login;
