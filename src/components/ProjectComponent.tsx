import { DetailBtn } from "./btn/DetailBtn";
import { GitHubIcon } from "./svg/github";

export function ProjectComponent(){
    return(
        <div id="projet" className="min-h-screen flex flex-col items-center gap-8">
            <h1 className="text-6xl font-bold mt-24">Projets</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-darkGray-5 p-4 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Hackathon-Ynov-Takata - Baby-foot connecté</h2>
                    <p className="text-darkGray-12">Application développée lors d'un hackathon de deux jours ayant pour objectif de moderniser les baby-foot du campus Ynov. J'ai participé au développement du back-end en réalisant l'API et la gestion des données de l'application.</p>
                    <ul className="flex gap-4">
                        <li>Java</li>
                        <li>Spring Boot</li>
                        <li>Spring Security</li>
                        <li>MariaDB</li>
                    </ul>
                    <div className="flex mt-2 gap-2">
                        <GitHubIcon w={"30px"} h={"30px"} />
                        <DetailBtn nav="/projects/hackathonynov" />
                    </div>
                </div>
                <div className="bg-darkGray-5 p-4 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">PokemonFinder et Pokemon-Api</h2>
                    <p className="text-darkGray-12">
                        Pokemon Finder est une application permettant de rechercher et visualiser les informations sur les pokémons se trouvant dans pokemonApi 
                        <br/>Pokemon API est une API REST développée avec Express.js et MongoDB. Elle centralise la gestion des utilisateurs, des Pokémon et des favoris, tout en fournissant les endpoints nécessaires à l'authentification et aux différentes fonctionnalités du front-end. 
                    </p>
                    <ul className="flex gap-4">
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                    </ul>
                    <div className="flex mt-2 gap-2">
                        <GitHubIcon w={"30px"} h={"30px"} />
                        <DetailBtn nav="/projects/pokemonapi" />
                    </div>
                </div>
                <div className="bg-darkGray-5 p-4 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">CvPdf</h2>
                    <p className="text-darkGray-12">Une application permettant de générer des cv au format pdf à partir de templates stylisés avec du CSS et HTML.</p>
                    <ul className="flex gap-4">
                        <li>Angular</li>
                        <li>JsPdf</li>
                        <li>HTML2Canvas</li>
                        <li>CSS</li>
                    </ul>
                    <div className="flex mt-2 gap-2">
                        <GitHubIcon w={"30px"} h={"30px"} name="Privates" />
                        <DetailBtn nav="/projects/cvpdf" />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}