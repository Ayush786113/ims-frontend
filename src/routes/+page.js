export async function load(){
    const policies = await fetch(
        "http://ims.insiderserver.tk/"
    )
    return {
        "policies": await policies.json()
    }
}