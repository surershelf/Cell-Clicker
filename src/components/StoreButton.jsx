function StoreButton({ title, description, count, price, onClick, disabled }) {
  return (
    // A prop 'disabled' no botão do HTML desabilita o clique e muda a aparência.
    <button onClick={onClick} disabled={disabled}>
      <p>
        <strong>{title}</strong>
      </p>
      <p>{description}</p>
      <p>{count}</p>
      <p>Custo: {price.toFixed(2)} ATP</p>
    </button>
  );
}

export default StoreButton;
