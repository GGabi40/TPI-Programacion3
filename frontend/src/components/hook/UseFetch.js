import { useState } from "react";

const API_URL = import.meta.env.VITE_BASE_SERVER_URL // URL de API en variable de entorno

// ejemplo: useFetch("/activities", "GET", token, )
//                         "/activities"
export const useFetch = async ({ endpoint, method, token, body }) => {
    try {
        //          localhost:3000/activities
        const res = await fetch(`${API_URL}${endpoint}`, {
            method,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        
    }
};