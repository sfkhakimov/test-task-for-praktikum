import { PostsContainer } from 'src/containers/posts'
import classes from './style.module.css'

const PostsPage = () => {
    return (
        <main className={classes.main}>
            <h1 className={classes.title}>Посты</h1>
            <PostsContainer />
        </main>
    )
}

export default PostsPage
