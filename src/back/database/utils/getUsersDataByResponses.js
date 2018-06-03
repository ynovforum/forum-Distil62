import Firebase from "../firebase";

export default async function getAuthorKeyByResponses(responses) {
    
    let threadList = Object.keys(responses);
    let result;
    
    await Promise.all(
        threadList.map(async elem => {
            result = await Firebase.ref('/responses/' + elem).once("value");
            responses[elem].authorKey = result.val();
        })
    );
    return responses;
}