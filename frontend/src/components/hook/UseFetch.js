import { useState } from "react";

const API_URL = import.meta.env.VITE_BASE_SERVER_URL; // URL de API en variable de entorno

// ejemplo: useFetch("/activities" )

export const useFetch = (endpoint) => {
  const complete_url = `${API_URL}${endpoint}`;

  const getAll = async () => {
    try {
      const res = await fetch(complete_url);
      if (!res.ok) {
        throw new Error("Error al obtener libros.");
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Algo pasó con getAll: ", error);
    }
  };

  const getById = async (id) => {
    try {
      const res = await fetch(`${complete_url}/${id}`);

      if (!res.ok) {
        throw new Error("Error al obtener libro específico.");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Algo pasó con getById: ", error);
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

      if (!res.ok) {
        throw new Error("Error al hacer un POST.");
      }

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
      }

      const dataResponse = await res.json();
      return dataResponse;
    } catch (error) {
      console.error("Error al hacer DELETE: ", error);
    }
  };

  return { getAll, getById, post, put, del };
};
