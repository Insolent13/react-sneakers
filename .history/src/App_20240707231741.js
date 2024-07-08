function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt=""></img>
          <div>
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="">
            <img width={18} height={18} src="/img/cart.svg" alt=""></img>
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt=""></img>
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все кроссовки</h1>
        ....
      </div>
    </div>
  );
}

export default App;
