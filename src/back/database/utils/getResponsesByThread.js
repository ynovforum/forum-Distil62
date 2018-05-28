import Firebase from "../firebase";

/**
     * Get all responses by Threads
     * ### Example usage
     * ```javascript
     * Thread.responses = getResponsesByThread(["userKey1", "userKey2"])
     * 
     * //output
     * [{user}, {user}]
     * ```
     * @param responsesKey Array of key responses it's the default value of thread.responses
 */
export default (responsesKey) => {
    return responsesKey.map(e=>{
        return Firebase.ref('/responses/');
    })
}

