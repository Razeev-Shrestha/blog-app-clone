import Head from 'next/head'
import { Fragment } from 'react'
import AllPosts from '../../components/posts/all-posts'
import { getAllPosts } from '../../helpers/posts-util'

const AllPostsPage = ({ posts }) => {
	return (
		<Fragment>
			<Head>
				<title>All posts</title>
				<meta name='description' content='This is a all blog posts' />
			</Head>
			<AllPosts posts={posts} />
		</Fragment>
	)
}

export function getStaticProps() {
	const allPosts = getAllPosts()
	return {
		props: {
			posts: allPosts,
		},
	}
}

export default AllPostsPage
