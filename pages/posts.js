import {MainLayout} from "../components/MainLayout";
import classes from "../styles/posts.module.css"
import PostsFlexContainer from "../components/PostsFlexContainer/PostsFlexContainer"
import PostsTable from "../components/PostsTable/PostsTable";


const Posts = ({posts}) => {
    // const [posts, setPosts] = useState([])
    //
    // useEffect(() => {
    //     async function loadPosts() {
    //         const response = await fetch(`http://localhost:4200/posts`)
    //         const json = await response.json()
    //         setPosts(json)
    //     }
    //
    //     loadPosts()
    // }, [])

    return (
        <MainLayout title={`Posts`}>
            <div className={classes.count}>Found {posts.length} posts</div>

            <PostsFlexContainer posts={posts}/>

            <PostsTable posts={posts}/>
        </MainLayout>
    )
}

export const getServerSideProps = async () => {
    const res = await fetch('http://localhost:4200/posts')
    const posts = await res.json()

    return {props: {posts}}
}

export default Posts