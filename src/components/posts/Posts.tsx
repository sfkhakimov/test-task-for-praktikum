import React, { Dispatch, memo, SetStateAction, useMemo } from 'react'
import classes from 'src/components/posts/style.module.css'
import { Pagination } from 'src/components/pagination'
import { PostItemType } from 'src/utils/types'
import { chunk } from 'lodash'
import { Link } from 'react-router-dom'

type Props = {
    posts: PostItemType[]
    deferredQuery: string
    page: number
    onChangePage: Dispatch<SetStateAction<number>>
}

const Posts: React.FC<Props> = ({
    posts,
    deferredQuery,
    page,
    onChangePage,
}) => {
    const filteredPosts = useMemo(
        () =>
            deferredQuery
                ? posts.filter(
                      (item) =>
                          item.title.includes(deferredQuery) ||
                          item.body.includes(deferredQuery)
                  )
                : posts,
        [posts, deferredQuery]
    )

    const pages: Record<number, PostItemType[]> = chunk(
        filteredPosts,
        10
    ).reduce((acc, item, i) => ({ ...acc, [i + 1]: item }), {})

    return (
        <>
            {filteredPosts.length ? (
                <div className={classes.list}>
                    {pages[page]?.map((item) => (
                        <Link to={`/posts/${item.id}`} className={classes.link}>
                            <div className={classes.post} key={item.id}>
                                <p>{item.title}</p>
                                <p>{item.body}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <p>Посты не найдены :(</p>
            )}
            <Pagination
                limit={10}
                count={filteredPosts.length}
                page={page}
                onChangePage={onChangePage}
            />
        </>
    )
}

export default memo(Posts)
