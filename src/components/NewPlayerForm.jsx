import { useState } from "react"

export default function NewPlayerForm () {
    const [puppyName, setPuppyName] = useState("")
    const [breed, setBreed] = useState("")
    const [image, setImage] = useState("")
    console.log(puppyName);

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const response = await fetch ("https://fsa-puppy-bowl.herokuapp.com/api/2401-FTB-ET-WEB-AM/players", {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: puppyName,
                    breed: breed,
                    imageUrl: image
            })
            })
            const result = await response.json()
            console.log(result);
            setBreed('')
            setPuppyName('')
            setImage('')
        } catch(error) {
            console.error(error)
        }
        location.reload()
    }
    
    return (
        <>
            <form onSubmit={handleSubmit} className="playerForm">
                <h4 id='formTitle'>Add New Player</h4>
                <input className='formItem' type='text' value={puppyName} onChange={(e) => {setPuppyName(e.target.value)}} placeholder='Player Name'></input><br />
                <input className='formItem' type='text' value={breed} onChange={(e) => {setBreed(e.target.value)}} placeholder='Player Breed'></input><br />
                <input className='formItem' type='text' value={image} onChange={(e) => {setImage(e.target.value)}} placeholder='Image URL only'></input><br />
                <button id="submitButton">Submit</button>
            </form>
        </>
    )
}