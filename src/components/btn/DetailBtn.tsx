import { Link } from "react-router-dom"

export function DetailBtn({text = "Details", nav}: {text?: string, nav: string}){
    return(
        <Link to={nav} className="inline-flex items-center justify-center bg-darkGray-12 p-2 rounded-lg hover:bg-darkGray-11 transition-colors duration-300">
            <p className="text-darkGray-3 font-semibold my-auto">{text}</p>
        </Link>
    )
}