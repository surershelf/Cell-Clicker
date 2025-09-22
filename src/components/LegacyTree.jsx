import StoreButton from "./StoreButton";

function LegacyTree({
  onReturnClick,
  legacyStat,
  legacyUpgrades,
  buyLegacyUpgrade,
}) {
  const isPurchased = (upgradeId) => {
    if (upgradeId === null) return true;
    const found = legacyUpgrades.find((upg) => upg.id === upgradeId);
    return found ? found.purchased : false;
  };

  return (
    <div>
      <h1>Legacy Tree</h1>
      <p>
        Aqui voce gasta seus pontos de legacy que são {legacyStat.value} ponstos
      </p>
      <div className="legacy-upgrades-container">
        {legacyUpgrades.map((upgrade) => {
          const isDisabled =
            upgrade.purchased ||
            legacyStat.value < upgrade.price ||
            !isPurchased(upgrade.requires);
          return (
            <StoreButton
              key={upgrade.id}
              title={upgrade.title}
              description={upgrade.description}
              price={upgrade.price}
              onClick={() => buyLegacyUpgrade(upgrade.id)}
              disabled={isDisabled}
              purchased={upgrade.purchased}
            />
          );
        })}
      </div>

      <button onClick={onReturnClick}>
        <p>Voltar ao jogo</p>
      </button>
    </div>
  );
}

export default LegacyTree;
