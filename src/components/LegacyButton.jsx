import React from "react";
import "../styles/LegacyButon.css";

function LegacyButton({ atp, costNextPoint, actualPoints, onLegacyReset }) {
  const progress = Math.min((atp / costNextPoint) * 100, 100);

  return (
    <button className="legacy-button" onClick={onLegacyReset}>
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <span className="button-text">LEGACY</span>
      <div className="tooltip">
        <h4>Próximo Ponto de Legado</h4>
        <p>
          Progresso: {atp.toFixed(0)} / {costNextPoint.toFixed(0)} ATP
        </p>
        <p>Você tem {actualPoints} pontos de legado</p>
        <p className="tooltip-action">Clique para reiniciar!</p>
      </div>
    </button>
  );
}

export default LegacyButton;
