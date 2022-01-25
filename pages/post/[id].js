import {useRouter} from "next/router";
import {MainLayout} from "../../components/MainLayout";
import {useState} from "react";

const Post = ({serverSidePost}) => {
    const router = useRouter()

    const [post, setPost] = useState(serverSidePost)

    useState(() => {
        async function load() {
            setPost(await loadData(router.query.id))
        }

        if (!serverSidePost) {
            load()
        }
    }, [])

    if (!post) {
        return (
            <MainLayout title={`Loading...`}>
                <p>Loading...</p>
            </MainLayout>
        )
    }

    return (
        <MainLayout title={`${post.title}`}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p>{post.author}</p>
        </MainLayout>
    )
}

Post.getInitialProps = async ({query, req}) => {
    if (!req) {
        return {post: null}
    }

    return {post: await loadData(query.id)}
}

async function loadData(id) {
    const res = await fetch('http://localhost:4200/posts/' + id)
    return await res.json()
}


export default Post