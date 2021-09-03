/* eslint-disable react-hooks/rules-of-hooks */
import React, { FC, useState } from 'react'
import me from './me.png'
import {
	motion,
	MotionValue,
	useTransform,
	useViewportScroll,
} from 'framer-motion'

const Project: FC<{ name: string; description: string; id: string }> = ({
	name,
	id,
	description,
	children,
}) => {
	const [open, setOpen] = useState(false)

	return (
		<div
			className='bg-gray-50 rounded-md p-4 cursor-pointer relative overflow-hidden'
			onClick={() => {
				setOpen(!open)
			}}>
			<h2 className='font-bold text-3xl'>{name}</h2>
			<p>{description}</p>

			<motion.div
				variants={{
					animate: { height: 'auto', opacity: 1 },
					base: { height: 0, opacity: 0 },
				}}
				initial='base'
				animate={open ? 'animate' : 'base'}
				className='overflow-hidden bg-gray-200 text-black p-2 rounded-sm'>
				{children}
			</motion.div>

			<div
				className={`bottom-0 absolute h-2 left-0 right-0 transition-colors ${
					open && 'bg-green-500'
				}`}
			/>
		</div>
	)
}

function App() {
	const scroll = useTransform(
		useViewportScroll().scrollY,
		[0, 250],
		[0, 1],
		{
			clamp: false,
		}
	)

	const stagger = 0.2
	const duration = 0.35

	const base = 1

	const values = [...Array(4).keys()].map((x) =>
		useTransform(
			scroll,
			[base + x * stagger, base + x * stagger + duration],
			[0, 1]
		)
	)

	const xTransformer = (val: MotionValue<number>) =>
		useTransform(val, [0, 1], [50, 0])
	const opacityTransformer = (val: MotionValue<number>) =>
		useTransform(val, [0, 0.7], [0, 1])

	return (
		<>
			<header>
				<nav className='h-12 flex items-center justify-center space p-4  gap-4'>
					<a href='#about-me' className='dark:text-white font-semibold'>
						About me
					</a>
					<a href='#projects' className='dark:text-white font-semibold'>
						Project
					</a>
				</nav>
			</header>
			<section
				className='h-screen relative -top-12 flex justify-center items-center gap-28  bg-cover bg-no-repeat'
				// style={{ backgroundImage: `url(${waves})` }}
			>
				<motion.img
					src={me}
					alt='William B. Sørensen'
					className='rounded-full shadow-lg'
					animate={{ x: 0, opacity: 1 }}
					initial={{ x: -50, opacity: 0.5 }}
					transition={{ duration: 0.6 }}
				/>
				<h1 className='font-bold text-5xl dark:text-white'>Hvem er jeg</h1>
			</section>
			<section className='flex items-center justify-center p-4 gap-4 flex-col'>
				<motion.div
					className='w-full'
					style={{
						x: xTransformer(values[0]),
						opacity: opacityTransformer(values[0]),
					}}>
					<Project
						id='0'
						name='name'
						description='lorem impsum dolor sit amet, consectetur adipiscing elit esse cillum dolore magna'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
						maxime dolorem. Nobis, veniam consequatur sunt, dicta iste eos
						voluptatibus, voluptates quas dolorum non odit ipsa repellendus
						provident odio eligendi explicabo. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Neque, maxime dolorem. Nobis, veniam
						consequatur sunt, dicta iste eos voluptatibus, voluptates quas
						dolorum non odit ipsa repellendus provident odio eligendi explicabo.
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
						maxime dolorem. Nobis, veniam consequatur sunt, dicta iste eos
						voluptatibus, voluptates quas dolorum non odit ipsa repellendus
						provident odio eligendi explicabo.Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Neque, maxime dolorem. Nobis, veniam
						consequatur sunt, dicta iste eos voluptatibus, voluptates quas
						dolorum non odit ipsa repellendus provident odio eligendi
						explicabo.Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Neque, maxime dolorem. Nobis, veniam consequatur sunt, dicta iste
						eos voluptatibus, voluptates quas dolorum non odit ipsa repellendus
						provident odio eligendi explicabo.Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Neque, maxime dolorem. Nobis, veniam
						consequatur sunt, dicta iste eos voluptatibus, voluptates quas
						dolorum non odit ipsa repellendus provident odio eligendi
						explicabo.Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Neque, maxime dolorem. Nobis, veniam consequatur sunt, dicta iste
						eos voluptatibus, voluptates quas dolorum non odit ipsa repellendus
						provident odio eligendi explicabo.Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Neque, maxime dolorem. Nobis, veniam
						consequatur sunt, dicta iste eos voluptatibus, voluptates quas
						dolorum non odit ipsa repellendus provident odio eligendi explicabo.
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
						maxime dolorem. Nobis, veniam consequatur sunt, dicta iste eos
						voluptatibus, voluptates quas dolorum non odit ipsa repellendus
						provident odio eligendi explicabo. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Neque, maxime dolorem. Nobis, veniam
						consequatur sunt, dicta iste eos voluptatibus, voluptates quas
						dolorum non odit ipsa repellendus provident odio eligendi explicabo.
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
						maxime dolorem. Nobis, veniam consequatur sunt, dicta iste eos
						voluptatibus, voluptates quas dolorum non odit ipsa repellendus
						provident odio eligendi explicabo.Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Neque, maxime dolorem. Nobis, veniam
						consequatur sunt, dicta iste eos voluptatibus, voluptates quas
						dolorum non odit ipsa repellendus provident odio eligendi
						explicabo.Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Neque, maxime dolorem. Nobis, veniam consequatur sunt, dicta iste
						eos voluptatibus, voluptates quas dolorum non odit ipsa repellendus
						provident odio eligendi explicabo.Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Neque, maxime dolorem. Nobis, veniam
						consequatur sunt, dicta iste eos voluptatibus, voluptates quas
						dolorum non odit ipsa repellendus provident odio eligendi
						explicabo.Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Neque, maxime dolorem. Nobis, veniam consequatur sunt, dicta iste
						eos voluptatibus, voluptates quas dolorum non odit ipsa repellendus
						provident odio eligendi explicabo.Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Neque, maxime dolorem. Nobis, veniam
						consequatur sunt, dicta iste eos voluptatibus, voluptates quas
						dolorum non odit ipsa repellendus provident odio eligendi explicabo.
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
						maxime dolorem. Nobis, veniam consequatur sunt, dicta iste eos
						voluptatibus, voluptates quas dolorum non odit ipsa repellendus
						provident odio eligendi explicabo. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Neque, maxime dolorem. Nobis, veniam
						consequatur sunt, dicta iste eos voluptatibus, voluptates quas
						dolorum non odit ipsa repellendus provident odio eligendi explicabo.
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
						maxime dolorem. Nobis, veniam consequatur sunt, dicta iste eos
						voluptatibus, voluptates quas dolorum non odit ipsa repellendus
						provident odio eligendi explicabo.Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Neque, maxime dolorem. Nobis, veniam
						consequatur sunt, dicta iste eos voluptatibus, voluptates quas
						dolorum non odit ipsa repellendus provident odio eligendi
						explicabo.Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Neque, maxime dolorem. Nobis, veniam consequatur sunt, dicta iste
						eos voluptatibus, voluptates quas dolorum non odit ipsa repellendus
						provident odio eligendi explicabo.Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Neque, maxime dolorem. Nobis, veniam
						consequatur sunt, dicta iste eos voluptatibus, voluptates quas
						dolorum non odit ipsa repellendus provident odio eligendi
						explicabo.Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Neque, maxime dolorem. Nobis, veniam consequatur sunt, dicta iste
						eos voluptatibus, voluptates quas dolorum non odit ipsa repellendus
						provident odio eligendi explicabo.Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Neque, maxime dolorem. Nobis, veniam
						consequatur sunt, dicta iste eos voluptatibus, voluptates quas
						dolorum non odit ipsa repellendus provident odio eligendi explicabo.
					</Project>
				</motion.div>
				<motion.div
					className='w-full'
					style={{
						x: xTransformer(values[1]),
						opacity: opacityTransformer(values[1]),
					}}>
					<Project
						id='0'
						name='name'
						description='lorem impsum dolor sit amet, consectetur adipiscing elit esse cillum dolore magna'
					/>
				</motion.div>
				<motion.div
					className='w-full'
					style={{
						x: xTransformer(values[2]),
						opacity: opacityTransformer(values[2]),
					}}>
					<Project
						id='0'
						name='name'
						description='lorem impsum dolor sit amet, consectetur adipiscing elit esse cillum dolore magna'
					/>
				</motion.div>
				<motion.div
					className='w-full'
					style={{
						x: xTransformer(values[3]),
						opacity: opacityTransformer(values[3]),
					}}>
					<Project
						id='0'
						name='name'
						description='lorem impsum dolor sit amet, consectetur adipiscing elit esse cillum dolore magna'
					/>
				</motion.div>
			</section>
		</>
	)
}

export default App
