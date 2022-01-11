<template>
  <router-view name="default" v-slot="{ Component }">
      <Suspense>
        <template #default>
          <component :is="Component"/>
        </template>
        <template #fallback>
          <div class="top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
              <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-700"></div>
          </div>
        </template>
      </Suspense>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent ({
  name: 'App',
  components: { }
})
</script>
