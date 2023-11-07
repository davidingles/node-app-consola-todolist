import menuInquirer, { pausa, leerInput } from './inquirer.js'
import guardarDB, { leerDB } from './guardarArchivo.js'
import Tareas from './tareas.js'


const main = async () => {
	console.clear();
	let opt = ''
	const tareas = new Tareas();
	const tareasDB = leerDB()

	tareas.crearTareasFromArray(tareasDB)


	do {

		opt = await menuInquirer()

		switch (opt) {
			case '1':
				const desc = await leerInput('Descripción: ')
				tareas.crearTarea(desc)

				break;
			case '2':
				console.log(tareas.listadoArr)
				break;
			case '3':
				console.log('Listar completadas')
				break;
			case '4':
				console.log('Listar pendientes')
				break;
			case '5':
				console.log('ids')
				break;
			case '6':
				console.log('Eliminar tarea')
				break;
			case '0':
				console.log('Salir')
				break;
		}
		guardarDB(tareas.listadoArr)
		await pausa();

	} while (opt !== '0')


}
main()


