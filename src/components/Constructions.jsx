import StoreButton from "./StoreButton";

function Constructions({
  atp,
  ribosPrice,
  buyRibossomo,
  ribosValue,
  mitPrice,
  buyMit,
  mitValue,
  relPrice,
  buyRel,
  relValue,
  rerPrice,
  buyRer,
  rerValue,
}) {
  return (
    <div className="contrucao">
      <h3>Construções</h3>
      <StoreButton
        title="Produzir Ribossomo"
        description={`+${ribosValue} ATP por segundo`}
        price={ribosPrice}
        onClick={buyRibossomo}
        disabled={atp < ribosPrice}
      />
      <StoreButton
        title="Produzir Mitocôndria"
        description={`+${mitValue} ATP por segundo`}
        price={mitPrice}
        onClick={buyMit}
        disabled={atp < mitPrice}
      />
      <StoreButton
        title="Produzir Retículo Endoplasmatico Liso"
        description={`+${relValue} ATP por segundo`}
        price={relPrice}
        onClick={buyRel}
        disabled={atp < relPrice}
      />
      <StoreButton
        title="Produzir Retículo Endoplasmático Rugoso"
        description={`+${rerValue} ATP por segundo`}
        price={rerPrice}
        onClick={buyRer}
        disabled={atp < rerPrice}
      />
    </div>
  );
}

export default Constructions;
