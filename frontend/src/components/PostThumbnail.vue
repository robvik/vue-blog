<template>
	<router-link :to="{ name: 'BlogPost', params: { id: post.id } }">
		<div class="blog-card" >
			<img class="blog-card-img" src="https://user-images.githubusercontent.com/16360374/37567282-e1932872-2a81-11e8-807b-efc5a997f2f1.jpg" />
			<div class="blog-card-text-overlay">
				<h2 class="blog-card-text-overlay-h2">{{ post.title }}</h2>
				<p class="blog-card-text-overlay-p">{{ post.content }}</p>
			</div>
		</div>
	</router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'PostThumbnail',
	props: ['post']
})
</script>