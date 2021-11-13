const admin = require("firebase-admin");
const serviceAccount = require("./wesopt29-server-1cc07-firebase-adminsdk-593u6-a1fad56666");
const dotenv = require("dotenv");

dotenv.config();

let firebase;
if (admin.apps.length === 0) {
  firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} else {
  firebase = admin.app();
}

module.exports = {
  api: require("./api"),
};
