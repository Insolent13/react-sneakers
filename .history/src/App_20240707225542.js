function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" alt=""></img>
          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p>магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <img width={18} height={18} src="/img/cart.svg" alt=""></img>
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/"
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
