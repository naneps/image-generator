<template>
  <main class="bg-teal-500 w-screen">
    <div
      class="
        h-screen</main>
        flex flex-col
        items-center
        justify-center
        mx-auto
        content-center
      "
    >
      <Textarea v-model="form.description"></Textarea>
      <select v-model="size">
        <option v-for="size in sizes" :key="size.value" :value="size.value">
          {{ size.text }}
        </option>
      </select>
      {{ form }}
      <div
        class="
          my-2
          border-2
          self-center
          rounded-lg
          overflow-clip
          shadow-lg
          hover:shadow-none
          transition-all
          ease-in-out
          duration-300
          hover:translate-y-2
        "
      >
        <!-- make skleton  -->

        <img :src="defaultImg" />
      </div>
      <div class="my-2">
        <button
          class="
            bg-blue-500
            hover:bg-blue-700
            text-white
            font-bold
            py-2
            px-4
            rounded
          "
          @click="generateImage"
        >
          Generate
        </button>
      </div>
    </div>
  </main>
</template>
<script>
import Auth from "./modules/auth/Auth.vue";
import defaultImg from "../src/assets/bg-anime.png";
import axios from "axios";
import Textarea from "./components/Textarea.vue";
export default {
  components: { Auth, Textarea },
  data() {
    return {
      defaultImg: defaultImg,
      form: {
        description: "",
      },
      isLoading: false,
      size: "small",
      sizes: [
        { text: "Small", value: "small" },
        { text: "Medium", value: "medium" },
        { text: "Large", value: "large" },
      ],
    };
  },
  computed: {
    sizeStyle() {
      return {
        height:
          this.size === "small"
            ? "256px"
            : this.size === "medium"
            ? "512px"
            : "1024px",
        width:
          this.size === "small"
            ? "256px"
            : this.size === "medium"
            ? "512px"
            : "1024px",
      };
    },
  },
  methods: {
    async generateImage() {
      this.isLoading = true;
      try {
        const url = "http://localhost:5000/openai/generate";
        const headers = {
          "Content-Type": "application/json",
        };
        const data = {
          prompt: this.form.description,
          size: this.size,
        };
        const response = await axios.post(url, data, { headers });
        this.defaultImg = response.data.data;
        if (response.status === 200) {
          this.isLoading = false;
        }
      } catch (error) {
        console.error(error);
        this.isLoading = false;
      }
      // console.log(await response.json());
    },
  },
};
</script>
<style >
.resize-y-0 {
  resize: vertical;
  min-height: 0;
  overflow-y: hidden;
}

.resize-x-full {
  resize: horizontal;
  overflow-x: hidden;
}
</style>