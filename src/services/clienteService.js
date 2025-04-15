// clienteService.js
import supabase from './supabase'; // Importar o cliente já configurado

const clienteService = {
  getClientes: async (page, limit) => {
    const offset = (page - 1) * limit;

    const { data, error, count } = await supabase
      .from("clientes")
      .select("*", { count: "exact" })
      .range(offset, offset + limit - 1);

    if (error) throw new Error(error.message);

    return {
      clientes: data,
      total: count,
      totalPages: Math.ceil(count / limit),
    };
  },
};

export default clienteService;
