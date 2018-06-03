import Firebase from "../firebase";

export default async function getAuthorKeyByThreads(threads) {
    
    let threadList = Object.keys(threads);
    let result;
    
    await Promise.all(
        threadList.map(async elem => {
            result = await Firebase.ref('/users/' + threads[elem].authorKey).once("value");
            threads[elem].authorKey = result.val();
        })
    );
    return threads;
}