function Drawer({ onClose, onRemove, items = [] }) {
    return (
      <div className="overlay">
        <div className="drawer">
          <h2 className="d-flex justify-between mb-30">
            Корзина <img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" alt="Close" />
          </h2>

          {items.length > 0 ? (
          <div>
            <div className="items">
              {items.map((obj) => (
                <div className="cartItem d-flex align-center mb-20">
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"></div>
                    
  
  export default Drawer;