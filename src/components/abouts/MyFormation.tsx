import formations from "../../jsonDatas/formations.json";
import { getLine } from "./FunctionAbout";

export function MyFormation(){
    return(
        <div>
            <h1 className="text-2xl font-bold">Formation</h1>
            <ul>
                {formations.formations.map((formation) => (
                    <li key={formation.id}>
                        <h2 className="text-xl font-semibold">{formation.title}</h2>
                        <p>{getLine(formation.moisStart, formation.moisEnd, formation.dateStart, formation.dateEnd, formation.school, formation.lieu)}</p>
                        <p className="whitespace-pre-wrap">{formation.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}