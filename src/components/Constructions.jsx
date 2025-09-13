import StoreButton from "./StoreButton";

function Constructions({ atp, items, onBuy }) {
  return (
    <div className="contrucao">
      <h3>Construções</h3>
      {/* Ele percorre cada "item" no array "items" e cria um StoreItem para ele */}
      {items.map((item) => (
        <StoreButton
          key={item.id}
          title={`Produzir ${item.name}`}
          description={`+${item.value} ATP por segundo`}
          count={item.count}
          price={item.price}
          onClick={() => onBuy(item.id)} // Quando clicado, chama a função onBuy com o id do item
          disabled={atp < item.price}
        />
      ))}
    </div>
  );
}

export default Constructions;
