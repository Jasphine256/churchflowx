import { readDocumentById } from "@utils/database"

export async function GET(request, {params}){
    const {id} = params
try {
    const minister = await readDocumentById("Ministers", id)
    
    if (minister){
        return createResponse(minister, 200)
    }else{
        return createResponse("Not Found", 404)
    }
    
} catch (error) {
    console.log("An error occurred")
    return createResponse("An error occurred", 500)
}
}

function createResponse(message, status) {
    return new Response(
        JSON.stringify({ message }),
        { status }
    );
}