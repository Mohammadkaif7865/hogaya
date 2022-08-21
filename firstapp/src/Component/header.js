import "../App.css";

function Header(props) {
  return (
    <div className="App">
      <h1>This is Header component {props.num}</h1>
    </div>
  );
}

export default Header;
