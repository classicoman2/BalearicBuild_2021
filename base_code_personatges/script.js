//import axios from 'axios';

const BASE_URL =
  "https://my-json-server.typicode.com/classicoman2/fakeRESTserver";

const getTodos = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/personatges`);

    const todos = res.data;

    pintarPersonatges(todos);

    return todos;
  } catch (e) {
    console.error(e);
  }
};

/**
 * Mostra per consola les dades dels personatges
 *
 * @param {Array} personatges
 */
function pintarPersonatges(personatges) {
  console.log(personatges);
}

window.onload = function () {
  // Crida la funció asíncrona
  getTodos();
};
