<template>
  <div class="posts">
    <div
      v-for="post in posts"
      :key="post.hash"
      class="post"
    >
      <a
        class="post--title"
        :href="post.href"
      >
        {{ post.description }}
      </a>
      <div
        v-if="post.extended"
        class="post--description"
      >
        {{ post.extended }}
      </div>
      <ul
        v-if="post.tags"
        class="post--tags"
      >
        <li
          v-for="tag in post.tags.split( ' ' )"
          :key="post.hash + tag"
        >
          <a
            class="post--tag"
            href="#"
          >
            {{ tag }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
	export default {
		name: "SearchResult",
        props: {
			posts: Array
        }
	}
</script>

<style>

    .post {
        margin-bottom: 1.3em;
    }

    .post--title {
        display: block;
        font-size: 110%;
        line-height: 130%;
        color: #11a;
    }

    .post--tags {
        display: flex;
        flex-direction: row;
        margin: 0;
        padding: 0;
    }

    .post--tags li {
        list-style: none;
        margin: 0;
        padding: 0 .3em 0 0;
    }

    .post--tag {
        color: #a51;
        line-height: 150%;
    }

</style>
