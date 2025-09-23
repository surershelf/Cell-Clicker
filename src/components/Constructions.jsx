import ConstructionButton from "./ConstructionButton";

function Constructions({ atp, items, onBuy }) {
  return (
    <div className="contrucao">
      <h3>Construções</h3>

      {/* A "guarda" 'items &&' previne erros se a lista de items demorar a carregar */}
      {items &&
        items.map((item) => (
          <ConstructionButton
            key={item.id}
            construction={item} // Esta é a linha que corrige tudo!
            onBuy={onBuy}
            isDisabled={atp < item.price}
          />
        ))}
    </div>
  );
}

export default Constructions;
