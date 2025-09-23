import "../styles/ConstructionButton.css";

function ConstructionButton({ construction, onBuy, isDisabled }) {
  const productionPerSecond =
    construction.value * construction.bonus * construction.legacyBonus;

  return (
    <button
      className={`construction-button ${isDisabled ? "disabled" : ""}`}
      onClick={() => onBuy(construction.id)}
      disabled={isDisabled}
    >
      <img
        src={construction.image}
        alt={construction.name}
        className="construction-image"
      />
      <div className="construction-info">
        <span className="construction-name">{construction.name}</span>
        <span className="construction-price">
          {construction.price.toFixed(0)} ATP
        </span>
      </div>
      <span className="construction-count">{construction.count}</span>

      {/* Este é o Tooltip que aparece no hover */}
      <div className="tooltip">
        <h4>{construction.name}</h4>
        <p>
          Cada {construction.name} produz {productionPerSecond.toFixed(1)} ATP
          por segundo.
        </p>
        <p>Você tem {construction.count} deles.</p>
      </div>
    </button>
  );
}
export default ConstructionButton;
