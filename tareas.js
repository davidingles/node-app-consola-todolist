import Tarea from "./tarea.js";
import pc from 'picocolors';


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

  crearTarea(desc = '') {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  borrarTarea(id = '') {
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }

  crearTareasFromArray(tareas = []) {
    tareas.forEach(tarea => {
      this._listado[tarea.id] = tarea;
    });
  }

  listarTareas() {
    this.listadoArr.forEach((tarea, i) => {
      const idx = `${pc.yellow(i + 1)}`;
      const { desc, completadoEn } = tarea;
      const estado = (completadoEn) ? `${pc.green('Completada')}` : `${pc.red('Pendiente')}`;
      console.log(`${idx} ${desc} :: ${estado}`);
    });
  }

  listarCompletadasPendientes(completadas = true) {
    let contador = 0;
    this.listadoArr.forEach(tarea => {
      const { desc, completadoEn } = tarea;
      if (completadas) {
        if (completadoEn) {
          contador += 1;
          console.log(`${pc.green(contador + '.')} ${pc.yellow(desc)} :: ${pc.green(completadoEn)}`);
        }
      } else {
        if (!completadoEn) {
          contador += 1;
          console.log(`${pc.red(contador + '.')} ${pc.yellow(desc)} :: ${pc.red(completadoEn)}`);
        }
      }

    })
  }

}