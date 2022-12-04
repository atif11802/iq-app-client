import React from "react";

export type IqNumberingProps = {
	quizQuestion: any;
	setCurrentQuiz: React.Dispatch<React.SetStateAction<number>>;
};

const IqNumbering = ({ quizQuestion, setCurrentQuiz }: IqNumberingProps) => {
	return (
		<div className='flex mt-7'>
			{quizQuestion?.map((quiz: any, index: number) => {
				// console.log(quiz.answered);
				return (
					<div
						onClick={() => setCurrentQuiz(index)}
						key={index}
						className={`w-10 h-10 cursor-pointer ${
							quiz.answered === true ? "bg-green-500" : "bg-gray-800"
						}  rounded-full flex items-center justify-center flex-wrap mr-4 text-white `}
					>
						{index + 1}
					</div>
				);
			})}
		</div>
	);
};

export default IqNumbering;
