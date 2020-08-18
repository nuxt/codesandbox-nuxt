import admin from "firebase-admin";
const serviceAccount = JSON.parse(process.env.FIREBASE);

let db;
let prefix = process.env.NODE_ENV === "development" ? "test-" : "";

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
    .collection(prefix + type)
    .doc(key)
    .set(data);
  console.log("[filesystem] Stored: ", type, key);
}

async function getAll(type) {
  _init();
  try {
    const querySnapshot = await db.collection(prefix + type).get();
    return querySnapshot.docs.map((doc) => doc.data());
  } catch (e) {
    console.error("[filesystem] Error on getAll: ", e);
    return [];
  }
}

async function remove(type, key) {
  _init();
  try {
    await db
      .collection(prefix + type)
      .doc(key)
      .delete();
    return getAll(type);
  } catch (e) {
    console.error("[filesystem] Error on getAll: ", e);
    return [];
  }
}

export default {
  getAll,
  save,
  remove
};
