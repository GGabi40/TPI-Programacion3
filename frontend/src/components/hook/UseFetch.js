import { useState } from "react";

const API_URL = import.meta.env.VITE_BASE_SERVER_URL; // URL de API en variable de entorno

export const useFetch = (endpoint) => {
  const complete_url = `${API_URL}${endpoint}`;
  const [isLoading, setIsLoading] = useState(true); 
  // Error 500

  const getAll = async () => {
    try {
      const res = await fetch(complete_url);

      if (!res.ok) {
        if (res.status === 404) {
          // No hay clubes, retorno array vacío para evitar error
          return [];
        }
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Algo pasó con getAll: ", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    }
  };

  const getById = async (id, token = null) => {
    try {
      const res = await fetch(`${complete_url}/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
      });

      if (!res.ok) {
        throw new Error("Error al obtener dato específico.");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Algo pasó con getById: ", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  //                 objeto
  const post = async (data, token = null) => {
    try {
      const res = await fetch(complete_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify(data),
      });

      //if (!res.ok) {
      //  throw new Error("Error al hacer un POST.");
      //}

      const dataResponse = await res.json();
      return dataResponse;
    } catch (error) {
      console.error("Error al hacer POST: ", error);
    }
  };

  //                objeto, id
  const put = async (data, id, token = null) => {
    try {
      const res = await fetch(`${complete_url}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Error al hacer un PUT.");
      }

      const dataResponse = await res.json();
      return dataResponse;
    } catch (error) {
      console.error("Error al hacer PUT: ", error);
    }
  };

  const del = async (id, token = null) => {
    try {
      const res = await fetch(`${complete_url}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
      });

      if (!res.ok) {
        throw new Error("Error al hacer un DELETE.");
      }

      if (res.status === 204) {
        return { success: true };
      } else {
        return { success: false };
      }
    } catch (error) {
      console.error("Error al hacer DELETE: ", error);
    }
  };

  return { getAll, getById, post, put, del, isLoading };
};
