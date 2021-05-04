import classes from './post-grid.module.css'
import PostItem from './post-item'

const PostsGrid = ({ posts }) => {
	return (
		<ul className={classes.grid}>
			{posts.map(({ title, image, description, date, slug }) => (
				<PostItem
					key={slug}
					title={title}
					image={image}
					description={description}
					date={date}
					slug={slug}
				/>
			))}
		</ul>
	)
}

export default PostsGrid
