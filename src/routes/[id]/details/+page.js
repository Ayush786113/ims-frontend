export async function load({params}){
    const data = await fetch(
        "https://ims-backend-lthb.onrender.com/"+params.id
    )
    
    return {
        data: await data.json(),
        id: params.id
    }
}