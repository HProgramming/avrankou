export interface TouristicAttraction {
    id: string;
    name: string;
    imageUrl: string;
    shortDescription: string;
    fullDescription: string;
    location: string;
    highlights: string[];
}
export const attractions: TouristicAttraction[] = [
    {
        id: "foret-sacree",
        name: "La forêt sacrée",
        imageUrl: "./foret.jpg",
        shortDescription: "Un sanctuaire naturel abritant des rites traditionnels et une biodiversité exceptionnelle.",
        fullDescription: "La forêt sacrée d'Avrankou est un lieu emblématique de la spiritualité béninoise. Ce sanctuaire naturel, préservé depuis des siècles, abrite des arbres centenaires et une biodiversité remarquable. Les cérémonies vodoun s'y déroulent régulièrement, perpétuant les traditions ancestrales. La forêt joue également un rôle écologique crucial en protégeant les sources d'eau et en maintenant l'équilibre environnemental de la région. Les visiteurs peuvent découvrir ce lieu mystique accompagnés de guides locaux qui partagent les légendes et l'histoire de cet espace sacré.",
        location: "Arrondissement d'Avrankou",
        highlights: [
            "Arbres centenaires et végétation luxuriante",
            "Site de cérémonies traditionnelles vodoun",
            "Biodiversité exceptionnelle",
            "Guides locaux disponibles"
        ]
    },
    {
        id: "riviere-noire",
        name: "La rivière noire",
        imageUrl: "./riviere_noire.jpg",
        shortDescription: "Une rivière mystérieuse aux eaux sombres, entourée de légendes locales.",
        fullDescription: "La rivière noire tire son nom de la couleur particulière de ses eaux, due aux tanins libérés par la végétation environnante. Ce cours d'eau serpente à travers la commune et constitue un élément central de la vie locale. Selon les légendes, la rivière serait habitée par des divinités protectrices. Elle offre un cadre paisible pour la pêche traditionnelle et les promenades en pirogue. Les berges ombragées invitent à la contemplation et à la découverte de la faune aquatique locale.",
        location: "Traverse plusieurs arrondissements",
        highlights: [
            "Eaux aux reflets sombres uniques",
            "Promenades en pirogue traditionnelle",
            "Pêche artisanale",
            "Légendes et mythologie locale"
        ]
    },
    {
        id: "site-zekpon",
        name: "Le site de Zèkpon",
        imageUrl: "./zekpon.jpeg",
        shortDescription: "Un site historique et spirituel d'importance majeure pour la culture locale.",
        fullDescription: "Le site de Zèkpon est un lieu chargé d'histoire et de spiritualité. Il représente un point de convergence entre les traditions ancestrales et la mémoire collective de la communauté d'Avrankou. Ce site sacré accueille des cérémonies importantes tout au long de l'année et constitue un témoignage vivant du patrimoine culturel béninois. Les visiteurs peuvent y découvrir des vestiges historiques et comprendre l'importance de ce lieu dans l'organisation sociale et spirituelle de la région.",
        location: "Arrondissement de Zèkpon",
        highlights: [
            "Site historique préservé",
            "Cérémonies traditionnelles",
            "Vestiges culturels",
            "Point de rencontre communautaire"
        ]
    },
    {
        id: "culture-vodoun",
        name: "Culture Vodoun",
        imageUrl: "./vodoun.JPG",
        shortDescription: "Découvrez les traditions vodoun, patrimoine spirituel vivant du Bénin.",
        fullDescription: "Le vodoun est une religion traditionnelle originaire d'Afrique de l'Ouest, profondément enracinée dans la culture béninoise. À Avrankou, cette tradition spirituelle se manifeste à travers des temples, des cérémonies et des pratiques transmises de génération en génération. Le vodoun célèbre la connexion entre les humains, la nature et les ancêtres. Les visiteurs peuvent découvrir cette culture riche à travers des visites guidées des temples, la rencontre avec des prêtres vodoun (Hougan), et la participation à certaines cérémonies ouvertes au public. Le 10 janvier, jour férié national du Vodoun au Bénin, est une occasion privilégiée pour vivre cette culture.",
        location: "Plusieurs sites dans la commune",
        highlights: [
            "Temples et autels traditionnels",
            "Rencontre avec les dignitaires vodoun",
            "Fête nationale du Vodoun (10 janvier)",
            "Art et artisanat rituels"
        ]
    },
];