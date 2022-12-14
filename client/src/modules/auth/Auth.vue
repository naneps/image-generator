<template>
  <main class="h-screen flex items-center justify-center bg-teal-500 ">
    <form
      class="
        bg-white
        flex
        rounded-lg
        w-full
        m-20
        lg:m-0 lg:w-3/5
        font-latoRegular
        shadow-lg
        transition ease-in-out duration-300
      "
    >
      <div class="flex-1 text-gray-700 p-10 lg:p-20 justify-center items-center">
        <h1 class="text-3xl pb-2 font-latoBold">Let's get started</h1>
        <p class="text-lg text-gray-500">
          Describe Your Imagine In This Engine ⚙️
        </p>
        <div class="mt-6">
          <Input
            label="Username"
            placeholder="Enter your email"
            type="email"
            name="email"
            prefixIcon="envelope"
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            :type="showPassword ? 'text' : 'password'"
            name="email"
            prefixIcon="lock"
            :suffixIcon="showPassword ? 'eye-slash' : 'eye'"
            @clickSuffix="showPassword = !showPassword"
          />
          
        </div>
        <Button label="Submit" />
      </div>
      <div class="relative flex-1">
        <img
          class="object-cover h-full w-full rounded-tr-lg rounded-br-lg saturate-50 hover:saturate-150 transition ease-in-out duration-300"
          src="../../assets/bg-anime.png"
          alt=""
        />
      </div>
    </form>
  </main>
</template>
<script>
import Button from "../../components/Button.vue";
import Input from "../../components/Input.vue";

export default {
  components: { Input, Button  },
  name: "Auth",
  data() {
    return {
      showPassword: false,
    };
  },
};
</script>