function Card() {
    return (
      <div className="card">
        <div className="favorite">
          <img src="/img/unliked.svg" alt="Unliked"></img>
        </div>
        <img
        width={133}
        height={112}
        src="/img/sneakers/1.jpg"
        alt="Sneakers"
        ></img>
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
          </div>
          <button className="button">
            <img
            width={11}
            height={11}
            src="/img/plus.svg"
            alt="Plus"
            ></img>
        </button>
    </div>
</div>
    );
}