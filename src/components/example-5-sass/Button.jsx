import "./button.sass";

const Button = ({ buttonText }) => {
  // Using the class name from our Sass file:
  return <button className="sassy-button">{buttonText}</button>;
};

export default Button;
