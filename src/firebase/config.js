import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB-2PC1WxwP2eTPzBJ-t8RvrCdY3AMsy6k',
  authDomain: 'miniblog-df746.firebaseapp.com',
  projectId: 'miniblog-df746',
  storageBucket: 'miniblog-df746.appspot.com',
  messagingSenderId: '160025757683',
  appId: '1:160025757683:web:f72eb7813831a8d16b7486',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
