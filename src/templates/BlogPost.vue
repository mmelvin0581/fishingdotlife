<template>
  <Layout>
    <g-image immediate class="blog-image mb-4" :src="$page.post.image" />
    <div class="blog-post">
      <h1 v-html="$page.post.title" class="mb-4" />
      <BlogMeta />
      <BlogContent class="mt-5" :content="$page.post.content" />
    </div>
  </Layout>
</template>

<page-query>
query BlogPost ($path: String!) {
  post: blogPost (path: $path) {
    title
    author
    date
    timeToRead
    content
    image
  }
}
</page-query>

<script>
import BlogContent from "@/components/BlogContent";
import BlogMeta from "@/components/BlogMeta";

export default {
  components: {
    BlogContent,
    BlogMeta,
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
};
</script>

<style lang="scss" scoped>
.meta {
  display: flex;
}

.box {
  display: flex;
  flex-direction: column;
  padding: 0 20px 0 0;

  .label {
    font-weight: bold;
  }
}
</style>
