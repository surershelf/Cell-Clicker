import { useEffect, useState } from "react";
import Upgrades from "./Upgrades";
import Constructions from "./Constructions";
import LegacyTree from "./LegacyTree";

const initialConstructions = [
  {
    id: 1,
    name: "Ribossomo",
    count: 0,
    price: 10,
    value: 1,
    bonus: 1,
    legacyBonus: 1,
  },
  {
    id: 2,
    name: "Mitocôndria",
    count: 0,
    price: 100,
    value: 10,
    bonus: 1,
    legacyBonus: 1,
  },
  {
    id: 3,
    name: "REL",
    count: 0,
    price: 1000,
    value: 25,
    bonus: 1,
    legacyBonus: 1,
  },
  {
    id: 4,
    name: "RER",
    count: 0,
    price: 2500,
    value: 60,
    bonus: 1,
    legacyBonus: 1,
  },
  {
    id: 5,
    name: "Lisossomo",
    count: 0,
    price: 5300,
    value: 110,
    bonus: 1,
    legacyBonus: 1,
  },
  {
    id: 6,
    name: "Peroxissomos",
    count: 0,
    price: 7000,
    value: 200,
    bonus: 1,
    legacyBonus: 1,
  },
  {
    id: 7,
    name: "Núcleo",
    count: 0,
    price: 10000,
    value: 500,
    bonus: 1,
    legacyBonus: 1,
  },
];
const initialTieredUpgrades = [
  // ==================================================
  // Upgrades para PowerClick (targetId: "CLICK")
  // ==================================================
  {
    id: 801,
    name: "Ligação Enzimática Acelerada",
    description: "Dobra o poder de CLICK",
    price: 300,
    targetId: "CLICK",
    unlockThreshold: 100,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 802,
    name: "Canal Iônico Ativo",
    description: "Dobra o poder de CLICK",
    price: 3000,
    targetId: "CLICK",
    unlockThreshold: 1000,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 803,
    name: "Gatilho Neuroquímico",
    description: "Dobra o poder de CLICK",
    price: 30000,
    targetId: "CLICK",
    unlockThreshold: 10000,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 804,
    name: "Ativação de Sinalização Celular",
    description: "Dobra o poder de CLICK",
    price: 300000,
    targetId: "CLICK",
    unlockThreshold: 100000,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 805,
    name: "Energia de Fosfato Reforçada",
    description: "Dobra o poder de CLICK",
    price: 3000000,
    targetId: "CLICK",
    unlockThreshold: 1000000,
    bonusMultiplier: 2,
    purchased: false,
  },
  // ==================================================
  // Upgrades para RENDA PASSIVA (targetId: "PASSIVE_INCOME")
  // ==================================================
  {
    id: 901,
    name: "Cadeia Respiratória Aprimorada",
    description: "Dobra tudo!!!",
    price: 500000,
    targetId: "PASSIVE_INCOME",
    unlockThreshold: 50000,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 902,
    name: "Síntese de ATP Intensificada",
    description: "Dobra tudo!!!",
    price: 2500000,
    targetId: "PASSIVE_INCOME",
    unlockThreshold: 250000,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 903,
    name: "Transportadores de Elétrons Otimizados",
    description: "Dobra tudo!!!",
    price: 100000000,
    targetId: "PASSIVE_INCOME",
    unlockThreshold: 1000000,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 904,
    name: "Cooperação Organelar",
    description: "Dobra tudo!!!",
    price: 10000000000,
    targetId: "PASSIVE_INCOME",
    unlockThreshold: 10000000000,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 905,
    name: "Eficiência Bioenergética Máxima",
    description: "Dobra tudo!!!",
    price: 1000000000000,
    targetId: "PASSIVE_INCOME",
    unlockThreshold: 1000000000000,
    bonusMultiplier: 2,
    purchased: false,
  },

  // ==================================================
  // Upgrades para Ribossomos (targetId: 1)
  // ==================================================
  {
    id: 101,
    name: "RNA Transportador Eficiente",
    description: "Dobra a produção de ATP dos Ribossomos.",
    price: 125,
    targetId: 1,
    unlockThreshold: 1,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 102,
    name: "Síntese Acelerada",
    description: "Dobra a produção de ATP dos Ribossomos.",
    price: 725,
    targetId: 1,
    unlockThreshold: 15,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 103,
    name: "Cadeia Polipeptídica Otimizada",
    description: "Dobra a produção de ATP dos Ribossomos.",
    price: 6250,
    targetId: 1,
    unlockThreshold: 25,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 104,
    name: "Subunidades Maiores",
    description: "Dobra a produção de ATP dos Ribossomos.",
    price: 12500,
    targetId: 1,
    unlockThreshold: 50,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 105,
    name: "Polirribossomos",
    description: "Dobra a produção de ATP dos Ribossomos.",
    price: 50000,
    targetId: 1,
    unlockThreshold: 100,
    bonusMultiplier: 2,
    purchased: false,
  },

  // ==================================================
  // Upgrades para Mitocôndrias (targetId: 2)
  // ==================================================
  {
    id: 201,
    name: "Ciclo de Krebs Acelerado",
    description: "Dobra a produção de ATP das Mitocôndrias.",
    price: 1200,
    targetId: 2,
    unlockThreshold: 1,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 202,
    name: "Fosforilação Oxidativa Amplificada",
    description: "Dobra a produção de ATP das Mitocôndrias.",
    price: 7500,
    targetId: 2,
    unlockThreshold: 15,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 203,
    name: "Cristas Mitocondriais Ampliadas",
    description: "Dobra a produção de ATP das Mitocôndrias.",
    price: 25000,
    targetId: 2,
    unlockThreshold: 25,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 204,
    name: "Transporte de Elétrons Otimizado",
    description: "Dobra a produção de ATP das Mitocôndrias.",
    price: 100000,
    targetId: 2,
    unlockThreshold: 50,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 205,
    name: "Matriz Mitocondrial Energizada",
    description: "Dobra a produção de ATP das Mitocôndrias.",
    price: 500000,
    targetId: 2,
    unlockThreshold: 100,
    bonusMultiplier: 2,
    purchased: false,
  },

  // ==================================================
  // Upgrades para REL (targetId: 3)
  // ==================================================
  {
    id: 301,
    name: "Síntese de Fosfolipídios Aumentada",
    description: "Dobra a produção de ATP do REL.",
    price: 12000,
    targetId: 3,
    unlockThreshold: 1,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 302,
    name: "Enzimas de Detoxificação",
    description: "Dobra a produção de ATP do REL.",
    price: 50000,
    targetId: 3,
    unlockThreshold: 15,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 303,
    name: "Armazenamento de Íons de Cálcio",
    description: "Dobra a produção de ATP do REL.",
    price: 250000,
    targetId: 3,
    unlockThreshold: 25,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 304,
    name: "Metabolismo de Carboidratos",
    description: "Dobra a produção de ATP do REL.",
    price: 1000000,
    targetId: 3,
    unlockThreshold: 50,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 305,
    name: "Lúmen Expansivo",
    description: "Dobra a produção de ATP do REL.",
    price: 5000000,
    targetId: 3,
    unlockThreshold: 100,
    bonusMultiplier: 2,
    purchased: false,
  },

  // ==================================================
  // Upgrades para RER (targetId: 4)
  // ==================================================
  {
    id: 401,
    name: "Glicosilação de Proteínas",
    description: "Dobra a produção de ATP do RER.",
    price: 25000,
    targetId: 4,
    unlockThreshold: 1,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 402,
    name: "Lúmen Expandido",
    description: "Dobra a produção de ATP do RER.",
    price: 125000,
    targetId: 4,
    unlockThreshold: 15,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 403,
    name: "Sinalização Peptídica",
    description: "Dobra a produção de ATP do RER.",
    price: 600000,
    targetId: 4,
    unlockThreshold: 25,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 404,
    name: "Transporte Vesicular Acelerado",
    description: "Dobra a produção de ATP do RER.",
    price: 2.5e6,
    targetId: 4,
    unlockThreshold: 50,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 405,
    name: "Controle de Qualidade Proteico",
    description: "Dobra a produção de ATP do RER.",
    price: 10e6,
    targetId: 4,
    unlockThreshold: 100,
    bonusMultiplier: 2,
    purchased: false,
  },

  // ==================================================
  // Upgrades para Lisossomos (targetId: 5)
  // ==================================================
  {
    id: 501,
    name: "Hidrolases Ácidas Potencializadas",
    description: "Dobra a produção de ATP dos Lisossomos.",
    price: 50000,
    targetId: 5,
    unlockThreshold: 1,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 502,
    name: "Bomba de Prótons Reforçada",
    description: "Dobra a produção de ATP dos Lisossomos.",
    price: 250000,
    targetId: 5,
    unlockThreshold: 15,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 503,
    name: "Fagocitose Eficiente",
    description: "Dobra a produção de ATP dos Lisossomos.",
    price: 1.2e6,
    targetId: 5,
    unlockThreshold: 25,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 504,
    name: "Membrana Resistente",
    description: "Dobra a produção de ATP dos Lisossomos.",
    price: 6e6,
    targetId: 5,
    unlockThreshold: 50,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 505,
    name: "Autofagia Otimizada",
    description: "Dobra a produção de ATP dos Lisossomos.",
    price: 25e6,
    targetId: 5,
    unlockThreshold: 100,
    bonusMultiplier: 2,
    purchased: false,
  },

  // ==================================================
  // Upgrades para Peroxissomos (targetId: 6)
  // ==================================================
  {
    id: 601,
    name: "Oxidação Beta-Aumentada",
    description: "Dobra a produção de ATP dos Peroxissomos.",
    price: 75000,
    targetId: 6,
    unlockThreshold: 1,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 602,
    name: "Atividade da Catalase",
    description: "Dobra a produção de ATP dos Peroxissomos.",
    price: 375000,
    targetId: 6,
    unlockThreshold: 15,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 603,
    name: "Síntese de Plasmalogênios",
    description: "Dobra a produção de ATP dos Peroxissomos.",
    price: 1.8e6,
    targetId: 6,
    unlockThreshold: 25,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 604,
    name: "Metabolismo de Peróxido",
    description: "Dobra a produção de ATP dos Peroxissomos.",
    price: 9e6,
    targetId: 6,
    unlockThreshold: 50,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 605,
    name: "Importação de Proteínas Peroxissomais",
    description: "Dobra a produção de ATP dos Peroxissomos.",
    price: 45e6,
    targetId: 6,
    unlockThreshold: 100,
    bonusMultiplier: 2,
    purchased: false,
  },

  // ==================================================
  // Upgrades para Núcleo (targetId: 7)
  // ==================================================
  {
    id: 701,
    name: "Poros Nucleares Otimizados",
    description: "Dobra a produção de ATP do Núcleo.",
    price: 100000,
    targetId: 7,
    unlockThreshold: 1,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 702,
    name: "Expressão Gênica Acelerada",
    description: "Dobra a produção de ATP do Núcleo.",
    price: 500000,
    targetId: 7,
    unlockThreshold: 15,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 703,
    name: "Replicação de DNA Eficiente",
    description: "Dobra a produção de ATP do Núcleo.",
    price: 2.5e6,
    targetId: 7,
    unlockThreshold: 25,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 704,
    name: "Estrutura da Cromatina",
    description: "Dobra a produção de ATP do Núcleo.",
    price: 12.5e6,
    targetId: 7,
    unlockThreshold: 50,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 705,
    name: "Nucléolo Superativo",
    description: "Dobra a produção de ATP do Núcleo.",
    price: 60e6,
    targetId: 7,
    unlockThreshold: 100,
    bonusMultiplier: 2,
    purchased: false,
  },
];

function CellGame() {
  const [currentView, setCurrentView] = useState("game");
  const [gameStats, setGameStats] = useState([
    { id: "ATP", totAmount: 0, value: 0, legacyBonus: 1 },
    { id: "CLICK", count: 0, value: 500000000, bonus: 1, legacyBonus: 1 },
    { id: "PASSIVE_INCOME", value: 0, bonus: 1, legacyBonus: 1 },
    { id: "LEGACY_POINTS", totAmount: 0, value: 0 },
  ]);

  const atpStat = gameStats.find((stat) => stat.id === "ATP");
  const clickStat = gameStats.find((stat) => stat.id === "CLICK");
  const passiveIncomeStat = gameStats.find(
    (stat) => stat.id === "PASSIVE_INCOME"
  );
  const legacyStat = gameStats.find((stat) => stat.id === "LEGACY_POINTS");
  const legacyPointsBaseCost = 1e9; // 1 bilhão
  const nextLegacyPoinsCost =
    Math.pow(legacyStat.totAmount + 1, 3) * legacyPointsBaseCost;

  //upgrades de tiers
  const [tieredUpgrades, setTieredUpgrades] = useState(initialTieredUpgrades);

  //const das constuçoes
  const [constructions, setConstructions] = useState(initialConstructions);
  const [legacyUpgrades, setLegacyUpgrades] = useState([
    {
      id: 2001,
      name: "Mão de Midas Genética",
      description: "Aumenta em 10% a produção de ATP",
      price: 1,
      targetId: "PASSIVE_INCOME",
      bonusMultiplier: 0.1,
      purchased: false,
    },
  ]);

  function gainAtp(amount) {
    setGameStats((currentGameStats) =>
      currentGameStats.map((stat) => {
        if (stat.id === "ATP") {
          return {
            ...stat,
            value: stat.value + amount,
            totAmount: stat.totAmount + amount,
          };
        }
        return stat;
      })
    );
  }

  function spendAtp(amount) {
    setGameStats((currentGameStats) =>
      currentGameStats.map((stat) => {
        if (stat.id === "ATP") {
          return {
            ...stat,
            value: stat.value - amount,
          };
        }
        return stat;
      })
    );
  }

  function checkForLegacyPoints() {
    if (atpStat.totAmount >= nextLegacyPoinsCost) {
      setGameStats((currentGameStats) =>
        currentGameStats.map((stat) => {
          if (stat.id === "LEGACY_POINTS") {
            return {
              ...stat,
              value: stat.value + 1,
              totAmount: stat.totAmount + 1,
            };
          }
          return stat;
        })
      );
    }
  }

  function spendLegacyPoints(amount) {
    setGameStats((currentGameStats) =>
      currentGameStats.map((stat) => {
        if (stat.id === "LEGACY_POINTS") {
          return { ...stat, value: stat.value - amount };
        }
        return stat;
      })
    );
  }

  function handleLegacyReset() {
    const userConfirmed = window.confirm(
      "Você tem certeza que quer resetar para ganhar pontos de Legado?"
    );

    if (userConfirmed) {
      setCurrentView("legacy");
    }
  }
  function handleReturnToGame() {
    setConstructions(initialConstructions);

    setTieredUpgrades(initialTieredUpgrades);

    setGameStats((currentGameStats) =>
      currentGameStats.map((stat) => {
        switch (stat.id) {
          case "ATP":
            return { ...stat, value: 0 };
          case "CLICK":
            return { ...stat, count: 0, value: 1, bonus: 1 };
          case "PASSIVE_INCOME":
            return { ...stat, value: 0 };
          case "LEGACY_POINTS":
            return stat;
          default:
            return stat;
        }
      })
    );
    setCurrentView("game");
  }
  function handleCellClick() {
    const clickPower =
      clickStat.value * clickStat.bonus * clickStat.legacyBonus;
    gainAtp(clickPower);
  }

  function buyConstruction(id) {
    const construction = constructions.find((c) => c.id === id);
    if (atpStat.value >= construction.price) {
      spendAtp(construction.price);

      const newConstrucions = constructions.map((c) => {
        if (c.id === id) {
          // ...nós retornamos um NOVO objeto. A sintaxe "...c" copia todas as
          // propriedades antigas (id, name, value, etc.) e nós apenas
          // sobrescrevemos as que queremos mudar: o count e o price.
          return { ...c, count: c.count + 1, price: c.price * 1.1 };
        }
        return c;
      });
      setConstructions(newConstrucions);
    }
  }

  function buyTieredUpgrades(id) {
    const upgrade = tieredUpgrades.find((t) => t.id === id);

    if (atpStat.value >= upgrade.price) {
      spendAtp(upgrade.price);

      // marca upgrade como comprado
      const newUpgrade = tieredUpgrades.map((t) =>
        t.id === id ? { ...t, purchased: true } : t
      );

      if (upgrade.targetId === "CLICK") {
        const newClickStats = gameStats.map((stat) =>
          stat.id === "CLICK"
            ? {
                ...stat,
                bonus: stat.bonus * upgrade.bonusMultiplier,
              }
            : stat
        );
        setGameStats(newClickStats);
      } else if (upgrade.targetId === "PASSIVE_INCOME") {
        const newGameStats = gameStats.map((stat) =>
          stat.id === "PASSIVE_INCOME"
            ? {
                ...stat,
                bonus: stat.bonus * upgrade.bonusMultiplier,
              }
            : stat
        );
        setGameStats(newGameStats);
      } else {
        const newConstrucions = constructions.map((c) =>
          c.id === upgrade.targetId
            ? { ...c, bonus: c.bonus * upgrade.bonusMultiplier }
            : c
        );
        setConstructions(newConstrucions);
      }

      setTieredUpgrades(newUpgrade);
    }
  }

  // Dentro do seu CellGame.jsx

  function buyLegacyUpgrade(id) {
    const legacyUpgrade = legacyUpgrades.find((l) => l.id === id);

    if (legacyStat.value >= legacyUpgrade.price) {
      const newLegacyUpgrades = legacyUpgrades.map((l) =>
        l.id === id ? { ...l, purchased: true } : l
      );
      setLegacyUpgrades(newLegacyUpgrades);

      if (
        legacyUpgrade.targetId === "CLICK" ||
        legacyUpgrade.targetId === "PASSIVE_INCOME"
      ) {
        // 5A. Se afeta um stat global, fazemos uma ÚNICA atualização no gameStats
        // para gastar os pontos E aplicar o bônus permanente.
        setGameStats((currentGameStats) =>
          currentGameStats.map((stat) => {
            if (stat.id === "LEGACY_POINTS") {
              return { ...stat, value: stat.value - legacyUpgrade.price };
            }
            if (stat.id === legacyUpgrade.targetId) {
              return {
                ...stat,
                legacyBonus: stat.legacyBonus * legacyUpgrade.bonusMultiplier,
              };
            }
            return stat;
          })
        );
      } else {
        // 5B. Se afeta uma construção, primeiro gastamos os pontos.
        spendLegacyPoints(legacyUpgrade.price);
        // E depois atualizamos o estado das construções para aplicar o bônus permanente.
        const newConstructions = constructions.map((c) =>
          c.id === legacyUpgrade.targetId
            ? {
                ...c,
                legacyBonus: c.legacyBonus * legacyUpgrade.bonusMultiplier,
              }
            : c
        );
        setConstructions(newConstructions);
      }
    }
  }

  useEffect(() => {
    checkForLegacyPoints();
  }, [atpStat.totAmount]);

  useEffect(() => {
    const baseIncome = constructions.reduce((total, c) => {
      return total + c.count * c.value * c.bonus * c.legacyBonus;
    }, 0);
    setGameStats((prevGameStats) =>
      prevGameStats.map((stat) => {
        if (stat.id === "PASSIVE_INCOME") {
          return { ...stat, value: baseIncome };
        }
        return stat;
      })
    );
  }, [constructions]);

  useEffect(() => {
    const passiveIncomePerSecond =
      passiveIncomeStat.value *
      passiveIncomeStat.bonus *
      passiveIncomeStat.legacyBonus;
    // Inicia um intervalo que vai executar o código a cada 1000 milissegundos (1 segundo).
    const intervalId = setInterval(() => {
      if (passiveIncomePerSecond > 0) {
        gainAtp(passiveIncomePerSecond);
      }
    }, 1000);

    // Esta é a "função de limpeza". Ela roda se o componente sumir da tela,
    // garantindo que o timer seja destruído e não continue rodando para sempre.
    return () => clearInterval(intervalId);

    // Este useEffect "observa" a variável atpPerSecond.
    // Se o valor dela mudar, o timer antigo é destruído e um novo é criado com a velocidade atualizada.
  }, [
    passiveIncomeStat.value,
    passiveIncomeStat.bonus,
    passiveIncomeStat.legacyBonus,
  ]);

  return (
    <>
      {currentView === "game" ? (
        <div className="game-container">
          <h1>🔬 Cell Clicker 🔬</h1>
          <h2>Energia (ATP): {atpStat.value.toFixed(0)}</h2>
          <h4>Total de ATP de todo jogo: {atpStat.totAmount.toFixed(0)}</h4>
          <p>
            {(
              passiveIncomeStat.value *
              passiveIncomeStat.bonus *
              passiveIncomeStat.legacyBonus
            ).toFixed(1)}{" "}
            ATP por segundo
          </p>

          <div>
            <hr />
            <button onClick={handleLegacyReset}>
              <h2>Legado</h2>
              <p>
                Reinicie o jogo para ganhar {legacyStat.value} pontos de legacy
              </p>
              <p>Custo de 1 ponto de legacy {nextLegacyPoinsCost}</p>
            </button>
          </div>
          <div className="celula">
            <button onClick={handleCellClick}>
              <p>Clique em mim!</p>
              <span>
                +{clickStat.value * clickStat.bonus * clickStat.legacyBonus}
              </span>
            </button>
          </div>
          <hr />
          <Constructions
            atp={atpStat.value}
            items={constructions}
            onBuy={buyConstruction}
            gameStats={gameStats}
          />
          <hr />
          <Upgrades
            atp={atpStat.value}
            constructions={constructions}
            tieredUpgrades={tieredUpgrades}
            onBuyTieredUpgrades={buyTieredUpgrades}
            passiveIncomeStat={passiveIncomeStat}
            clickStat={clickStat}
          />
        </div>
      ) : (
        <LegacyTree
          onReturnClick={handleReturnToGame}
          legacyStat={legacyStat}
        />
      )}
    </>
  );
}

export default CellGame;
