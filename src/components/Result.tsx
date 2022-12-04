import React from "react";

type ResultProps = {
	score: number;
};

const Result = ({ score }: ResultProps) => {
	return (
		<div>
			<div className='flex justify-center items-center'>
				<h1 className='text-4xl text-white-800 font-bold'>You Scored</h1>
			</div>

			<div className='flex justify-center items-center mt-3'>
				<span className='bg-zinc-600 w-24 h-24 text-white  rounded-lg flex flex-col text-3xl text-center justify-center items-center'>
					{score}
					<span className='text-xs'>Score</span>
				</span>
			</div>
		</div>
	);
};

export default Result;
