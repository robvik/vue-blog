<template>
  <div class="wrapper">
    
    <Navbar class="nav-container" />

    <div class="main-container">

      <h3 class="text-2xl font-Lato text-gray-700 font-bold mb-6 text-center lg:text-left">Home</h3>
      
      <div class="flex flex-col items-center lg:items-start mb-5">
        <Searchfield v-model="searchQuery" />
        <TagCloud @clickTag="filterByTag" :tags="allTags" />
      </div>

      <p class="text-xl font-bold text-gray-500 text-center lg:text-left mb-5">Showing {{ filteredPosts.length }} out of the total {{ posts.length }} blog posts.</p>

      <div class="post-grid"> 
          <div v-for="post in filteredPosts" :key="post.id">
            <PostThumbnail :post="post" />
          </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
// Vue
import { computed, defineComponent, ref, watch } from 'vue'

// Store
import { useStore } from '@/store';
import { PostsActionTypes } from '@/store/modules/posts/action-types';

// Models
import { Post } from '@/models/post.model'

// Components
import Navbar from '@/components/Navbar.vue'
import PostThumbnail from '@/components/PostThumbnail.vue'
import Searchfield from '@/components/Searchfield.vue'
import TagCloud from '@/components/TagCloud.vue'

export default defineComponent({
  name: 'Home',
  components: { Navbar, PostThumbnail, Searchfield, TagCloud },
  async setup() {
    const store = useStore();
    const posts = ref<Post[]>([])
    const filteredPosts = ref<Post[]>([])
    const selectedTag = ref<String>('')
    const searchQuery = ref<String>('')

    /**
     * Watcher: Posts
     * Updates filtered posts
     */
    watch(posts, () => {
      filteredPosts.value = posts.value
    })
    
    /**
     * Watcher: Search query and tag selection
     * Updates filtered posts
     */
    watch([searchQuery, selectedTag], (newValues: any, prevValues: any) => {
      if (newValues[0] !== prevValues[0]) { // Search bar
        filteredPosts.value = posts.value?.filter(post => post.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
      } else if (newValues[1] !== prevValues[1]) { // Tags
        filteredPosts.value = newValues[1] == -1 ? posts.value : posts.value?.filter(post => post.tags.includes(selectedTag.value))
      }
    })

    try {
      posts.value = await store.dispatch(PostsActionTypes.FETCH_POSTS);
    } catch (error) {
      console.error('fetchPosts', error);
    }

    /**
     * Computed method fetches all (unique) tags
     */
    const allTags = computed(() => {
      const set = new Set()
      posts.value?.forEach(item => item.tags.forEach(tag => set.add(tag)))
      return Array.from(set).sort()
    })

    /**
     * Method sets/reacts to selected tags
     * -1 returns when unselecting a tag, which should show all posts
     */
    const filterByTag = (tag: any) => {
      selectedTag.value = selectedTag.value === tag ? -1 : tag
    }

    return { allTags, filterByTag, filteredPosts, posts, searchQuery }
  }
})
</script>

<style lang="postcss">
.wrapper {
  @apply flex flex-col lg:flex-row lg:h-screen
}

.nav-container {
  @apply lg:w-1/6 w-screen
}

.main-container {
  @apply w-5/6 p-10 ml-16 lg:m-0
}

.post-grid {
  @apply grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 1xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5 gap-12
}
</style>
