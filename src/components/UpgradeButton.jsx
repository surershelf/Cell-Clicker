import React from "react";
import "../styles/UpgradeButton.css";

function UpgradeButton({ upgrade, onBuy, isDisabled }) {
  return (
    <button
      className={`upgrade-button ${isDisabled ? "disabled" : ""}`}
      onClick={() => onBuy(upgrade.id)}
      disabled={isDisabled}
    >
      <span className="upgrade-icon">✨</span>

      {/* tool tip */}
      <div className="tooltip">
        <h4>{upgrade.name}</h4>
        <p>{upgrade.description}</p>
        <p className="tooltip-price">Custo: {upgrade.price.toFixed(0)} ATP</p>
      </div>
    </button>
  );
}

export default UpgradeButton;
