import { aboutText } from "../texts/AboutText"

export function AboutComponent (){
    const title ="À propos de moi"
    const description = aboutText
    

    return(
        <div id="propos" className="min-h-screen flex flex-col items-center gap-8">
            <h1 className="text-6xl font-bold mt-24">{title}</h1>
            <p className="text-lg max-w-2xl text-justify">
            {description}
            </p>
        </div>
    )
}