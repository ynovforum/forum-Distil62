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
export default async function getResponsesByThread(thread) {

    let result = [];
    let tmp;

    if (thread.responses)
    {
        await Promise.all(
            thread.responses.map(async elem => {
                tmp  = await Firebase.ref('/responses/' + elem).once("value");
                result.push(tmp.val());
            })
        );
    }    
    thread.responses = result;
    
    return thread;
}

