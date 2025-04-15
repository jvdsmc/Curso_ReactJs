import { NavLink } from "react-router-dom";

const CardCliente = ({ id, nome, data_de_nascimento, email, telefone, url_foto_de_perfil }) => {
  // Função para formatar a data de nascimento no formato brasileiro (dd/mm/aaaa)
  const formatDate = (dateString) => {
    if (!dateString) return "Não informado";
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR");
  };

  return (
    <div className="col">
      <div className="card h-100">
        {/* Área da foto de perfil com altura fixa */}
        <div style={{ height: '150px', overflow: 'hidden' }}>
          <img 
            src={url_foto_de_perfil || 'https://via.placeholder.com/300x150?text=Sem+Foto'} 
            className="card-img-top" 
            alt={nome}
            style={{ objectFit: 'cover', height: '100%', width: '100%' }}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/300x150?text=Sem+Foto';
            }}
          />
        </div>
        
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{nome || "Nome não informado"}</h5>
          <p className="card-text">
            <strong>Email:</strong> {email || "Não informado"}<br />
            <strong>Telefone:</strong> {telefone || "Não informado"}<br />
            <strong>Data de Nascimento:</strong> {formatDate(data_de_nascimento)}
          </p>
        </div>
        
        <div className="card-footer">
          <NavLink 
            to={`/clientes/${id}`} 
            className="btn btn-primary w-100"
          >
            <i className="bi bi-eye me-2"></i>
            Ver Detalhes
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CardCliente;