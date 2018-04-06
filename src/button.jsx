const Button = (props) => (
  <button className={`button ${props.red ? 'button--red' : ''}`} onClick={props.action}>
  {props.children}
  </button>
);
export default Button;