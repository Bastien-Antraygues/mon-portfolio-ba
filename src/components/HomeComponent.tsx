import { homeText } from "../texts/HomeText"
import profileImage from "../assets/profile.jpg"
import iconJava from "../assets/icon-java.svg"
import iconJavascript from "../assets/icon-javascript.svg"
import iconAngular from "../assets/icon-angular.svg"
import iconReact from "../assets/icon-react.svg"
import iconSpring from "../assets/icon-spring_boot.svg"
import iconTailwind from "../assets/icon-tailwind.svg"
import type { Stack } from "../interfaces/Stack"

export function HomeComponent (){
    const age = Math.floor((new Date().getTime() - new Date("1999-04-08").getTime()) / (1000 * 60 * 60 * 24 * 365.25))
    const title ="Développeur Fullstack"
    const name = "Bastien ANTRAYGUES"
    const description = homeText
    const stack : Stack[] = [
        { name: "Java", icon: iconJava },
        { name: "JavaScript", icon: iconJavascript },
        { name: "Angular", icon: iconAngular },
        { name: "React JS", icon: iconReact },
        { name: "Spring Boot", icon: iconSpring },
        { name: "Tailwind CSS", icon: iconTailwind }
    ]
    return(
        <div id="home" className="min-h-screen flex gap-8">
            <div className="mt-24">
                <img src={profileImage} alt="Photo de profil" className="rounded-full w-96 h-96 object-cover"/>
                <h2 className="text-3xl font-semibold">{name}</h2>
                <h1 className="text-6xl font-bold">{title}</h1>
                <p>{age} ans, Verfeil, 31590</p>
            </div>
            <div className="mt-24">
                <p className="text-lg whitespace-pre-wrap">
                {description}
                </p>
                <h3 className="text-2xl font-bold mt-4">Stack</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                    {stack.map((item, index) => (
                        <div key={index} className="bg-darkGray-5 text-white px-3 py-1 rounded-lg flex items-center gap-1" >
                            <img src={item.icon} alt={`${item.name} icon`} className="inline-block w-10 h-10 mr-2"/>
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
            

        </div>
    )
}