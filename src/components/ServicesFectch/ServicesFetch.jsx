import React from 'react';

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

        const response = await fetch(`http://localhost:3000/${URL}`, {
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
        const response = await fetch(`http://localhost:3000/${URL}`, {
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

        const response = await fetch(`http://localhost:3000/${URL}`, {
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

        const response = await fetch(`http://localhost:3000/${URL}`, {
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

        const response = await fetch(`http://localhost:3000/${URL}`, {
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
