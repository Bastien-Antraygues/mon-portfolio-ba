export const deMois = (mois: string) => {
    switch (mois) {
        case "Avril": return "D'"
        case "Août": return "D'"
        case "Octobre": return "D'"
        default: return "De "
    }
}

export const isSameMoisAndYear = (startMois: string, endMois:string, dateStart:string, dateEnd:string) => {
    const yearStart = dateStart.split("-")[0]
    const yearEnd = dateEnd.split("-")[0]
    return startMois === endMois && yearStart === yearEnd
}

export const getYears = (date:string) => {
    return date.split("-")[0]
}

export const getLine = (startMois: string, endMois:string, dateStart:string, dateEnd:string,name:string,lieu:string) => {
    if(isSameMoisAndYear(startMois, endMois, dateStart, dateEnd)){
        return `${startMois} ${getYears(dateStart)} ${name} ${lieu}`
    }
    return `${deMois(startMois)}${startMois.toLowerCase()} ${getYears(dateStart)} à ${endMois.toLowerCase()} ${getYears(dateEnd)} ${name} ${lieu}`
}