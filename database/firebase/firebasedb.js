var admin = require("firebase-admin");

var serviceAccount = require("./templatedb-919d6-firebase-adminsdk-m2cip-fc6935db8d.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:"http://templatedb.firebase.io.com"
});

const db = admin.firestore();
const query = db.collection("products")

module.exports = query