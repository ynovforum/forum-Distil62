import Firebase from "../firebase";

/**
     * Get all responses by Threads
     * ### Example usage
     * ```javascript
     * 
     * Firebase.ref('/threads/' + threadKey).once('value').then(threadGet => {
            let responsesOfThread = getResponsesByThread(threadGet.val());
        })
     * 
     * //output
     * [{user}, {user}]
     * ```
     * @param thread Object of Thread
 */
export default (responsesKey) => {
    return responsesKey.responses.map(e=>{
        return Firebase.ref('/responses/');
    })
}

