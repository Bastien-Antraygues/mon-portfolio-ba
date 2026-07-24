import { AboutComponent } from "../components/AboutComponent";
import { CompetenceComponent } from "../components/CompetenceComponent";
import { HomeComponent } from "../components/HomeComponent";
import { ProjectComponent } from "../components/ProjectComponent";

export function HomePage(){
    return(
        <>
            <HomeComponent/>
            <AboutComponent/>
            <ProjectComponent/>
            <CompetenceComponent/>
        </>
    )
}