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

export default {
    doReigster(form, passwordTemp, callback) {
        firebase.auth().createUserWithEmailAndPassword(form.email, passwordTemp).then(function(res) {
            callback(true, 'You have created an account. Please check your email address.')
        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            callback(false, errorMessage);
        });
    }
} 