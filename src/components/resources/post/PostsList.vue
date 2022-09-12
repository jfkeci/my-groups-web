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
      posts: [] /* [
        {
          id: 1,
          createdAt: "2022-09-07T19:35:46.000Z",
          updatedAt: "2022-09-07T19:35:46.000Z",
          createdBy: 1,
          community: 2,
          title: "Ugašen požar",
          body: "Danas smo uspješno ugasili požar",
          image: null,
          type: "info",
          date: null,
          comments: [
            {
              id: 1,
              createdAt: "2022-09-07T19:36:06.000Z",
              updatedAt: "2022-09-07T19:36:06.000Z",
              createdBy: 1,
              post: 1,
              text: "Cestitam ljudi",
              users: {
                id: 1,
                firstName: "Stjepan",
                lastName: "Horvat",
                username: "stjepanh",
                image: null,
              },
            },
          ],
          users: {
            id: 1,
            firstName: "Stjepan",
            lastName: "Horvat",
            username: "stjepanh",
            image: null,
          },
          poll_options: [],
          event_users: [],
        },
        {
          id: 2,
          createdAt: "2022-09-07T19:37:25.000Z",
          updatedAt: "2022-09-07T19:37:25.000Z",
          createdBy: 1,
          community: 2,
          title: "Koje boje će nam biti novi vatrogasni kamion",
          body: "Da, btw kupujemo novi vatrogasni kamion",
          image: null,
          type: "poll",
          date: null,
          comments: [
            {
              id: 2,
              createdAt: "2022-09-07T19:37:57.000Z",
              updatedAt: "2022-09-07T19:37:57.000Z",
              createdBy: 1,
              post: 2,
              text: "Znam da su inace crveno bijeli",
              users: {
                id: 1,
                firstName: "Stjepan",
                lastName: "Horvat",
                username: "stjepanh",
                image: null,
              },
            },
          ],
          users: {
            id: 1,
            firstName: "Stjepan",
            lastName: "Horvat",
            username: "stjepanh",
            image: null,
          },
          poll_options: [
            {
              id: 1,
              poll: 2,
              option: "Crveno crni",
              createdAt: "2022-09-07T19:37:25.000Z",
              poll_option_votes: [],
            },
            {
              id: 2,
              poll: 2,
              option: "Crveno plavi",
              createdAt: "2022-09-07T19:37:25.000Z",
              poll_option_votes: [],
            },
            {
              id: 3,
              poll: 2,
              option: "Plavo crni",
              createdAt: "2022-09-07T19:37:25.000Z",
              poll_option_votes: [],
            },
            {
              id: 4,
              poll: 2,
              option: "Crveno bijeli",
              createdAt: "2022-09-07T19:37:25.000Z",
              poll_option_votes: [
                {
                  id: 1,
                  poll: 2,
                  option: 4,
                  user: 1,
                  createdAt: "2022-09-07T19:38:32.000Z",
                  users: {
                    id: 1,
                    firstName: "Stjepan",
                    lastName: "Horvat",
                    username: "stjepanh",
                    image: null,
                  },
                },
                {
                  id: 2,
                  poll: 3,
                  option: 4,
                  user: 2,
                  createdAt: "2022-09-07T20:11:03.000Z",
                  users: {
                    id: 2,
                    firstName: "Ivan",
                    lastName: "Horvat",
                    username: "ivanh",
                    image: null,
                  },
                },
              ],
            },
          ],
          event_users: [],
        },
        {
          id: 3,
          createdAt: "2022-09-07T19:39:28.000Z",
          updatedAt: "2022-09-07T19:39:28.000Z",
          createdBy: 1,
          community: 2,
          title: "Vatrogasna vjezba",
          body: "Imamo vatrogasnu vjezbu u cetvrtak u 14:00 na trgu",
          image: null,
          type: "event",
          date: "2022-09-07T14:00:00.000Z",
          comments: [
            {
              id: 3,
              createdAt: "2022-09-07T20:10:33.000Z",
              updatedAt: "2022-09-07T20:10:33.000Z",
              createdBy: 2,
              post: 3,
              text: "Crveni naravno",
              users: {
                id: 2,
                firstName: "Ivan",
                lastName: "Horvat",
                username: "ivanh",
                image: null,
              },
            },
          ],
          users: {
            id: 1,
            firstName: "Stjepan",
            lastName: "Horvat",
            username: "stjepanh",
            image: null,
          },
          poll_options: [],
          event_users: [
            {
              id: 1,
              event: 3,
              user: 1,
              createdAt: "2022-09-07T19:39:28.000Z",
              users: {
                id: 1,
                firstName: "Stjepan",
                lastName: "Horvat",
                username: "stjepanh",
                image: null,
              },
            },
          ],
        },
      ], */,
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