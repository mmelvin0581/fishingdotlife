<template>
  <div class="d-flex">
    <div class="d-flex flex-column mr-3">
      <span class="font-weight-bold">Author</span>
      <span class="author-name" v-text="$page.post.author" />
    </div>
    <div class="d-flex flex-column mr-3">
      <span class="font-weight-bold">Date</span>
      <div v-text="new Date($page.post.date).toLocaleDateString()" />
    </div>
    <div class="d-flex flex-column mr-3">
      <span class="font-weight-bold">Time</span>
      <span>{{ $page.post.timeToRead }} min read</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scopedß></style>
