import { Fragment } from 'react'
import FeaturedPost from '../components/homepage/featured-post'
import PersonalInfo from '../components/homepage/personal'

const DUMMY_POSTS = [
	{
		title: 'getting Started',
		image: 'dummy_image.png',
		description:
			'I am starting NextJS,Nextjs is a react js framework for production',
		date: '2021-05-04',
		slug: 'getting-started-1',
	},
	{
		title: 'getting Started',
		image: 'dummy_image.png',
		description:
			'I am starting NextJS,Nextjs is a react js framework for production',
		date: '2021-05-04',
		slug: 'getting-started-2',
	},
	{
		title: 'getting Started',
		image: 'dummy_image.png',
		description:
			'I am starting NextJS,Nextjs is a react js framework for production',
		date: '2021-05-04',
		slug: 'getting-started-3',
	},
	{
		title: 'getting Started',
		image: 'dummy_image.png',
		description:
			'I am starting NextJS,Nextjs is a react js framework for production',
		date: '2021-05-04',
		slug: 'getting-started-4',
	},
]

const HomePage = () => {
	return (
		<Fragment>
			<PersonalInfo />
			<FeaturedPost posts={DUMMY_POSTS} />
		</Fragment>
	)
}

export default HomePage
