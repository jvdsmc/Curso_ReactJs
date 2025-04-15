import CardCliente from "./CardCliente";

const CardsGridCliente = ({ title, clientes, cols = 4 }) => {
  const colClass = `row-cols-1 row-cols-md-${Math.max(1, Math.floor(cols / 2))} row-cols-lg-${cols}`;
  
  // Verifica se há clientes para exibir
  if (!clientes || clientes.length === 0) {
    return (
      <div className="alert alert-info" role="alert">
        Nenhum cliente encontrado.
      </div>
    );
  }

  return (
    <section className="mb-4">
      {title && (
        <>
          <h2>{title}</h2>
          <hr />
        </>
      )}
      <div className={`row ${colClass} g-3`}>
        {clientes.map((cliente) => (
          <CardCliente
            key={cliente.id}
            id={cliente.id}
            nome={cliente.nome}
            data_de_nascimento={cliente.data_de_nascimento}
            email={cliente.email}
            telefone={cliente.telefone}
            url_foto_de_perfil={cliente.url_foto_de_perfil}
          />
        ))}
      </div>
    </section>
  );
};

export default CardsGridCliente;