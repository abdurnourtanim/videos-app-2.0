import { initializeApp } from "firebase/app";

// const app = initializeApp({
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
//   appId: process.env.REACT_APP_APP_ID,
// });

const app = initializeApp({
  apiKey: "AIzaSyBkBI0IARIZxkghg7kmhWIyiy1o_j3ezv4",
  authDomain: "online-course-app-e95a2.firebaseapp.com",
  databaseURL:
    "https://online-course-app-e95a2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "online-course-app-e95a2",
  storageBucket: "online-course-app-e95a2.appspot.com",
  messagingSenderId: "865879748375",
  appId: "1:865879748375:web:92fed9834affcaafa71152",
});

export default app;
