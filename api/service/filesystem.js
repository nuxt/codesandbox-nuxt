import admin from "firebase-admin";
const serviceAccount = JSON.parse(process.env.FIREBASE);

let db;

function _init() {
  if (db) return;

  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
  }

  db = admin.firestore();
}

async function save(type, key, data) {
  _init();
  await db
    .collection(type)
    .doc(key)
    .set(data);
  console.log("[filesystem] Stored: ", type, key);
}

async function getAll(type) {
  _init();
  try {
    const querySnapshot = await db.collection(type).get();
    return querySnapshot.docs.map(doc => doc.data());
    /*const docs = [];
    querySnapshot.forEach(doc => {
      console.log("[filesystem] snapshot value: ", doc);
      docs.push(doc);
    });
    return docs;*/
  } catch (e) {
    console.error("[filesystem] Error on getAll: ", e);
    return [];
  }
}

export default {
  getAll,
  save
};
