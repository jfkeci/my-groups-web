import {
  fetchUserPostsForAllCommunities,
  fetchUserCommunityPosts,
  createCommunityPollPost,
  createCommunityPost,
} from "./posts.reducers";

export default {
  state: {
    postTypes: [
      {
        type: "info",
        title: "Information",
        description: "Publish some information",
      },
      {
        type: "event",
        title: "Event",
        description: "Publish an event",
      },
      {
        type: "poll",
        title: "Poll",
        description: "Publish a poll",
      },
    ],
    post: null,
    posts: [],
    communityPosts: [],
  },
  mutations: {
    setPost(state, post) {
      state.post = post;
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
    setCommunityPosts(state, communityPosts) {
      state.communityPosts = communityPosts;
    },
  },
  actions: {
    fetchUserPostsForAllCommunities,
    fetchUserCommunityPosts,
    createCommunityPollPost,
    createCommunityPost,
  },
  getters: {
    getPost: (state) => state.post,
    getPosts: (state) => state.posts,
    getPostTypes: (state) => state.postTypes,
    getCommunityPosts: (state) => state.communityPosts,
  },
};
