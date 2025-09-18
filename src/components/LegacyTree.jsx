function LegacyTree({ onReturnClick, legacyStat }) {
  return (
    <div>
      <h1>Legacy Tree</h1>
      <p>
        Aqui voce gasta seus pontos de legacy que são {legacyStat.value} ponstos
      </p>

      <button onClick={onReturnClick}>
        <p>Voltar ao jogo</p>
      </button>
    </div>
  );
}

export default LegacyTree;
