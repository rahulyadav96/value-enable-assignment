import styled from "styled-components";
const Forms = styled.form`
  display: flex;
  width: 50%;
  max-width:400px;
  flex-direction: column;
  box-sizing:border-box;
  margin: 10px auto;
  border: 1px solid blue;
  padding: 20px;
  border-radius: 10px;
  & > input {
    
    margin-bottom: 15px;
    padding: 5px;
    border: none;
    border-bottom: 1px solid blue;
    border-radius: 10px;
    outline: none;
    padding: 10px;
  }
  & > input[type="submit"] {
    width: 50%;
    font-weight:600;
    margin: auto;
    background: blue;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    &:hover {
      background: navy;
    }
  }
`;
export const Form = ({ children, onSubmit }) => {
  return (
    <Forms onSubmit={onSubmit} className="formStyle">
      {children}
    </Forms>
  );
};
