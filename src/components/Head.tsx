import Head from "next/head";
import Script from "next/script";

interface HeaderProps {
	title: string;
	content: string;
	children: React.ReactNode;
}

const Header = ({ title, content, children }: HeaderProps) => {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='description' content={content} />
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon.ico'
				></link>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap'
					rel='stylesheet'
				/>
				<link
					rel='stylesheet'
					href='https://unpkg.com/flowbite@1.5.4/dist/flowbite.min.css'
				/>
				/
				<link
					href='https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap'
					rel='stylesheet'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap'
					rel='stylesheet'
				/>
			</Head>

			<div className=' font-Hyeon'>{children}</div>
		</div>
	);
};

export default Header;
