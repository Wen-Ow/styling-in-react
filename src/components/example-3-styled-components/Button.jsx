import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => (props.bgColor ? props.bgColor : "white")};
  border-radius: 8px;
  color: ${(props) => props.color};
  padding: 15px 50px;
  font-size: 24pt;
  width: 300px;
`;

const Button = ({ buttonText, color, bgColor }) => {
  //color = "white"
  return <StyledButton color={color} bgColor={bgColor}>{buttonText}</StyledButton>;
};

export default Button;
