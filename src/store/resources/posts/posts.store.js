import {
  fetchUserPostsForAllCommunities,
  fetchUserCommunityPosts,
  togglePollOptionVote,
  createCommunityPost,
  toggleEventUser,
  togglePostLike,
} from "./posts.reducers";

export default {
  state: {
    postTypes: [
      {
        type: "info",
        title: "infoPost",
        description: "infoDescription",
      },
      {
        type: "event",
        title: "eventPost",
        description: "eventDescription",
      },
      {
        type: "poll",
        title: "pollPost",
        description: "pollDescription",
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
    togglePollOptionVote,
    createCommunityPost,
    toggleEventUser,
    togglePostLike,
  },
  getters: {
    getPost: (state) => state.post,
    getPosts: (state) => state.posts,
    getPostTypes: (state) => state.postTypes,
    getCommunityPosts: (state) => state.communityPosts,
  },
};
