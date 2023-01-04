import { useParams, useOutletContext } from "react-router-dom"

export function Book() {
    const { id } = useParams();
    const obj = useOutletContext();
    console.log(obj)
    return <h1>Book {id}</h1>
}