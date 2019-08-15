import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBF6T-HeFPb1cLfq-jFfIpj2So7RbwViGo",
    authDomain: "testfirebase9999.firebaseapp.com",
    projectId: "testfirebase9999",
    databaseURL: "https://testfirebase9999.firebaseio.com",
    storageBucket: "testfirebase9999.appspot.com",
};

!firebase.apps.length ? firebase.initializeApp(config) : '';

var firestore = firebase.firestore();
var clientsRef = firestore.collection('clients');
var servicesRef = firestore.collection('services');
var departmentsRef = firestore.collection('departments');
var serviceAccountsRef = firestore.collection('ServiceAccounts');

var serviceAccount = {
    doReigster(form, passwordTemp, callback) {
        firebase.auth().createUserWithEmailAndPassword(form.email, passwordTemp).then(function(res) {
            form.uuid = res.user.uid;
            serviceAccountsRef.add(form).then(function(doc) {
                callback(true, 'You have created an account. Please check your email address.')
            });
        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            callback(false, errorMessage);
        });
    },
    doLogin(form, callback) {
        firebase.auth().signInWithEmailAndPassword(form.email, form.password).then(function(res) {
            var user = firebase.auth().currentUser;
            serviceAccount.getAccountInfoByUUID(user.uid, function(res) {
                callback(res);
            })

        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            callback({status: false, error: errorMessage});
        });
    },
    doLogout(callback) {
        firebase.auth().signOut().then(function() {
            localStorage.removeItem('account_id');
            callback({ status:true });
        }).catch(function(error) {
            // An error happened.
        });
    },
    getAccountInfoByUUID(uuid, callback) {
        serviceAccountsRef.where('uuid', '==', uuid).get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                var account = doc.data();
                account.id = doc.id;
                localStorage.setItem('account_id', account.id);
                callback({status: true, data: account});
            })
        });
    },
    getAccountInfoById(id, callback) {
        serviceAccountsRef.doc(id).get().then(function(doc) {
            var account = doc.data();
            account.id = doc.id;
            callback({status: true, data: account});
        });
    }
} 

export default serviceAccount;