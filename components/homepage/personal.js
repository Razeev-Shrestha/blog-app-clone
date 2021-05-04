import Image from 'next/image'
import classes from './personal.module.css'
const PersonalInfo = () => {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src='/images/personal/random.png'
					alt=' An Image of a random person'
					width={300}
					height={300}
				/>
			</div>
			<h1>I am rajeev</h1>
			<p>i am learing nextjs</p>
		</section>
	)
}

export default PersonalInfo
