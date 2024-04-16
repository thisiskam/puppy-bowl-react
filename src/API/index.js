
export default async function getPlayers () {
    try {
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2401-FTB-ET-WEB-AM/players')
        const api = await response.json()
        return api.data
    } catch(error){
        console.error(error)
    }
}

export async function getSinglePlayer (id) {
    try {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2401-FTB-ET-WEB-AM/players/${id}`)
        const api = await response.json()
        return api.data
    } catch(error){
        console.error(error)
    }
}

export async function deletePlayer (id) {
    try {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2401-FTB-ET-WEB-AM/players/${id}`, {
            method: 'DELETE',
        })
        if(!response.ok){
            console.log('Player Could Not Be Deleted')
        }
    } catch(error) {
        console.error(error)
    }
}
