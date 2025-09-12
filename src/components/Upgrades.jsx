import StoreButton from "./StoreButton";
// A sintaxe com { } se chama "desestruturação", é um atalho.
function Upgrades({ upgradeClick2xV1, buyUpgradeClick2xV1, atp }) {
  return (
    <div className="upgrade">
      <h3>Upgrades</h3>
      {!upgradeClick2xV1 && (
        <StoreButton
          title="Produzir mais energia!"
          description="Dobra o valor do click"
          price={200}
          onClick={buyUpgradeClick2xV1}
          disabled={atp < 200}
        />
      )}
    </div>
  );
}

export default Upgrades;
