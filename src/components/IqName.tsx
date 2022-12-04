import Link from "next/link";
import React from "react";
import Header from "./Head";
import { motion } from "framer-motion";

type IqNameProps = {
	data: {
		_id: string;
		name: string;
		createdAt: string;
		updatedAt: string;
		__v: number;
	}[];
};

interface Iq {
	_id: string;
	name: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
}

const IqName = ({ data }: IqNameProps) => {
	return (
		<Header title='IqName' content='IqName'>
			<div className='flex justify-center items-center'>
				{data?.map((item: Iq) => (
					<motion.div
						key={item._id}
						whileHover={{
							position: "relative",
							zIndex: 1,
							scale: [1, 1.4, 1.2],
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
						<Link href={`/test/${item._id}`}>
							<div
								className='w-96 rounded-2xl mt-3 p-2 border-2 text-center border-cyan-900
                dark:border-cyan-600
                dark:hover:bg-cyan-600
                hover:bg-cyan-700
                delay-150
                transition
                cursor-pointer
                
              
            '
							>
								<h1 className='dark:text-white text-black text-2xl '>
									{item.name}
								</h1>
							</div>
						</Link>
					</motion.div>
				))}
			</div>
		</Header>
	);
};

export default IqName;
