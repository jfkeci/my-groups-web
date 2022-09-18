<template>
  <button @click="count++">Count is {{ count }}</button>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style>
</style>