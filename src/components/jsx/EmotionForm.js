import styled from "vue-emotion";

export default {
  name: "EmotionFormJsx",
  render() {
    return (
      <FormContainer>
        <FormRow>
          <FormLabel>Name:</FormLabel>
          <FormWrapper>
            <FormInput type="text" value={this.name} onInput={this.input} />
          </FormWrapper>
        </FormRow>
        <FormRow>
          <FormSubmit onClick={this.submitForm}>Submit</FormSubmit>
        </FormRow>
        <FormRow>
          <ErrorText>{this.error}</ErrorText>
        </FormRow>
      </FormContainer>
    );
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
    },
    input(e) {
      this.name = e.target.value;
    }
  },
  errorCaptured(err, vm, info) {
    this.error = `${err.stack}\n\nfound in ${info} of component`;
  }
};

const FormContainer = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const FormRow = styled("div")`
  display: flex;
  align-items: center;
`;

const FormLabel = styled("label")`
  flex-basis: 200px;
  text-align: right;
  margin-right: 15px;
`;

const FormWrapper = styled("div")`
  flex-grow: 1;
  display: flex-inline;
  align-items: flex-start;
`;

const FormInput = styled("input", { disabled: Boolean })`
  border-radius: 3px;
  background: ${props => (props.disabled ? "grey" : "transparent")};
`;

const FormSubmit = styled("a")`
  background: transparent;
  border: 1px solid black;
  color: black;
  border-radius: 3px;
  padding: 3px 10px;
  margin: 20px 100px;
  cursor: pointer;
`;

const ErrorText = styled("span")`
  color: red;
`;
