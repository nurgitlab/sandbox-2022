import {postAPI} from "../services/PostService";
import {PostItem} from "./PostItem";

export const PostContainer = () => {
  const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(10)

  return (
    <div>
      {isLoading && <h1>Идёт загрузка</h1>}
      {error && <h1>Произошла ошибка</h1>}

      {posts && posts.map(post => <PostItem key={post.id} post={post}/>)}
    </div>
  )
}