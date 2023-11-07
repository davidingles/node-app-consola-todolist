//https://www.npmjs.com/package/inquirer
import inquirer from 'inquirer'
import pc from 'picocolors'
// Path: menu.js
import menu from './menu.js'

//preguntas de inquierer==============================
const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer ?',
        choices:
            [
                {
                    value: '1',
                    name: '1.Crear tarea'
                },
                {
                    value: '2',
                    name: '2 Listar tareas'
                },
                {
                    value: '3',
                    name: '3 Tareas completadas'
                },
                {
                    value: '4',
                    name: '4 Tareas pendientes'
                },
                {
                    value: '5',
                    name: '5 Completar tarea(s)'

                },
                {
                    value: '6',
                    name: '6 Borrar tarea'
                },
                {
                    value: '0',
                    name: '0 Salir'
                },

            ]
    }
]

const menuInquirer = async () => {
    //es solo la cabecera============
    menu()

    const opt = await inquirer.prompt(preguntas);
    return opt
}


// ! ojo!!! si cometo el ERROR de poner "menuInquirer()" con los parentesis todo se rompe y no sabré por qué
export default menuInquirer;