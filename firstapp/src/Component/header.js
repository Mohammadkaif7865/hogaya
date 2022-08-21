function Header(props) {
  return (
    <div style={{ backgroundColor: "green", color: "white" , textAlign: "center" }}>
      <h1>This is Header component {props.message}</h1>
    </div>
  );
}

export default Header;
