<template>
  <div class="wrapper">
    
    <Navbar class="nav-container" />

    <div class="main-container">

      <div v-if="post">

        <!-- Header -->
        <h3 class="text-2xl font-Lato text-gray-700 font-bold mb-6 text-center lg:text-left">Test {{ post.title }}</h3>   
        
        <hr class="my-4"/>

        <!-- Date created -->
        <div class="text-center lg:text-left">
          <span class="text-lg text-gray-700 pr-4">
            <svg class="inline-block w-6 h-6 mr-2 -mt-2 fill-current text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            {{ post.createdat }}
          </span>
        </div>

        <!-- Tags -->
        <div class="flex flex-wrap lg:flex-nowrap justify-between lg:justify-start text-center lg:text-left my-6">
          <span class="tag-small" v-for="tag in post.tags" :key="tag">
            {{ tag }}
          </span>
        </div>

        <!-- Image -->
        <img class="my-6 lg:w-2/6" v-if="'https://s3.amazonaws.com/coursesity-blog/2020/03/hero.png'" v-bind:src="'https://s3.amazonaws.com/coursesity-blog/2020/03/hero.png'" :alt="post.title">

        <!-- Body -->
        <p class="my-8 text-lg text-gray-800 text-justify">{{ post.content }}</p>

      </div>
  
      <!-- Go back button -->
      <div v-if="post || error" class="text-center lg:text-left">
        <button class="button-green" @click="router.go(-1)">Go back</button>
      </div>

    </div>

  </div>
</template>

<script lang="ts">
// Vue
import { defineComponent, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// Store
import { useStore } from '@/store';
import { PostsActionTypes } from '@/store/modules/posts/action-types';

// Models
import { Post } from '@/models/post.model'

// Components
import Navbar from '@/components/Navbar.vue'

export default defineComponent({
    name: 'BlogPost',
    components: { Navbar },
    async setup() {
      const store = useStore();
      const route: any = useRoute()
      const router: any = useRouter()
      const post = ref<Post>()
      const error = ref<String>('')

      try {
        post.value = await store.dispatch(PostsActionTypes.FETCH_POST, { id: route.params.id });
      } catch (err: any) {
        error.value = err
      }

      return { post, error, router }
    }
})
</script>