import { initStorePosts } from "../stores/posts";
import { IPostStore, PostAction, TypesPosts } from "../types/posts";

export const postReducer = (store: IPostStore = initStorePosts, action: PostAction): IPostStore => {
  switch (action.type) {
    case TypesPosts.SET_POSTS:
      return {...store, posts: action.payload}
    case TypesPosts.ADD_POST:
      return {...store, posts: [...store.posts, action.payload]}
    case TypesPosts.DELETE_POST:
      return {...store, posts: store.posts.filter(el => el._id !== action.payload )}
    case TypesPosts.EDIT_POST:
      return {...store, posts: store.posts.map(el => el._id === action.payload._id ? {...el, entry: action.payload.entry} : el)}
    default:
      return store
  }
};
