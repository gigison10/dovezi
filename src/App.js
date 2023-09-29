import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Poza la cerece, cecul, garantie</h1>
      <div className="pozele">
        <div className="imageBlock">
          <h2 className="imageHeader">Cerere</h2>
          <img className="image" src={require("./1.jpg")} alt="Image"></img>
        </div>
        <div className="imageBlock">
          <h2 className="imageHeader">Cecul</h2>
          <img
            className="image"
            src={require("./checul.jpg")}
            alt="Image"
          ></img>
        </div>
        <div className="imageBlock">
          <h2 className="imageHeader">Garantia</h2>
          <img className="image" src={require("./gar.jpg")} alt="Image"></img>
        </div>
        <div className="imageBlock">
          <h2 className="imageHeader">Act primire de catre service centru</h2>
          <img
            className="image"
            src={require("./act primire.jpg")}
            alt="Image"
          ></img>
        </div>
        <div className="imageBlock">
          <h2 className="imageHeader">
            Rezultatul investigarii service centru
          </h2>
          <img
            className="image"
            src={require("./rezultat investigare.jpg")}
            alt="Image"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default App;
