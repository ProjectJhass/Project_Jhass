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

// const UPDATEEndpoint = async ({ URL, TokenPost }) => {
//     let responseReturn = null;
//     try {
//         const response = await fetch(`http://localhost:3000/${URL}`, {
//             method: "GET",
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${TokenPost}`,
//             },
//         });

//         const data = await response.json();
//         if (response.ok) {
//             responseReturn = data;
//         } else {
//             responseReturn = data;
//         }
//     } catch (error) {
//         responseReturn = { error: "Ocurrió un error durante la solicitud" };
//     }

//     return responseReturn;
// };

