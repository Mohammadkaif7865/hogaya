import "../App.css";
export default function Display(props) {
  return (
    <div className="App">
      {props.data.map((item, i) => (
        <div className="imgCard" key={i}>
          <img src={item.images.img1.link} alt="img" className="imgInCard" />
          <div className="dis">{item.name}</div>
          <div className="rating">
            Rating: {item.rating} <i className="bi bi-star-fill colorGold"></i>
          </div>
          <div className="price">Price : ₹ {item.cost}</div>
        </div>
      ))}
      <h1>This is display</h1>
    </div>
  );
}
