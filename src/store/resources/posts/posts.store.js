import { fetchPostTypes } from "./post-type.reducers";

export default {
  state: {
    post: null,
    posts: [],
    postTypes: [],
    communityPosts: [],
  },
  mutations: {
    setPost(state, post) {
      state.post = post;
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
    setPostTypes(state, postTypes) {
      state.postTypes = postTypes;
    },
    setCommunityPosts(state, communityPosts) {
      state.communityPosts = communityPosts;
    },
  },
  actions: {
    fetchPostTypes,
  },
  getters: {
    getPost: (state) => state.post,
    getPosts: (state) => state.posts,
    getPostTypes: (state) => state.postTypes,
    getCommunityPosts: (state) => state.communityPosts,
  },
};
