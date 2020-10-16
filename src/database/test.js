const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    // insert datas on table
    await saveOrphanage(db, {
        lat: "-22.5051203", 
        lng: "-44.4591939",
        name: 'Lar dos meninos',
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "98989898",
        images: [

            "https://images.unsplash.com/photo-1590009617786-6d054a2a3c7c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1596962248954-a0381dc10a20?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1586022773518-47a6bf08fa90?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas das 18h até 8h",
        open_on_weekends: "0"
    }) 

    // check datas
    const selectedOrpahanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrpahanages)

    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage)
})
