
export function HomeComponent (){
    const title ="Développeur Fullstack"
    const name = "Bastien ANTRAYGUES"
    const description = "Bienvenue sur mon portfolio !"
    return(
        <div id="home" className="min-h-screen flex flex-col items-center gap-8">
            <h1 className="text-6xl font-bold mt-24">{title}</h1>
            <h2 className="text-3xl font-semibold">{name}</h2>
            <p className="text-lg">
            {description}
            </p>
        </div>
    )
}