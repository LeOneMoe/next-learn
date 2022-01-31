import {MainLayout} from "../../components/MainLayout";
import classes from "../../styles/posts.module.css"
import PostsFlexContainer from "../../components/PostsFlexContainer/PostsFlexContainer"
import PostsTable from "../../components/PostsTable/PostsTable";
import {getAll} from "../../api/posts/crud";
import {useEffect, useState} from "react";


const Posts = ({SSPosts}) => {
    const [posts, setPosts] = useState(SSPosts)

    useEffect(() => {
        async function loadPosts() {
            const json = await getAll()
            setPosts(json)
        }

        if (!posts) {
            loadPosts()
        }
    })

    if (!posts) {
        return (
            <MainLayout title={`Loading...`}>
                <div>
                    <p className={classes.spiiiiiin}>Loading...</p>
                </div>
            </MainLayout>
        )
    }

    return (
        <MainLayout title={`Posts`}>
            <div className={classes.count}>Found {posts.length} posts</div>

            {/*<PostsFlexContainer posts={posts}/>*/}

            <PostsTable posts={posts}/>
        </MainLayout>
    )
}

export const getServerSideProps = async () => {
    const SSPosts = await getAll()

    return {props: {SSPosts}}
}

export default Posts
