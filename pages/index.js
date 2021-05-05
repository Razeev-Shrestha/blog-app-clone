import { Fragment } from 'react'
import Head from 'next/head'

import FeaturedPost from '../components/homepage/featured-post'
import PersonalInfo from '../components/homepage/personal'
import { getFeaturedPosts } from '../helpers/posts-util'

const HomePage = ({ posts }) => {
	return (
		<Fragment>
			<Head>
				<title>Blog Clone App</title>
				<meta name='description' content='This is a cloned blog app' />
			</Head>
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
