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
        message: `${pc.red('Que desea hacer ?')}`,
        choices:
            [
                {
                    value: '1',
                    name: `${pc.yellow('1. ')}Crear tarea`
                },
                {
                    value: '2',
                    name: `${pc.yellow('2. ')}Listar tareas`
                },
                {
                    value: '3',
                    name: `${pc.yellow('3. ')}Tareas completadas`
                },
                {
                    value: '4',
                    name: `${pc.yellow('4. ')}Tareas pendientes`
                },
                {
                    value: '5',
                    name: `${pc.yellow('5. ')}Completar tarea(s)`

                },
                {
                    value: '6',
                    name: `${pc.yellow('6. ')}Borrar tarea`
                },
                {
                    value: '0',
                    name: `${pc.yellow('0. ')}Salir`
                },

            ]
    }
]

const menuInquirer = async () => {
    console.clear();
    menu();

    const { opcion } = await inquirer.prompt(preguntas);
    return opcion
}

export const pausa = async () => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${pc.yellow('ENTER')} para continuar`
        }
    ]
    console.log('\n')
    await inquirer.prompt(question)
}

export const leerInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor'
                }
                return true
            }
        }
    ]
    const { desc } = await inquirer.prompt(question)
    return desc
}

export const listadoTareasBorrar = async (tareas = []) => {
    const choices = tareas.map((tarea, i) => {
        const idx = `${pc.yellow(i + 1)}`;
        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`
        }
    })
    choices.unshift({
        value: '0',
        name: `${pc.yellow('0.')} Cancelar`
    })
    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]
    const { id } = await inquirer.prompt(preguntas)
    return id
}

// * ojo!!! si cometo el ERROR de poner "menuInquirer()" con los parentesis todo se rompe y no sabré por qué
export default menuInquirer;