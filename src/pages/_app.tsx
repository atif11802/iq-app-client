import "../../styles/globals.css";
import type { AppProps } from "next/app";
import {
	QueryClient,
	QueryClientProvider,
	Hydrate,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";

const queryClient = new QueryClient();

export default function App({ Component, pageProps, router }: AppProps) {
	const Layout = (Component as any).Layout || EmptyLayout;

	const { pathname } = useRouter();

	const showHeader =
		pathname === "/" || pathname === "/Login" || pathname === "/SignUp"
			? false
			: true;

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider attribute='class' defaultTheme='system' storageKey='theme'>
				<Hydrate state={pageProps.dehydratedState}>
					<AnimatePresence>
						<motion.div
							key={router.route}
							initial='pageInitial'
							animate='pageAnimate'
							exit='pageExit'
							variants={{
								pageInitial: {
									opacity: 0,
								},
								pageAnimate: {
									opacity: 1,
								},
								pageExit: {
									backgroundColor: "white",
									filter: `invert()`,
									opacity: 0,
								},
							}}
						>
							{showHeader && <Navbar />}
							<Layout>
								<Component {...pageProps} />
							</Layout>
						</motion.div>
					</AnimatePresence>
				</Hydrate>

				<ReactQueryDevtools initialIsOpen={false} />
			</ThemeProvider>
		</QueryClientProvider>
	);
}

export interface LayoutProps {
	children: React.ReactNode;
}

const EmptyLayout = (props: LayoutProps) => {
	return <>{props.children}</>;
};
