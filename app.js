import menuInquirer from './inquirer.js'



const main = async () => {
	console.clear();
	let opt = ''
	do {
		opt = await menuInquirer()

	} while (opt !== '0')


}
main()


