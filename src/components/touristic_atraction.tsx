const attractions = [
    {
        name: "Le Monument aux Dévoués",
        imageUrl: "/l-esplanade-aux-devoues.jpg",
    },
    {
        name: "L'esplanade de l'Amazone",
        imageUrl: "/l-esplanade-de-l-amazone.jpg",
    },
    {
        name: "La statue de Bio Guera",
        imageUrl: "/la-statue-bio-guera.jpg",
    },
    {
        name: "Place des Martyrs",
        imageUrl: "/place-des-martyrs.jpg",
    },
    {
        name: "La route des pêches",
        imageUrl: "/route-des-peches.jpg",
    },
    {
        name: "Le Jardin de Mathieu",
        imageUrl: "/le-jardin-de-mathieu.png",
    }
];

const TouristicAtraction = () => {
    return (
        <div className={`bg-[#eeeeee] w-full `}>
            <h1
                className="heading-primary mb-8 text-primary text-center pt-44 ">
                Attractions touristiques d'Avrankou</h1>

            <div className={`grid md:grid-cols-3 gap-4 bg-white container mx-auto p-10 rounded-md`}>
                {attractions.map((attraction, index) =>
                    <div
                        key={index}
                        style={{backgroundImage: `url(${attraction.imageUrl})`}}
                        className={` h-[400px] w-full bg-cover bg-blend-overlay rounded-md bg-black/15 bg-center text-white text-center flex justify-center items-center`}
                    >
                            <h5 className={`text-2xl font-semibold text-white`}>{attraction.name}</h5>

                    </div>)
                }
            </div>
        </div>
    )
}
export default TouristicAtraction;
