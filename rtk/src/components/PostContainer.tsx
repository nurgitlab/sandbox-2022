import {postAPI} from "../services/PostService";
import {PostItem} from "./PostItem";
import {IPost} from "../models/IPost";

export const PostContainer = () => {
  const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(10)

  const [createPost, {}] = postAPI.useCreatePostMutation()

  const [updatePost, {}] = postAPI.useUpdatePostMutation()
  const [deletePost, {}] = postAPI.useDeletePostMutation()

  const handleCreate = async () => {
    const title = prompt()
    await createPost({title, body: title} as IPost)
  }

  const handleUpdate = async (post: IPost) => {
    updatePost(post)
  }

  const handleRemove = async (post: IPost) => {
    deletePost(post)
  }

  return (
    <div>
      <button onClick={handleCreate}>Создать пост</button>
      {isLoading && <h1>Идёт загрузка</h1>}
      {error && <h1>Произошла ошибка</h1>}

      {posts && posts.map(post => <PostItem key={post.id} post={post} remove={handleRemove} update={handleUpdate}/>)}
    </div>
  )
}