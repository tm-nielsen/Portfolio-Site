import React, {useState, useEffect} from 'react'
const proxy = "https://cors-anywhere.herokuapp.com/"

export const GameList = () => {
    const [games, setGames] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async() => {
        const result = await fetch(
            proxy + `https://itch.io/api/1/a0UxGQcqh11vRHLPE7HOOdoZvCc6zuiZfGI8LCah/my-games`
        )
        const data = await result.json()
        console.log(data)
        console.log("a0UxGQcqh11vRHLPE7HOOdoZvCc6zuiZfGI8LCah")
        console.log(process.env.API_KEY)
    }

    return (
        <div>GameList</div>
    )
}
