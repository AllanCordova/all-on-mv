import ShowMovie from "./ShowMovie";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

const App = () => {
  return (
    <div>
      <header className="container text-center">
        <div className="row mt-5">
          <div className="col-12">
            <h2 className="fs-3">Data Movie</h2>
          </div>
        </div>
      </header>
      <ShowMovie />
    </div>
  );
};

export default App;
