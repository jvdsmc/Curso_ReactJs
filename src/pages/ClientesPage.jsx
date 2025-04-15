import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
import CardsGridCliente from "../components/CardsGridCliente"; // Importar o novo componente
import Pagination from "../components/Pagination";
import clienteService from "../services/clienteService";

const ClientesPage = () => {
  // Estado para controlar a página atual
  const [currentPage, setCurrentPage] = useState(1);
  const CLIENTES_PER_PAGE = 8;

  // Buscar clientes usando React Query
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["clientes", currentPage],
    queryFn: () => clienteService.getClientes(currentPage, CLIENTES_PER_PAGE),
    keepPreviousData: true,
  });

  // Manipulador para mudança de página
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // Rolar para o topo da página
    window.scrollTo(0, 0);
  };

  // Renderização condicional para estados de carregamento e erro
  if (isLoading) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
        <p className="mt-2">Carregando clientes...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="alert alert-danger" role="alert">
        <i className="bi bi-exclamation-triangle me-2"></i>
        Erro ao carregar clientes: {error.message}
      </div>
    );
  }

  // Extrair dados da resposta
  const { clientes, total, totalPages } = data;

  return (
    <div>
      {/* Cabeçalho com título e botão para adicionar */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Clientes</h1>
        <NavLink to="/clientes/novo" className="btn btn-success">
          <i className="bi bi-plus-circle me-2"></i>
          Adicionar Cliente
        </NavLink>
      </div>

      {/* Informações de paginação */}
      <p>
        <i className="bi bi-info-circle me-2"></i>
        Mostrando {clientes.length} de {total} clientes - Página {currentPage}{" "}
        de {totalPages}
      </p>
      
      {/* Grid de clientes usando o novo componente */}
      <CardsGridCliente clientes={clientes} cols={4} />

      {/* Componente de paginação */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ClientesPage;
