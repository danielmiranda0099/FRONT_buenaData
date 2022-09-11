import { useParams } from "react-router-dom";

export function Detail() {
    const {id} = useParams();
    return(
        <h1>Detail: {id}</h1>
    )
}