import React from "react";
import Navbar from "../../components/Navbar";
import useGetIqName, { fetchIqName } from "../../hooks/useGetIqName";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import IqName from "../../components/IqName";

const Index = () => {
	const { data, isLoading, error } = useGetIqName();

	// console.log(data, isLoading);

	if (isLoading) return <div>Loading...</div>;

	return (
		<div>
			<IqName data={data} />
		</div>
	);
};

export const getServerSideProps = async () => {
	const queryClient = new QueryClient();

	// prefetch data on the server
	await queryClient.prefetchQuery({
		queryKey: ["iqNames"],
		queryFn: fetchIqName,
	});

	return {
		props: {
			// dehydrate query cache
			// dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
			dehydratedState: dehydrate(queryClient),
		},
	};
};

export default Index;
