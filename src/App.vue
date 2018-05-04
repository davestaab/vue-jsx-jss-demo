<template>
  <div id="app">
    <div>
      <h1 class="label">Styled Components SFC</h1>
      <styled-component-form-vue></styled-component-form-vue>
      <div class="line">&nbsp;</div>
      <h1 class="label">Styled Components JSX</h1>
      <styled-component-form-jsx></styled-component-form-jsx>
      <div class="line">&nbsp;</div>
      <h1 class="label">Emotion SFC</h1>
      <emotion-form-vue></emotion-form-vue>
      <div class="line">&nbsp;</div>
      <h1 class="label">Emotion JSX</h1>
      <emotion-form-jsx></emotion-form-jsx>
      <div class="line">&nbsp;</div>
      <h1 class="label">Emotion SFC (without v-model)</h1>
      <emotion-form-without-model-vue></emotion-form-without-model-vue>
      <div class="line">&nbsp;</div>
      <h1 class="label">Emotion JSX (with helper function)</h1>
      <emotion-form-jsx2></emotion-form-jsx2>
      <div class="line">&nbsp;</div>
    </div>
  </div>
</template>

<script>
import StyledComponentFormVue from "./components/vue/StyledComponentForm";
import StyledComponentFormJsx from "./components/jsx/StyledComponentForm";
import EmotionFormVue from "./components/vue/EmotionForm";
import EmotionFormJsx from "./components/jsx/EmotionForm";
import EmotionFormJsx2 from "./components/jsx/EmotionForm2";
import EmotionFormWithoutModelVue from "./components/vue/EmotionForm2";

export default {
  name: "app",
  components: {
    StyledComponentFormVue,
    StyledComponentFormJsx,
    EmotionFormVue,
    EmotionFormJsx,
    EmotionFormJsx2,
    EmotionFormWithoutModelVue
  }
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
