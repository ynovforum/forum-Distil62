import Firebase from '../../database/firebase';

export default (next) => {
    Firebase.ref('/users/' + Firebase.app.auth().currentUser.uid).once('value').then(userGet=>{
        next(userGet.val());
    })
}