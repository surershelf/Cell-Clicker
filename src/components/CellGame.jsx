import { useEffect, useState } from "react";
import Upgrades from "./Upgrades";
import Constructions from "./Constructions";
import LegacyTree from "./LegacyTree";
import ATPImg from "../assets/assets-clicker/ATP.png";
import citImg from "../assets/assets-clicker/citoplasma-removebg-preview.png";
import dnaImg from "../assets/assets-clicker/dna.png";
import riboImg from "../assets/assets-clicker/ribossomo.png";
import mitImg from "../assets/assets-clicker/mitocondria-removebg-preview.png";
import CGImg from "../assets/assets-clicker/complexo-de-golgi-removebg-preview.png";
import nucImg from "../assets/assets-clicker/Nucleo-removebg-preview.png";
import relImg from "../assets/assets-clicker/rel-removebg-preview.png";
import rerImg from "../assets/assets-clicker/rer__2_-removebg-preview.png";
import lisImg from "../assets/assets-clicker/lisossomo-removebg-preview.png";
import centImg from "../assets/assets-clicker/centriolo.png";
import perImg from "../assets/assets-clicker/peroxissomo.png";
import LegacyButton from "./LegacyButton";

const initialConstructions = [
  {
    id: 1,
    name: "Ribossomo",
    count: 0,
    price: 10,
    value: 1,
    bonus: 1,
    legacyBonus: 1,
    image: riboImg,
  },
  {
    id: 2,
    name: "Mitocôndria",
    count: 0,
    price: 100,
    value: 10,
    bonus: 1,
    legacyBonus: 1,
    image: mitImg,
  },
  {
    id: 8,
    name: "Complexo de Golgi",
    count: 0,
    price: 1000,
    value: 25,
    bonus: 1,
    legacyBonus: 1,
    image: CGImg,
  },
  {
    id: 9,
    name: "Centriolo",
    count: 0,
    price: 1000,
    value: 25,
    bonus: 1,
    legacyBonus: 1,
    image: centImg,
  },
  {
    id: 3,
    name: "REL",
    count: 0,
    price: 1000,
    value: 25,
    bonus: 1,
    legacyBonus: 1,
    image: relImg,
  },
  {
    id: 4,
    name: "RER",
    count: 0,
    price: 2500,
    value: 60,
    bonus: 1,
    legacyBonus: 1,
    image: rerImg,
  },
  {
    id: 5,
    name: "Lisossomo",
    count: 0,
    price: 5300,
    value: 110,
    bonus: 1,
    legacyBonus: 1,
    image: lisImg,
  },
  {
    id: 6,
    name: "Peroxissomos",
    count: 0,
    price: 7000,
    value: 200,
    bonus: 1,
    legacyBonus: 1,
    image: perImg,
  },
  {
    id: 7,
    name: "Núcleo",
    count: 0,
    price: 10000,
    value: 500,
    bonus: 1,
    legacyBonus: 1,
    image: nucImg,
  },
];
const initialTieredUpgrades = [
  // ==================================================
  // Upgrades para PowerClick (targetId: "CLICK")
  // ==================================================
  {
    id: 1201,
    name: "Ligação Enzimática Acelerada",
    description: "Dobra o poder de CLICK",
    price: 300,
    targetId: "CLICK",
    unlockThreshold: 100,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 1202,
    name: "Canal Iônico Ativo",
    description: "Dobra o poder de CLICK",
    price: 3000,
    targetId: "CLICK",
    unlockThreshold: 1000,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 1203,
    name: "Gatilho Neuroquímico",
    description: "Dobra o poder de CLICK",
    price: 30000,
    targetId: "CLICK",
    unlockThreshold: 10000,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 1204,
    name: "Ativação de Sinalização Celular",
    description: "Dobra o poder de CLICK",
    price: 300000,
    targetId: "CLICK",
    unlockThreshold: 100000,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 1205,
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
    id: 1301,
    name: "Cadeia Respiratória Aprimorada",
    description: "Dobra tudo!!!",
    price: 500000,
    targetId: "PASSIVE_INCOME",
    unlockThreshold: 50000,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 1302,
    name: "Síntese de ATP Intensificada",
    description: "Dobra tudo!!!",
    price: 2500000,
    targetId: "PASSIVE_INCOME",
    unlockThreshold: 250000,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 1303,
    name: "Transportadores de Elétrons Otimizados",
    description: "Dobra tudo!!!",
    price: 100000000,
    targetId: "PASSIVE_INCOME",
    unlockThreshold: 1000000,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 1304,
    name: "Cooperação Organelar",
    description: "Dobra tudo!!!",
    price: 10000000000,
    targetId: "PASSIVE_INCOME",
    unlockThreshold: 10000000000,
    bonusMultiplier: 2,
    purchased: false,
  },
  {
    id: 1305,
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
const possibleBonus = [
  {
    id: 7000,
    name: "Frenesi de Clicks",
    description: "Aumenta o poder de click em 7X",
    type: "TEMPORARY_BONUS",
    targetId: "CLICK",
    multiplier: 7,
    duration: 13000,
  },
  {
    id: 7001,
    name: "Frenesi de ATP",
    description: "Aumenta o valor dos ATPs passivos em 7x",
    type: "TEMPORARY_BONUS",
    targetId: "PASSIVE_INCOME",
    multiplier: 7,
    duration: 60000,
  },
  {
    id: 7003,
    name: "ATP Bônus",
    description: "Dá um bônus de ATP",
    type: "INSTANT_ATP_BONUS",
    targetId: "ATP",
    gain: 0.5,
  },
];

function CellGame() {
  const [currentView, setCurrentView] = useState("game");
  const [gameStats, setGameStats] = useState([
    { id: "ATP", totAmount: 0, value: 0, legacyBonus: 1 },
    { id: "CLICK", count: 0, value: 1, bonus: 1, legacyBonus: 1 },
    { id: "PASSIVE_INCOME", value: 0, bonus: 1, legacyBonus: 1 },
    { id: "LEGACY_POINTS", totAmount: 0, value: 0 },
  ]);

  const atpStat = gameStats.find((stat) => stat.id === "ATP");
  const clickStat = gameStats.find((stat) => stat.id === "CLICK");
  const passiveIncomeStat = gameStats.find(
    (stat) => stat.id === "PASSIVE_INCOME"
  );
  const legacyStat = gameStats.find((stat) => stat.id === "LEGACY_POINTS");
  const legacyPointsBaseCost = 100; // 1 bilhão
  const nextLegacyPoinsCost =
    Math.pow(legacyStat.totAmount + 1, 3) * legacyPointsBaseCost;

  //upgrades de tiers
  const [tieredUpgrades, setTieredUpgrades] = useState(initialTieredUpgrades);

  //const das constuçoes
  const [constructions, setConstructions] = useState(initialConstructions);

  const [legacyUpgrades, setLegacyUpgrades] = useState([
    {
      id: 2001,
      name: "Upgrade teste 1",
      description: "Aumenta em 10% a produção de ATP",
      price: 1,
      targetId: "PASSIVE_INCOME",
      bonusMultiplier: 1.1,
      requires: null,
      purchased: false,
    },
    {
      id: 2002,
      name: "Upgrade teste 2",
      description: "Aumenta em 10% a produção de ATP",
      price: 1,
      targetId: "PASSIVE_INCOME",
      bonusMultiplier: 1.1,
      requires: 2001,
      purchased: false,
    },
  ]);

  const [bonusCell, setBonusCell] = useState({
    isVisible: false,

    position: { top: "50%", left: "50%" },

    stats: {
      timesAppeared: 0,
      timesClicked: 0,
    },
  });

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
  function handleBonusCellClick() {
    setBonusCell((prev) => ({
      ...prev,
      isVisible: false,
      stats: { ...prev.stats, clicks: prev.stats.clicks + 1 },
    }));
    const randomIndex = Math.floor(Math.random() * possibleBonus.length);

    const chosenBonus = possibleBonus[randomIndex];

    console.log("Bônus sorteado: ", chosenBonus.name);

    switch (chosenBonus.type) {
      case "TEMPORARY_BONUS": {
        setGameStats((prevStats) =>
          prevStats.map((stat) =>
            stat.id === chosenBonus.targetId // Usa o targetId para encontrar o stat certo
              ? { ...stat, bonus: stat.bonus * chosenBonus.multiplier }
              : stat
          )
        );
        setTimeout(() => {
          setGameStats((prevStats) =>
            prevStats.map((stat) =>
              stat.id === chosenBonus.targetId
                ? { ...stat, bonus: stat.bonus / chosenBonus.multiplier }
                : stat
            )
          );
          console.log(`Bônus "${chosenBonus.name}" expirou!`);
        }, chosenBonus.duration);
        break;
      }
      case "INSTANT_ATP_BONUS": {
        const atpBonus = atpStat.value * chosenBonus.gain;
        gainAtp(atpBonus);
        break;
      }
      default:
        console.log("Tipo de bônus desconhecido: ", chosenBonus.type);
    }
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

  function spawnBonusCell() {
    const top = Math.floor(Math.random() * 90);
    const left = Math.floor(Math.random() * 90);
    setBonusCell((prevState) => ({
      ...prevState,
      isVisible: true,
      position: {
        top: `${top}%`,
        left: `${left}%`,
      },
    }));
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

  //use effect do cellBonus
  useEffect(() => {
    const intervalId = setInterval(() => {
      spawnBonusCell();
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      {currentView === "game" ? (
        <div className="game-layout">
          {/* --- NOVA COLUNA DA ESQUERDA (APENAS STATS) --- */}
          <div className="stats-column">
            <h2>ATP TOTAIS</h2>
            <p className="atp-counter">{atpStat.value.toFixed(0)}</p>
            <p>
              {(
                passiveIncomeStat.value *
                passiveIncomeStat.bonus *
                passiveIncomeStat.legacyBonus
              ).toFixed(1)}{" "}
              ATP por segundo
            </p>
            <div className="clicker-area">
              <button onClick={handleCellClick} className="cell-button">
                <img
                  src={ATPImg}
                  alt="Molécula de ATP"
                  className="cell-image"
                />
                <span className="click-value">
                  +{clickStat.value * clickStat.bonus * clickStat.legacyBonus}
                </span>
              </button>
            </div>
          </div>

          {/* --- COLUNA DO MEIO (CLICKER E INFORMAÇÕES) --- */}

          <div className="main-column">
            {/* Espaço para as mensagens aleatórias */}
            <div className="flavor-text-box">
              <p>Mensagens aleatórias aparecerão aqui...</p>
            </div>
            <div className="legacy-section">
              <LegacyButton
                atp={atpStat.totAmount}
                costNextPoint={nextLegacyPoinsCost}
                actualPoints={legacyStat.value}
                onLegacyReset={handleLegacyReset}
              />
            </div>

            <div className="info-box">
              <h4>Informações da Célula</h4>
              <p>
                Aqui vamos adicionar o contexto sobre as construções e upgrades
                que você comprar.
              </p>
            </div>
          </div>

          {/* --- COLUNA DA DIREITA (LOJA - Continua igual) --- */}
          <div className="store-column">
            <Upgrades
              atp={atpStat.value}
              constructions={constructions}
              tieredUpgrades={tieredUpgrades}
              onBuyTieredUpgrades={buyTieredUpgrades}
              passiveIncomeStat={passiveIncomeStat}
              clickStat={clickStat}
            />
            <Constructions
              atp={atpStat.value}
              items={constructions}
              onBuy={buyConstruction}
            />
          </div>
          {/* --- Célula Bónus (continua a flutuar sobre tudo) --- */}
          {bonusCell.isVisible && (
            <button
              onClick={handleBonusCellClick}
              className="cell-bonus-button" // Renomeei para não confundir com o cell-button
              style={{
                position: "absolute",
                top: bonusCell.position.top,
                left: bonusCell.position.left,
              }}
            >
              <img
                src={dnaImg}
                alt="Imagem do DNA"
                className="cell-bonus-image"
              />
            </button>
          )}
        </div>
      ) : (
        <LegacyTree
          onReturnClick={handleReturnToGame}
          legacyStat={legacyStat}
          legacyUpgrades={legacyUpgrades}
          buyLegacyUpgrade={buyLegacyUpgrade}
        />
      )}
    </>
  );
}

export default CellGame;
