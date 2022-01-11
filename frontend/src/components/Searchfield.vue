<template>
    <div class="flex mb-2">
        <div class="flex border-2 mb-6">
            <input type="text" v-model="model" class="px-4 py-2 w-80" placeholder="Search...">
            <button class="flex items-center justify-center px-4 border-l">
                <svg class="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
    name: 'Searchfield',
    props: ['modelValue'],
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        const model = computed({
            get: () => props.modelValue,
            set: (newValue) => emit('update:modelValue', newValue)
        })

        return { model }        
    }
})
</script>