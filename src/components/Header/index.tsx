import "./styles.scss";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <img
        src="./assets/logo.png"
        alt="Zignaly logo"
        className="header__logo"
      />
    </header>
  );
};
