import React from 'react'
import { PostItemType } from 'src/utils/types'
import classes from './style.module.css'
import { Link } from 'react-router-dom'
import { Loader } from 'src/components/Loader'

type Props = {
    post?: PostItemType
    isLoading: boolean
}

const Post: React.FC<Props> = ({ post, isLoading }) => {
    return (
        <div className={classes.main}>
            <Loader when={isLoading} />
            {!isLoading && (
                <div className={classes.card}>
                    <Link to="/posts" className={classes.backlink}>
                        Вернуться назад
                    </Link>
                    <h1 className={classes.title}>Пост</h1>
                    <div>
                        <p>Заголовок:</p>
                        <p>{post?.title}</p>
                    </div>
                    <div>
                        <p>Описание:</p>
                        <p>{post?.body}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Post
