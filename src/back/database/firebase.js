import Firebase from "firebase";
import Dotenv from "dotenv/config";

Firebase.initializeApp({
    apiKey :            process.env.API_KEY,
    authDomain:         process.env.AUTH_DOMAIN,
    databaseURL:        process.env.DATABASE_URL,
    projectId:          process.env.PROJECT_ID,
    storageBucket:      process.env.STORAGE_BUCKET,
    messagingSenderId:  process.env.MESSAGING_SENDER_ID
});

const db = Firebase.database();

export default db;