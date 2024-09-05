import React from 'react';

// URL base del backend desde las variables de entorno
const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export const POSTEndpoint = async ({ URL, Data, TokenPost = null }) => {
    let responseReturn = null;
    try {
        const headerss = {
            'Content-Type': 'application/json',
        };

        // Agrega el Authorization header solo si TokenPost está presente
        if (TokenPost) {
            headerss['Authorization'] = `Bearer ${TokenPost}`;
        }

        const response = await fetch(`${BASE_URL}/${URL}`, { // Usa BASE_URL
            method: "POST",
            headers: headerss,
            body: JSON.stringify(Data)
        });

        if (response.ok) {
            responseReturn = await response.json();
        } else {
            responseReturn = await response.json();
        }
    } catch (error) {
        responseReturn = { error: "Ocurrió un error durante la solicitud" };
    }

    return responseReturn;
};

export const GETEndpoint = async ({ URL, TokenGet }) => {
    let responseReturn = null;
    try {
        const response = await fetch(`${BASE_URL}/${URL}`, { // Usa BASE_URL
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TokenGet}`,
            },
        });

        const data = await response.json();
        if (response.ok) {
            responseReturn = data;
        } else {
            responseReturn = data;
        }
    } catch (error) {
        responseReturn = { error: "Ocurrió un error durante la solicitud" };
    }

    return responseReturn;
};

export const UPDATEEndpoint = async ({ URL, Data, TokenPost = null }) => {
    let responseReturn = null;
    try {
        const headerss = {
            'Content-Type': 'application/json',
        };

        // Agrega el Authorization header solo si TokenPost está presente
        if (TokenPost) {
            headerss['Authorization'] = `Bearer ${TokenPost}`;
        }

        const response = await fetch(`${BASE_URL}/${URL}`, { // Usa BASE_URL
            method: "PATCH",
            headers: headerss,
            body: JSON.stringify(Data)
        });

        if (response.ok) {
            responseReturn = await response.json();
        } else {
            responseReturn = await response.json();
        }
    } catch (error) {
        responseReturn = { error: "Ocurrió un error durante la solicitud" };
    }

    return responseReturn;
};

export const DELETEEndpoint = async ({ URL, TokenDelete = null }) => {
    let responseReturn = null;
    try {
        const headerss = {
            'Content-Type': 'application/json',
        };

        // Agrega el Authorization header solo si TokenDelete está presente
        if (TokenDelete) {
            headerss['Authorization'] = `Bearer ${TokenDelete}`;
        }

        const response = await fetch(`${BASE_URL}/${URL}`, { // Usa BASE_URL
            method: "DELETE",
            headers: headerss,
        });

        if (response.ok) {
            responseReturn = await response.json();
        } else {
            responseReturn = await response.json();
        }
    } catch (error) {
        responseReturn = { error: "Ocurrió un error durante la solicitud" };
    }

    return responseReturn;
};

export const PUTEndpoint = async ({ URL, Data, TokenPut = null }) => {
    let responseReturn = null;
    try {
        const headerss = {
            'Content-Type': 'application/json',
        };

        // Agrega el Authorization header solo si TokenPut está presente
        if (TokenPut) {
            headerss['Authorization'] = `Bearer ${TokenPut}`;
        }

        const response = await fetch(`${BASE_URL}/${URL}`, { // Usa BASE_URL
            method: "PUT",
            headers: headerss,
            body: JSON.stringify(Data)
        });

        if (response.ok) {
            responseReturn = await response.json();
        } else {
            responseReturn = await response.json();
        }
    } catch (error) {
        responseReturn = { error: "Ocurrió un error durante la solicitud" };
    }

    return responseReturn;
};
