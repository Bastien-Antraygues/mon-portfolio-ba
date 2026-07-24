import React, { useEffect, useState } from "react";
import { CvCardComponent } from "./CvCardComponent"; // Ajustez le chemin
import cvBleu from "../../assets/cvPDF/cv_bastien_antraygues_bleu122.pdf"
import cvCGI from "../../assets/cvPDF/cv_bastien_antraygues_CGI.pdf"
import cvKomet from "../../assets/cvPDF/cv_bastien_antraygues_komet.pdf"
import cvCegedim from "../../assets/cvPDF/cv_bastien_antraygues_cegedim.pdf"
import cvWebAtrio from "../../assets/cvPDF/cv_bastien_antraygues_web-atrio.pdf"
import cvLyra from "../../assets/cvPDF/cv-bastien_antraygues_lyra.pdf"
// 1. Liste centralisée des CV (facile à ordonner ou modifier)
const MES_CV = [
  { id: "cgi", url: cvCGI, title: "CV CGI" },
  { id: "webatrio", url: cvWebAtrio, title: "CV Web Atrio" },
  { id: "bleu", url: cvBleu, title: "CV Bleu" },
  { id: "komet", url: cvKomet, title: "CV Komet" },
  { id: "cegedim", url: cvCegedim, title: "CV Cegedim" },
  { id: "lyra", url: cvLyra, title: "CV Lyra" },
];
export function CvListComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3); // Nombre de CV affichés simultanément
  // Configuration des tailles
  const pdfWidth = 340;             // Largeur demandée pour le PDF
  const cardPadding = 32;           // Padding interne de la carte (p-4 = 16px à gauche + 16px à droite)
  const cardWidth = pdfWidth + cardPadding; // Largeur totale d'une carte (432px)
  const gapSize = 24;               // Espace entre les cartes (gap-6 de Tailwind = 24px)
  
  // Automatisations mathématiques
  const totalCards = MES_CV.length; // Calcul automatique (ici 6)          

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1); // Smartphone : 1 seul CV
      } else if (window.innerWidth < 1280) {
        setVisibleCards(2); // Tablette / Petit PC : 2 CV
      } else {
        setVisibleCards(3); // Grand écran : 3 CV
      }
    };

    // Exécuter au chargement et à chaque changement de taille d'écran
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (currentIndex < totalCards - visibleCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-none mx-auto p-4">
      
      {/* Conteneur principal avec les flèches autour */}
      <div className="flex items-center gap-4 w-full justify-center">
        
        {/* Flèche Gauche */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="p-3 rounded-full bg-white shadow-md border font-bold transition-all hover:bg-slate-100 disabled:opacity-30 z-10"
        >
          ←
        </button>

        {/* LA FENÊTRE VISIBLE */}
        <div 
          className="overflow-hidden border border-slate-200/60 rounded-xl bg-darkGray-10 p-4 shadow-xl"
          style={{ maxWidth: `${(cardWidth * visibleCards) + (gapSize * (visibleCards - 1)) + 32}px` }} 
          // Calcul exact de la fenêtre : (2 cartes) + (1 espace gap) + (paddings de la fenêtre)
        >
          
          {/* LE CONTENEUR DE SCROLL */}
          <div 
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            /* CORRECTION : On décale de la taille de la carte + la taille du gap de séparation */
            style={{ transform: `translateX(-${currentIndex * (cardWidth + gapSize)}px)` }}
          >
            {/* Boucle automatique sur vos CV */}
            {MES_CV.map((cv) => (
              <div 
                key={cv.id} 
                className="flex-shrink-0" 
                style={{ width: `${cardWidth}px` }} // Taille stricte et identique pour chaque bloc
              >
                {/* On passe la propriété width personnalisée à votre sous-composant */}
                <CvCardComponent url={cv.url} title={cv.title} width={pdfWidth} />
              </div>
            ))}
          </div>

        </div>

        {/* Flèche Droite */}
        <button
          onClick={handleNext}
          disabled={currentIndex >= totalCards - visibleCards}
          className="p-3 rounded-full bg-white shadow-md border font-bold transition-all hover:bg-slate-100 disabled:opacity-30 z-10"
        >
          →
        </button>

      </div>
    </div>
  );
}