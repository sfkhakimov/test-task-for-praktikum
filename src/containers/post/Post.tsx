import { useParams } from 'react-router-dom'
import { Post } from 'src/components/post'
import { useEffect, useState } from 'react'
import { PostItemType } from 'src/utils/types'
import { axiosInstance } from 'src/utils'

const PostContainer = () => {
    const { id } = useParams()
    const [post, setPost] = useState<PostItemType | undefined>(undefined)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        void (async () => {
            setIsLoading(true)
            const { data } = await axiosInstance.get<PostItemType>(
                `https://jsonplaceholder.typicode.com/posts/${id}`
            )
            setIsLoading(false)
            setPost(data)
        })()
    }, [id])

    return <Post post={post} isLoading={isLoading} />
}

export default PostContainer
