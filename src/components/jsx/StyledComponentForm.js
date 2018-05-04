import styled from "vue-styled-components";

export default {
  name: "StyledComponentFormVue",
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
          <FormSubmit nativeOnClick={this.submitForm}>Submit</FormSubmit>
        </FormRow>
      </FormContainer>
    );
  },
  data() {
    return {
      name: null
    };
  },
  methods: {
    submitForm() {
      alert(`Form Submitted: ${this.name}`);
    },
    input(e) {
      this.name = e.target.value;
    }
  }
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
`;

const FormLabel = styled.label`
  flex-basis: 200px;
  text-align: right;
  margin-right: 15px;
`;

const FormWrapper = styled.div`
  flex-grow: 1;
  display: flex-inline;
  align-items: flex-start;
`;

const FormInput = styled("input", { disabled: Boolean })`
  border-radius: 3px;
  background: ${props => (props.disabled ? "grey" : "transparent")};
`;

const FormSubmit = styled.button`
  background: transparent;
  border: 1px solid black;
  color: black;
  border-radius: 3px;
  padding: 3px 10px;
  margin: 20px 100px;
`;
