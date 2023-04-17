import {postAPI} from "../services/PostService";
import {PostItem} from "./PostItem";

export const PostContainer = () => {
  const {data: posts} = postAPI.useFetchAllPostsQuery(3)

  return (
    <div>
      {posts && posts.map(post => <PostItem key={post.id} post={post}/>)}
    </div>
  )
}