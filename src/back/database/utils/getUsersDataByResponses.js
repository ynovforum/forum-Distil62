import Firebase from "../firebase";

export default async function getAuthorKeyByResponses(responses) {
    
    let result = [];
    let tmp;
    
    await Promise.all(
        responses.map(async elem => {
            tmp = await Firebase.ref('/users/' + elem.authorKey).once("value");
            elem.authorKey = tmp.val();
        })
    );
    return responses;
}