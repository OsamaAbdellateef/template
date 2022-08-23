import "./loader.style.scss";

const Loader = () => {
  return (
    <div className="loader flex-column d-flex justify-content-center align-items-center">
      <h2 className="fst-italic" style={{ direction: "ltr" }}>
        loading...
      </h2>
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
