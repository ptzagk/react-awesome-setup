import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

const config = {
    apiKey: 'AIzaSyDpfLeLUhieqrz75u18BO5dIIC5Nm1QDA4',
    authDomain: 'react-awesome-setup.firebaseapp.com',
    databaseURL: 'https://react-awesome-setup.firebaseio.com',
    projectId: 'react-awesome-setup',
    storageBucket: 'react-awesome-setup.appspot.com',
    messagingSenderId: '790968458342'
};

export default class FirebaseInit {
    constructor() {
        firebase.initializeApp(config);

        this.db = firebase.firestore();
    }

    async getDocument(doc) {
        let output = {};
        let response = await this.db.collection(doc).get();

        response.forEach(doc => {
            var data = doc.data();

            output = {
                id: doc.id,
                data: data
            };
        });

        return output;
    }

    updateDb(doc, docId, key, val) {
        this.db
            .collection(doc)
            .doc(docId)
            .update({
                [key]: val
            })
            .then(() => {
                console.log('Data written', key, val);
            });
    }
}
