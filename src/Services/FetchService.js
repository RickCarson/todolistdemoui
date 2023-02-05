
const ToDoApiUrl = "https://localhost:7231/api/ToDo";
const ToDoGruopsApiUrl = "https://localhost:7231/api/ToDoGroups";

const ApiGet = async (url) => {
    const response = await fetch(url)
        .catch((error) => {
            console.log(error)
        });
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return jsonResponse;
};

const ApiDelete = async (url) => {
    const response = await fetch(url, { method: 'DELETE' });
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return jsonResponse;
};

const ApiPost = async (url, body) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };

    const response = await fetch(url, requestOptions);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return jsonResponse;
};

const ApiPut = async (url, body) => {

    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };

    const response = await fetch(url, requestOptions);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return jsonResponse;
};


export { ApiGet, ApiDelete, ApiPost, ApiPut, ToDoApiUrl, ToDoGruopsApiUrl}