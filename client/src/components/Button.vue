<template >
  <button
    :type="type"
    class="
      bg-teal-500
      w-full
      text-white
      p-2
      rounded-lg
      my-2
      hover:bg-teal-600 hover:shadow-md
      transition
    "
  >
    <span class="font-semibold text-sm">{{ label }}</span>
    
  </button>
</template>
<script>
export default {
    name: "Button",
    props: {
        label: {
            type: String,
            default: 'label'
        },
        placeholder: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'button'
        },
        name: {
            type: String,
            default: ''
        },
        showLabel: {
            type: Boolean,
            default: true
        }
    }
};
</script>
<style >
</style>