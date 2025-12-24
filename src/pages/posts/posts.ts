export interface Post {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    imageUrl: string;
    author: string;
    date: string;
    readTime: string;
    featured?: boolean;
}
export const posts: Post[] = [
    {
        id: 'inauguration-centre-sante',
        title: "Inauguration du nouveau centre de santé d'Avrankou",
        excerpt: "Le Maire a inauguré ce mardi le nouveau centre de santé communal, un investissement majeur pour améliorer l'accès aux soins des populations.",
        content: "",
        category: "Santé",
        imageUrl: "./foret.jpg",
        author: "Service Communication",
        date: "2024-12-20",
        readTime: "3 min",
        featured: true
    },
    {
        id: 'fete-vodoun-2025',
        title: "Préparatifs de la fête nationale du Vodoun 2025",
        excerpt: "La commune se prépare activement pour célébrer la fête nationale du Vodoun le 10 janvier prochain avec un programme riche en événements culturels.",
        content: "",
        category: "Culture",
        imageUrl: "./vodoun.JPG",
        author: "Service Culturel",
        date: "2024-12-18",
        readTime: "4 min"
    },
    {
        id: 'rehabilitation-routes',
        title: "Réhabilitation des routes communales : bilan positif",
        excerpt: "Les travaux de réhabilitation des principales routes de la commune avancent bien. Plus de 15 km de voirie ont été rénovés cette année.",
        content: "",
        category: "Infrastructure",
        imageUrl: "./riviere_noire.jpg",
        author: "Service Technique",
        date: "2024-12-15",
        readTime: "5 min"
    },
    {
        id: 'rentree-scolaire',
        title: "Rentrée scolaire 2024-2025 : les nouveautés",
        excerpt: "La rentrée scolaire s'est déroulée dans de bonnes conditions avec l'ouverture de deux nouvelles écoles maternelles.",
        content: "",
        category: "Éducation",
        imageUrl: "./zekpon.jpeg",
        author: "Service Éducation",
        date: "2024-12-10",
        readTime: "3 min"
    },
    {
        id: 'marche-agricole',
        title: "Nouveau marché agricole : une opportunité pour les producteurs",
        excerpt: "L'inauguration du nouveau marché agricole offre aux agriculteurs locaux un espace moderne pour commercialiser leurs produits.",
        content: "",
        category: "Économie",
        imageUrl: "./foret.jpg",
        author: "Service Économique",
        date: "2024-12-05",
        readTime: "4 min"
    },
    {
        id: 'campagne-vaccination',
        title: "Campagne de vaccination gratuite pour les enfants",
        excerpt: "Une campagne de vaccination gratuite se tiendra du 15 au 20 décembre dans tous les centres de santé de la commune.",
        content: "",
        category: "Santé",
        imageUrl: "./vodoun_1.JPG",
        author: "Service Santé",
        date: "2024-12-01",
        readTime: "2 min"
    }
];
