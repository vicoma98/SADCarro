const { MongoClient } = require("mongodb");
const frutaM = require('../models/Fruta');
const uri = 'mongodb+srv://Prueba:Prueba@cluster0.pby5a.mongodb.net/test'


async function run() {
    const client = new MongoClient(uri);
    try {

        await client.connect();
        const database = client.db("test");
        const frutas = database.collection("frutas");
        const fruta = await frutas.findOne({ Nombre: 'Pera' });
        console.log(fruta);

    } catch (e) {
        console.error(e)
    } finally {
        await client.close();
    }

}
async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
run().catch(console.error);