import { randomUUID } from 'crypto';

export default class Tarea {
  constructor(desc) {

    this.id = randomUUID();
    this.desc = desc;
    this.completadoEn = null;

  }
}
