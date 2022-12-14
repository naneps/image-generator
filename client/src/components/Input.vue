<template >
  <div class="pb-4">
    <label
      v-show="showLabel"
      for="example"
      class="block pb-1 text-sm font-latoBold"
      >{{ label }}</label
    >
    <div class="relative flex  text-gray-600 focus-within:text-gray-400 transition-all duration-300">
      <!-- section for prefix icon -->
      <span v-if="prefixIcon" class="m-2 items-center">
        <font-awesome-icon :icon="prefixIcon" />
      </span>
      <span class="absolute inset-y-0 right-0 flex items-center pr-2 transition-all duration-300">
        <!-- section for suffix icon -->
        <font-awesome-icon v-if="suffixIcon" :icon="suffixIcon" @click="$emit('clickSuffix')"/>
      </span>
      <input
        :name="name"
        class="
          border-2 border-gray-400
          rounded-md
          p-1
          focus:border-teal-400 focus:outline-none
          w-full
          text-sm
          transition
          ease-in-out
          duration-300
        "
        :type="type"
        :placeholder="placeholder"
        prefix="icon"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "Input",
  props: {
    label: {
      type: String,
      default: "label",
    },
    prefixIcon: {
      type: String,
      default: "",
    },
    suffixIcon: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      default: "",
    },
    showLabel: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
<style >
</style>