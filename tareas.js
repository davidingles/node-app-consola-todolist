
export default class Tareas {

  //este getter es para que el listado se convierta en un arreglo (gracias al Object.keys())
  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach(key => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });
    return listado;
  }

  constructor() {

    this._listado = {};

  }

  borrarTarea(id = '') {
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }
}