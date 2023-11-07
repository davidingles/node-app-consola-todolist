import menuInquirer, { pausa, leerInput } from './inquirer.js'
import guardarDB, { leerDB } from './guardarArchivo.js'
import Tareas from './tareas.js'


const main = async () => {
	console.clear();
	let opt = ''
	const tareas = new Tareas();
	const tareasDB = leerDB()
	if (tareasDB) {
		tareas.crearTareasFromArray(tareasDB)
	}

	do {

		opt = await menuInquirer()

		switch (opt) {
			case '1':
				const desc = await leerInput('Descripción: ')
				tareas.crearTarea(desc)

				break;
			case '2':
				// console.log(tareas.listadoArr)
				tareas.listarTareas()
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
			// const borrar = tareas._listado[tareas.id]
			// tareas.borrarTarea(borrar)
			// break;
			case '0':
				console.log('Salir')
				break;
		}
		guardarDB(tareas.listadoArr)
		await pausa();

	} while (opt !== '0')


}
main()


