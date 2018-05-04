<template>
  <form-container>
    <form-row>
      <form-label>Name:</form-label>
      <form-wrapper>
        <form-input type="text" v-model="name" />
      </form-wrapper>
    </form-row>
    <form-row>
      <form-submit @click="submitForm">Submit</form-submit>
    </form-row>
    <form-row>
      <error-text>{{error}}</error-text>
    </form-row>
  </form-container>
</template>

<script>
import styled from "vue-emotion";

export default {
  name: "EmotionFormVue",
  components: {
    FormContainer: styled("div")`
      display: flex;
      flex-direction: column;
      padding: 20px;
    `,
    FormRow: styled("div")`
      display: flex;
      align-items: center;
    `,
    FormLabel: styled("label")`
      flex-basis: 200px;
      text-align: right;
      margin-right: 15px;
    `,
    FormWrapper: styled("div")`
      flex-grow: 1;
      display: flex-inline;
      align-items: flex-start;
    `,
    FormInput: styled("input", { disabled: Boolean })`
      border-radius: 3px;
      background: ${props => (props.disabled ? "grey" : "transparent")};
    `,
    FormSubmit: styled("a")`
      background: transparent;
      border: 1px solid black;
      color: black;
      border-radius: 3px;
      padding: 3px 10px;
      margin: 20px 100px;
      cursor: pointer;
    `,
    ErrorText: styled("span")`
      color: red;
    `
  },
  data() {
    return {
      name: null,
      error: null
    };
  },
  methods: {
    submitForm() {
      this.error = null;
      alert(`Form Submitted: ${this.name}`);
    }
  },
  errorCaptured(err, vm, info) {
    this.error = `${err.stack}\n\nfound in ${info} of component`;
  }
};
</script>
