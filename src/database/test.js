const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {

   
	// insert data to the table

	await saveOrphanage(db, {
		
		lat: '-27.2196961',
		lng: '-49.6494515',
		name: 'Lar das meninas',
		about:
			'Presta assistência a criança de 06 a 15 anos que se encontre em situação de risco o/ou vulnerabilidade social.',
		whatsapp:'4546465465',
		images: [
			'https://images.unsplash.com/photo-1598322313658-512b47702270?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
			'https://images.unsplash.com/photo-1594753154778-273013529793?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9'
        ].toString(),
        instuctions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours:"Horário de visitas Das 8 às 18",
        open_on_weekends:"1"
	})

	

    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)
    //cosulting table data
    
    
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
	console.log(orphanage)
	
	// deleting 

	/*

	console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
	console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))

	*/

})
