<template>
  <div>
    <label v-if="label">{{ label }} </label>
    <br>
    <input 
        type="text" 
        :value="modelValue" 
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
    >
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: [String, Boolean],
    default: false,
  },
  modelValue: {
    type: String,
    default: '',
  },
})
</script>

<style scoped>

</style>