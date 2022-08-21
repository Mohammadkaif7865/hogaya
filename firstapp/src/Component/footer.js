import "../App.css";

function Footer(props) {
  return (
    <div style={{ backgroundColor:"green", color:"white" , textAlign:"center"}} >
      <h1>This is Footer component {props.message}</h1>
    </div>
  );
}

export default Footer;
