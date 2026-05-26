import { AboutComponent } from "../components/AboutComponent";
import { CompetenceComponent } from "../components/CompetenceComponent";
import { HomeComponent } from "../components/HomeComponent";

export function HomePage(){
    return(
        <>
            <HomeComponent/>
            <AboutComponent/>
            <CompetenceComponent/>
        </>
    )
}