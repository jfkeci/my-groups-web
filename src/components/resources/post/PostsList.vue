<template>
  <div class="mt-3" v-if="isLoggedIn">
    <div v-for="post in posts" :key="post.id">
      <PostsListItem :post="post" />
    </div>
  </div>
</template>

<script>
import PostsListItem from "./PostsListItem.vue";

export default {
  name: "PostsList",
  components: {
    PostsListItem,
  },
  data() {
    return {
      posts: [
        {
          id: 19,
          createdAt: "2022-09-07T17:25:36.000Z",
          updatedAt: "2022-09-07T17:25:36.000Z",
          createdBy: 9,
          community: 7,
          title: "test-post-2",
          body: "test-body-2",
          image: null,
          type: "info",
          date: null,
          comments: [],
          users: {
            id: 9,
            firstName: "stjepan",
            lastName: "horvat",
            username: "stjepanh",
            image: null,
          },
          poll_options: [],
          event_users: [],
        },
        {
          id: 20,
          createdAt: "2022-09-07T17:25:55.000Z",
          updatedAt: "2022-09-07T17:25:55.000Z",
          createdBy: 9,
          community: 7,
          title: "test-post-2",
          body: "test-body-2",
          image: null,
          type: "event",
          date: "2022-09-04T20:05:52.000Z",
          comments: [
            {
              id: 12,
              createdAt: "2022-09-07T17:26:02.000Z",
              updatedAt: "2022-09-07T17:26:02.000Z",
              createdBy: 9,
              post: 20,
              text: "some comment text",
              users: {
                id: 9,
                firstName: "stjepan",
                lastName: "horvat",
                username: "stjepanh",
                image: null,
              },
            },
            {
              id: 13,
              createdAt: "2022-09-07T17:26:03.000Z",
              updatedAt: "2022-09-07T17:26:03.000Z",
              createdBy: 9,
              post: 20,
              text: "some comment text",
              users: {
                id: 9,
                firstName: "stjepan",
                lastName: "horvat",
                username: "stjepanh",
                image: null,
              },
            },
          ],
          users: {
            id: 9,
            firstName: "stjepan",
            lastName: "horvat",
            username: "stjepanh",
            image: null,
          },
          poll_options: [],
          event_users: [
            {
              id: 5,
              event: 20,
              user: 9,
              createdAt: "2022-09-07T17:25:55.000Z",
              users: {
                id: 9,
                firstName: "stjepan",
                lastName: "horvat",
                username: "stjepanh",
                image: null,
              },
            },
          ],
        },
        {
          id: 21,
          createdAt: "2022-09-07T17:26:05.000Z",
          updatedAt: "2022-09-07T17:26:05.000Z",
          createdBy: 9,
          community: 7,
          title: "test-post-2",
          body: "test-body-2",
          image: null,
          type: "poll",
          date: null,
          comments: [
            {
              id: 14,
              createdAt: "2022-09-07T17:26:08.000Z",
              updatedAt: "2022-09-07T17:26:08.000Z",
              createdBy: 9,
              post: 21,
              text: "some comment text",
              users: {
                id: 9,
                firstName: "stjepan",
                lastName: "horvat",
                username: "stjepanh",
                image: null,
              },
            },
            {
              id: 15,
              createdAt: "2022-09-07T17:26:08.000Z",
              updatedAt: "2022-09-07T17:26:08.000Z",
              createdBy: 9,
              post: 21,
              text: "some comment text",
              users: {
                id: 9,
                firstName: "stjepan",
                lastName: "horvat",
                username: "stjepanh",
                image: null,
              },
            },
          ],
          users: {
            id: 9,
            firstName: "stjepan",
            lastName: "horvat",
            username: "stjepanh",
            image: null,
          },
          poll_options: [
            {
              id: 15,
              poll: 21,
              option: "option1",
              createdAt: "2022-09-07T17:26:05.000Z",
              poll_option_votes: [
                {
                  id: 3,
                  poll: 21,
                  option: 15,
                  user: 9,
                  createdAt: "2022-09-07T17:27:39.000Z",
                  users: {
                    id: 9,
                    firstName: "stjepan",
                    lastName: "horvat",
                    username: "stjepanh",
                    image: null,
                  },
                },
              ],
            },
            {
              id: 16,
              poll: 21,
              option: "option2",
              createdAt: "2022-09-07T17:26:05.000Z",
              poll_option_votes: [],
            },
          ],
          event_users: [],
        },
      ],
    };
  },
  /* computed: {
    posts() {
      return this.$store.getters.getPosts;
    },
  }, */
};
</script>

<style>
</style>