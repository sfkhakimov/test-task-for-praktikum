import { useDeferredValue, useEffect, useState } from 'react'
import { axiosInstance } from 'src/utils'
import Posts from '../../components/posts/Posts.tsx'
import { PostItemType } from 'src/utils/types'
import classes from './style.module.css'
import { Loader } from 'src/components/Loader'

const PostsContainer = () => {
    const [posts, setPosts] = useState<PostItemType[]>([])
    const [query, setQuery] = useState('')
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true)

    const handleChangeQuery = (v: string) => {
        setQuery(v)
        setPage(1)
    }

    const deferredQuery = useDeferredValue(query)

    useEffect(() => {
        void (async () => {
            setIsLoading(true)

            // Как вариант можно использовать пагинацию бэкенда
            const { data } = await axiosInstance.get<PostItemType[]>(
                'https://jsonplaceholder.typicode.com/posts'
            )
            setPosts(data)
            setIsLoading(false)
        })()
    }, [])

    if (isLoading) {
        return <Loader when={isLoading} />
    }

    return (
        <>
            <input
                placeholder="Введите значение"
                className={classes.searchBar}
                name="query"
                value={query}
                onChange={(e) => handleChangeQuery(e.target.value)}
            />
            <Posts
                posts={posts}
                deferredQuery={deferredQuery}
                page={page}
                onChangePage={setPage}
            />
        </>
    )
}

export default PostsContainer
