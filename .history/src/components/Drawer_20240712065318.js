function Drawer({ onClose, onRemove, items = [] }) {
    return (
      <div className="overlay">
        <div className="drawer">
          <h2 className="d-flex justify-between mb-30">
            Корзина <img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" alt="Close" />
          </h2>

          
  
  export default Drawer;