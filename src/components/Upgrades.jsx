import UpgradeButton from "./UpgradeButton";
// A sintaxe com { } se chama "desestruturação", é um atalho.
function Upgrades({
  tieredUpgrades,
  onBuyTieredUpgrades,
  passiveIncomeStat,
  clickStat,
  constructions,
  atp,
}) {
  const availableUpgrades = tieredUpgrades.filter((upgrade) => {
    // Condição 1: Se o upgrade já foi comprado, nós o ignoramos (retornando false).
    if (upgrade.purchased) {
      return false;
    }
    // Condição 2: Agora, verificamos o unlockThreshold.
    if (typeof upgrade.id === "number") {
      const targetConstruction = constructions.find(
        (c) => c.id === upgrade.targetId
      );
      return (
        targetConstruction &&
        targetConstruction.count >= upgrade.unlockThreshold
      );
    }

    // Se o upgrade mira o PASSIVE_INCOME, usamos o value
    if (upgrade.targetId === "PASSIVE_INCOME") {
      return atp >= upgrade.unlockThreshold;
    }
    if (upgrade.targetId === "CLICK") {
      return clickStat.count >= upgrade.unlockThreshold;
    }

    return false;
  });

  return (
    <div className="upgrades-container">
      <h3>Upgrades</h3>
      <div className="upgrades-grid">
        {availableUpgrades.map((upgrade) => (
          <UpgradeButton
            key={upgrade.id}
            upgrade={upgrade}
            onBuy={onBuyTieredUpgrades}
            isDisabled={atp < upgrade.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Upgrades;
