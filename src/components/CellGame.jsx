import { use, useEffect, useState } from "react";
import Upgrades from "./Upgrades";
import Constructions from "./Constructions";

function CellGame() {
  //const dos clicks
  const [atp, setAtp] = useState(0);
  const [atpPerClick, setAtpPerClick] = useState(1);
  const [atpPerSecond, setAtpPerSecond] = useState(0);
  //const dos upgrades
  // upgrade do click 2x v1
  const [upgradeClick2xV1V1, setUpgradeClick2xV1] = useState(false);
  //const das constuçoes
  //ribossomos
  const [countRibos, setCountRibos] = useState(0);
  const [ribosPrice, setRibosPrice] = useState(10);
  const [ribosValue, setRibosValue] = useState(1);
  //mitocondria
  const [countMit, setCountMit] = useState(0);
  const [mitPrice, setMitPrice] = useState(100);
  const [mitValue, setMitValue] = useState(10);
  // rel
  const [countRel, setCountRel] = useState(0);
  const [relPrice, setRelPrice] = useState(1000);
  const [relValue, setRelValue] = useState(25);
  //rer
  const [countRer, setCountRer] = useState(0);
  const [rerPrice, setRerPrice] = useState(2500);
  const [rerValue, setRerValue] = useState(60);

  function handleCellClick() {
    setAtp(atp + atpPerClick);
  }

  function buyRibossomo() {
    if (atp >= ribosPrice) {
      setAtp(atp - ribosPrice);
      setRibosPrice(ribosPrice * 1.1);
      setCountRibos(countRibos + ribosValue);
      setAtpPerSecond(atpPerSecond + ribosValue);
    } else {
      alert("ATP insuficiente!");
    }
  }

  function buyMit() {
    if (atp >= mitPrice) {
      //tirando o valor do total
      setAtp(atp - mitPrice);
      //aumentando o preco da mitocondria
      setMitPrice(mitPrice * 1.1);
      //adicionando uma mitocondria ao player
      setCountMit(countMit + mitValue);
      //aumentando os clicks por segundo
      setAtpPerSecond(atpPerSecond + mitValue);
    } else {
      alert("ATP insuficiente!");
    }
  }

  function buyRel() {
    if (atp >= relPrice) {
      setAtp(atp - relPrice);
      setRelPrice(relPrice * 1.1);
      setCountRel(countRel + relValue);
      setAtpPerSecond(atpPerSecond + relValue);
    }
  }

  function buyRer() {
    if (atp >= rerPrice) {
      setAtp(atp - rerPrice);
      setRerPrice(rerPrice * 1.1);
      setCountRer(countRel + rerValue);
      setAtpPerSecond(atpPerSecond + rerValue);
    }
  }

  function buyUpgradeClick2xV1() {
    const custo = 200;
    if (atp >= custo) {
      setAtp(atp - custo);
      setAtpPerClick(atpPerClick * 2);
      setUpgradeClick2xV1(true);
    } else {
      alert("ATP insuficiente!");
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAtp((currentAtp) => currentAtp + atpPerSecond);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [atpPerSecond]);

  return (
    <div className="game-container">
      <h1>🔬 Cell Clicker 🔬</h1>
      <h2>Energia (ATP): {atp.toFixed(2)}</h2>
      <p>{atpPerSecond.toFixed(2)} ATP por segundo</p>

      <div className="celula">
        <button onClick={handleCellClick}>
          <p>Clique em mim!</p>
        </button>
      </div>
      <hr />
      <Constructions
        atp={atp}
        ribosPrice={ribosPrice}
        buyRibossomo={buyRibossomo}
        ribosValue={ribosValue}
        mitPrice={mitPrice}
        buyMit={buyMit}
        mitValue={mitValue}
        relPrice={relPrice}
        buyRel={buyRel}
        relValue={relValue}
        rerPrice={rerPrice}
        buyRer={buyRer}
        rerValue={rerValue}
      ></Constructions>
      <hr />
      <Upgrades
        atp={atp}
        upgradeClick2xV1={upgradeClick2xV1V1}
        buyUpgradeClick2xV1={buyUpgradeClick2xV1}
      ></Upgrades>
    </div>
  );
}

export default CellGame;
