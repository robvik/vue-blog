<template>
    <div class="flex max-w-sm flex-wrap lg:flex-nowrap justify-between">
        <span v-for="(tag, i) in tags" :key="i" class="tag" :class="{ 'tag-active': i === activeItem }" @click="[clickTag($event), selectedTag(i)]">{{ tag }}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'

export default defineComponent({
    name: 'TagCloud',
    props: ['tags'],
    setup(props, { emit }) {
        let activeItem = ref(null);
        
        const clickTag = (event: any) => {
            emit('clickTag', event.target.innerHTML)
        }

        const selectedTag = (i: any) => {
            activeItem.value = activeItem.value === i ? null : i
        }

        return { clickTag, selectedTag, activeItem }        
    }
})
</script>