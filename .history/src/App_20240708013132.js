function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt=""></img>
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" alt=""></img>
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt=""></img>
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1>Все кроссовки</h1>

        <div className="card">
          <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers"></img>
          <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
          <div className="d-flex justify-between">
            <div className="d-flex">
              <span></span>
              <b></b>
            </div>
            <button>
              <img width={11} height={11} src="/img/plus.svg" alt="Add to cart"></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
