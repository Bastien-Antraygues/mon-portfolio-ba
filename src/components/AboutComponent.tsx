import { useState } from "react"
import { aboutText } from "../texts/AboutText"
import { MyExperience } from "./abouts/MyExperience"
import { MyFormation } from "./abouts/MyFormation"
import { MyInteret } from "./abouts/MyInteret"
// max-w-2xl
export function AboutComponent (){
    const title ="À propos de moi"
    const description = aboutText
    const classButton = "text-darkGray-10 hover:text-darkGray-11 hover:border-b hover:border-darkGray-12 p-2"
    const classButtonActive = "text-white p-2 border-b-2 border-darkGray-12"
    const [activeButton, setActiveButton] = useState("experience")
    
    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const buttonName = event.currentTarget.name
        setActiveButton(buttonName)
    }
    return(
        <div id="propos" className="min-h-screen flex flex-col items-center gap-8">
            <h1 className="text-6xl font-bold mt-24">{title}</h1>
            <div className="flex gap-4 border-b border-darkGray-6">
                <button className={ activeButton === "experience" ? classButtonActive : classButton}
                id="experience" name="experience" onClick={handleButtonClick}>
                    Expérience
                </button>

                <button className={activeButton === "formation" ? classButtonActive : classButton}
                id="formation" name="formation" onClick={handleButtonClick}>
                    Formation
                </button>

                <button className={activeButton === "interests" ? classButtonActive : classButton}
                id="interests" name="interests" onClick={handleButtonClick}>
                    Centre d'intérêt
                </button>
            </div>
            {activeButton === "experience" && <MyExperience />}
            {activeButton === "formation" && <MyFormation />}
            {activeButton === "interests" && <MyInteret />}
        </div>
    )

    
}