import pc from 'picocolors'
import menuInquirer, { pausa, leerInput, listadoTareasBorrar, confirmar } from './inquirer.js'
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
				// tareas.listarCompletadas()
				tareas.listarCompletadasPendientes(true)
				break;
			case '4':
				tareas.listarCompletadasPendientes(false)
				// tareas.listarPendiendtes()
				break;
			case '5':
				console.log('ids')
				break;
			case '6':
				const id = await listadoTareasBorrar(tareas.listadoArr)
				const ok = await confirmar('¿Está seguro?')
				if (ok) {
					tareas.borrarTarea(id)
					console.log(`${pc.bgRed('Tarea borrada')}`);
				}
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


