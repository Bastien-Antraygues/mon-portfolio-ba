import experiences from "../../jsonDatas/experiences.json"
import { getLine } from "./FunctionAbout"


export function MyExperience(){

    

    return(
        <div>
            <h1 className="text-2xl font-bold">Expérience</h1>
            <ul>
                {experiences.experiences.map((experience) => (
                    <li key={experience.id}>
                        <h2 className="text-xl font-semibold">{experience.title}</h2>
                        <p>{getLine(experience.moisStart, experience.moisEnd, experience.dateStart, experience.dateEnd, experience.company, experience.lieu)}</p>
                        <p className="whitespace-pre-wrap">{experience.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}