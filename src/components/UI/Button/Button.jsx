import styled from "styled-components";

const Button = (props) => {
  return (
    <Btn {...props} className={props.className}>
      {props.children}
    </Btn>
  );
};
const Btn = styled.button`
  color: orangered;
  padding: 4px 10px;
  border: 1px solid orangered;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  &:hover {
    color: #fff;
    background: orangered;
  }
`;
export default Button;
