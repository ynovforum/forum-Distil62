import Firebase from "../firebase";

/**
     * Get thread by key and current user
     * ### Example usage
     * ```javascript
     * 
     * getThreadAndUserByKey(key, (thread, user)=> {})
     * 
     * ```
     * @param key Key of the thread
     * @param next Callback with thread's data and user's data;
 */
export default (key, next) => {
    Firebase.ref('/threads/' + key).once('value').then((threadGet => {
        Firebase.ref('/users/' + Firebase.app.auth().currentUser.uid).once('value').then(userGet => {
            let thread = threadGet.val();
            let user = userGet.val();
            next(thread, user);
        })
        .catch((error) => {
            console.error('ERROR CREATE RESPONSE');
            console.error(error.code);
            console.error(error.message);
        });
    }))
    .catch((error) => {
        console.error('ERROR CREATE RESPONSE');
        console.error(error.code);
        console.error(error.message);
    });
}