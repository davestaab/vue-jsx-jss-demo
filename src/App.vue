<template>
  <div id="app">
    <div>
      <h1 class="label">Styled Components SFC</h1>
      <styled-component-form-vue></styled-component-form-vue>
      <div class="line">&nbsp;</div>
      <h1 class="label">Styled Components JSX</h1>
      <styled-component-form-jsx></styled-component-form-jsx>
      <div class="line">&nbsp;</div>
    </div>
  </div>
</template>

<script>
import StyledComponentFormVue from "./components/vue/StyledComponentForm";
import StyledComponentFormJsx from "./components/jsx/StyledComponentForm";

export default {
  name: "app",
  components: { StyledComponentFormVue, StyledComponentFormJsx }
};
</script>

<style scoped>
.label {
  text-decoration: underline;
}

.line {
  width: 100%;
  border-bottom: 2px solid green;
}
</style>
