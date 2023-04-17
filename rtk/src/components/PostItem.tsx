import {FC} from "react";
import {IPost} from "../models/IPost";


interface PostItemProps {
  post: IPost
}

export const PostItem: FC<PostItemProps> = ({post}) => {
  return (
    <div>
      {post.id}: {post.title}
      <button>X</button>
    </div>
  )
}