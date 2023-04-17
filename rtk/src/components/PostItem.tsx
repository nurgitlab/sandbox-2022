import React, {FC} from "react";
import {IPost} from "../models/IPost";


interface PostItemProps {
  post: IPost,
  remove: (post: IPost) => void,
  update: (post: IPost) => void
}

export const PostItem: FC<PostItemProps> = ({post, remove, update}) => {
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation()
    remove(post)
  }

  const handleUpdate = (e: React.MouseEvent) => {
    const title = prompt() || ""
    update({...post, title})
  }

  return (
    <div onClick={handleUpdate}>
      {post.id}: {post.title}
      <button onClick={handleDelete}>X</button>
    </div>
  )
}