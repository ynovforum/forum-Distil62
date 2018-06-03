import Firebase from '../../database/firebase';

export default (next, id) => {
    let currentId;
    
    if (id && id !== undefined)
        currentId = id;
    else
        currentId = Firebase.app.auth().currentUser.uid;
    Firebase.ref('/users/' + currentId).once('value').then(userGet=>{
        next(userGet.val());
    })
}