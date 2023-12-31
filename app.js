import pc from 'picocolors'
import menuInquirer, { pausa, leerInput, listadoTareasBorrar, confirmar, completarTareas } from './inquirer.js'
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
			case '2': // console.log(tareas.listadoArr)
				tareas.listarTareas()
				break;
			case '3': // tareas.listarCompletadas()
				tareas.listarCompletadasPendientes(true)
				break;
			case '4': //listar pendientes o completadas
				tareas.listarCompletadasPendientes(false)
				// tareas.listarPendiendtes()
				break;
			case '5': //completado o pendiente
				const ids = await completarTareas(tareas.listadoArr)
				tareas.toggleCompletadas(ids)
				break;
			case '6':
				const id = await listadoTareasBorrar(tareas.listadoArr)
				const ok = await confirmar(`${pc.bgCyan('¿Está seguro?')}`)
				if (id !== '0') {
					if (ok) {
						tareas.borrarTarea(id)
						console.log(`${pc.bgRed('Tarea borrada')}`);
					}
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


