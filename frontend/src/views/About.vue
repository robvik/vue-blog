<template>
  <div class="wrapper">
    
    <Navbar class="nav-container" />

    <div class="main-container">

      <div>

        <!-- Header -->
        <h3 class="text-2xl font-Lato text-gray-700 font-bold mb-6 text-center lg:text-left">About</h3> 
        
        <hr class="my-4"/>

        <!-- Date created -->
        <div class="text-center lg:text-left">
          <span class="text-lg text-gray-700 pr-4">
            <svg class="inline-block w-6 h-6 mr-2 -mt-2 fill-current text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            2021-01-01 12:00
          </span>
        </div>

        <!-- Body -->
        <p class="text-lg text-justify text-gray-800 my-8">About text...</p>

      </div>
  
      <!-- Go back button -->
      <div class="text-center lg:text-left">
        <button class="button-green" @click="router.go(-1)">Go back</button>
      </div>

    </div>

  </div>
</template>

<script lang="ts">
// Vue
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

// Components
import Navbar from '@/components/Navbar.vue'

export default defineComponent({
    name: 'About',
    components: { Navbar },
    setup() {
      const router = useRouter()
      return { router }
    }
})
</script>