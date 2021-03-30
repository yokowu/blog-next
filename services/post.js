import { get } from "../utils/request"

let postsUtl = "/post"

export const listPosts = (index, size) => {
  return get(postsUtl, {index, size})
}

export const getPostById = (id) => {
  return get(postsUtl + "/" + id)
}