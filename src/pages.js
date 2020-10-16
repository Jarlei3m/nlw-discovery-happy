const Database = require('./database/db');
const saveOrphanage = require('./database/saveOrphanage');

module.exports = {

    index(req, res) {
        return res.render('index')
    },

    async orphanage(req, res) {
        const id = req.query.id

        try {
            const db = await Database;
            const results = await db.all(`SELECT * FROM orphanages WHERE id = "${id}"`);
            const orphanage = results[0];

            orphanage.images = orphanage.images.split(",");
            orphanage.firstImage = orphanage.images[0];

            orphanage.open_on_weekends == "0" ? orphanage.open_on_weekends = false : true
            
            return res.render('orphanage', { orphanage: orphanage })
            
        } catch (error) {
            console.log(error)
            return res.send('DB error!')
        }
    },

    async orphanages(req, res) {
        try {
            const db = await Database;
            const orphanages = await db.all("SELECT * FROM orphanages")
            return res.render('orphanages', { orphanages })
            
        } catch (error) {
            console.log(error)
            return res.send('DB error!')
        }
    },

    createOrphanage(req, res) {
        return res.render('create-orphanage')
    },

    async saveOrphanage(req, res) {
        const fields = req.body

        // check all fields
        if(Object.values(fields).includes('')) {
            return res.send('Todos os campos devem ser preenchidos!')
        }

        try {
            const db = await Database;
            await saveOrphanage(db, {
                lat: fields.lat,
                lng: fields.lng,
                name: fields.name,
                about: fields.about,
                whatsapp: fields.whatsapp,
                images: fields.images.toString(),
                instructions: fields.instructions,
                opening_hours: fields.opening_hours,
                open_on_weekends: fields.instructions,
            })

            return res.redirect('/orphanages')
        } catch (error) {
            console.log(error)
            return res.send('DB error!')
        }
    }
}