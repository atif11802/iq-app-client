import { QueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Header from "../../components/Head";
import IqNumbering from "../../components/IqNumbering";
import Navbar from "../../components/Navbar";
import Quiz from "../../components/Quiz";
import Result from "../../components/Result";
import useGetIq, { fetchIq } from "../../hooks/useGetIq";

export interface Iq {
	a: string;
	b: string;
	c: string;
	correct: string;
	d: string;
	question: string;
	_id: string;
}

type IqDetailsProps = {
	iq: {
		question: string;
		a: string;
		b: string;
		c: string;
		d: string;
		correct: string;
		answered: boolean;
		selected: string;
	}[];
};

const IqDetails = () => {
	const router = useRouter();
	const { IqDetails } = router.query;

	const { data, isLoading, error } = useGetIq(IqDetails as string);

	const [currentQuiz, setCurrentQuiz] = React.useState(0);
	const [quizQuestion, setQuizQuestion] = React.useState<IqDetailsProps | null>(
		null
	);
	const [submit, setSubmit] = React.useState(false);
	const [score, setScore] = React.useState(0);

	useEffect(() => {
		setQuizQuestion(
			data?.iq.map((quiz: Iq) => ({
				...quiz,
				answered: false,
				selected: "",
			}))
		);
	}, [data?.iq, data]);

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error...</div>;

	// console.log(quizQuestion);

	return (
		<Header title={`IQ Test `} content='IQ Test'>
			<div className='container px-4 py-6'>
				{submit !== true ? (
					<>
						<IqNumbering
							quizQuestion={quizQuestion}
							setCurrentQuiz={setCurrentQuiz}
						/>

						<Quiz
							quizQuestion={quizQuestion}
							currentQuiz={currentQuiz}
							setCurrentQuiz={setCurrentQuiz}
							setQuizQuestion={setQuizQuestion}
							score={score}
							setScore={setScore}
							setSubmit={setSubmit}
							submit={submit}
						/>
					</>
				) : (
					<Result score={score} />
				)}
			</div>
		</Header>
	);
};

export const getServerSideProps = async (context: any) => {
	const { IqDetails } = context.query;

	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: ["iq", IqDetails],
		queryFn: () => fetchIq(IqDetails),
	});

	return {
		props: {
			// dehydrate query cache
			// dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
			// dehydratedState: dehydrate(queryClient),
		},
	};
};

export default IqDetails;
