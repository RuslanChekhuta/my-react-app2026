import { Button } from "../Button";
import "./Header.css";

function Header({
  registerLabel,
  loginLabel,
  registerBtnStyles,
  loginBtnStyles,
  onRegisterClick,
  onLoginClick,
}) {
  const style = {
    color: "blue",
    fontSize: "2rem",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  };

  return (
    <header className="container" style={style}>
      <h1>Заголовок</h1>
      <Button
        label={registerLabel}
        btnStyles={registerBtnStyles}
        onClick={onRegisterClick}
      />
      <Button
        label={loginLabel}
        btnStyles={loginBtnStyles}
        onClick={onLoginClick}
      />
    </header>
  );
}

export default Header;
