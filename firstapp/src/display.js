import "./App.css";
export default function Display(props) {
console.log(props);
  return (
    <div className="App">
      {props.data.map((item, i) => 
        <div className="imgCard">
          <img src={item.images.img1.link} alt="img" className="imgInCard" />
        </div>
      )}
    </div>
  );
}
