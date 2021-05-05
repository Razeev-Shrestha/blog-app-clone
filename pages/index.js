import { Fragment } from 'react'
import FeaturedPost from '../components/homepage/featured-post'
import PersonalInfo from '../components/homepage/personal'
import { getFeaturedPosts } from '../helpers/posts-util'

const HomePage = ({ posts }) => {
	return (
		<Fragment>
			<PersonalInfo />
			<FeaturedPost posts={posts} />
		</Fragment>
	)
}

export function getStaticProps() {
	const featuredPosts = getFeaturedPosts()
	return {
		props: {
			posts: featuredPosts,
		},
	}
}

export default HomePage
