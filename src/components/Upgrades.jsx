import StoreButton from "./StoreButton";
// A sintaxe com { } se chama "desestruturação", é um atalho.
function Upgrades({ tieredUpgrades, onBuyTieredUpgrades, passiveIncomeStat,clickStat, constructions, atp }) {
  let unlockValue = 0;
  const availableUpgrades = tieredUpgrades.filter((upgrade) => {
    // Condição 1: Se o upgrade já foi comprado, nós o ignoramos (retornando false).
    if (upgrade.purchased) {
      return false;
    }
    // Condição 2: Agora, verificamos o unlockThreshold.
    const targetConstruction = constructions.find((c) => c.id === upgrade.targetId);
    if (targetConstruction) {
      unlockValue = targetConstruction.count;
}

// Se o upgrade mira o PASSIVE_INCOME, usamos o value
    if (upgrade.targetId === "PASSIVE_INCOME") {
      unlockValue = passiveIncomeStat.value; // <- usa o value (ATP/s)
}
    if (upgrade.targetId === "CLICK") {
      unlockValue = clickStat.count;
}

return unlockValue >= upgrade.unlockThreshold;
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
