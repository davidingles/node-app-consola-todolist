import menuInquirer, { pausa, leerInput } from './inquirer.js'

import Tarea from './tarea.js'
import Tareas from './tareas.js'


const main = async () => {
	console.clear();
	let opt = ''
	const tareas = new Tareas();

	do {

		opt = await menuInquirer()

		switch (opt) {
			case '1':
				//le envío el message y la función retorna el name: con el imput del usuario
				const desc = await leerInput('Descripción: ')
				tareas.crearTarea(desc)
				break;
			case '2':
				console.log(tareas.listadoArr)
				break;
		}
		await pausa();

	} while (opt !== '0')


}
main()


