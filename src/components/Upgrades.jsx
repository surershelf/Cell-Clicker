import StoreButton from "./StoreButton";
// A sintaxe com { } se chama "desestruturação", é um atalho.
function Upgrades({ tieredUpgrades, onBuyTieredUpgrades, constructions, atp }) {
  const availableUpgrades = tieredUpgrades.filter((upgrade) => {
    // Condição 1: Se o upgrade já foi comprado, nós o ignoramos (retornando false).
    if (upgrade.purchased) {
      return false;
    }
    // Condição 2: Agora, verificamos o unlockThreshold.
    const targetConstruction = constructions.find(
      (c) => c.id === upgrade.targetId
    );
    if (!targetConstruction) {
      return false;
    }
    return targetConstruction.count >= upgrade.unlockThreshold;
  });

  return (
    <div className="upgrade">
      <h3>Upgrades</h3>

      {availableUpgrades.map((upgrade) => (
        <StoreButton
          key={upgrade.id} // Chave especial para o React
          title={upgrade.name}
          description={upgrade.description}
          price={upgrade.price}
          onClick={() => onBuyTieredUpgrades(upgrade.id)} // Passa o ID do upgrade para a função de compra
          disabled={atp < upgrade.price}
        />
      ))}
    </div>
  );
}

export default Upgrades;
