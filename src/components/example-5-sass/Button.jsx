import "./button.scss";

const Button = ({ buttonText }) => {
  // Using the class name from our Sass file:
  return (
    <div className="container">
      <button className="sassy-button">{buttonText}</button>
      <p>Hello World</p>
    </div>
  );
};

export default Button;
