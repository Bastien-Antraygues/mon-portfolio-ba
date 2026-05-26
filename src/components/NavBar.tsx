export function NavBar(){
    return(
        <nav className="fixed bg-vs-dark-1 p-4 m-4 rounded-3xl md:w-[50%] lg:w-[40%] mx-[30%]">
            <div className="flex gap-4 justify-center">
                <a href="#home">Accueil</a>
                <a href="#propos">À propos</a>
                <a href="#competences">Compétences</a>
                <a href="#projet">Projet</a>
                <a href="#contact">Contact</a>
            </div>    
        </nav>
    )
}