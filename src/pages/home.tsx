import RapidAccessItem from "../components/rapidAccessItem.tsx";
import {BankNotesIcon, PhoneMobileIcon} from "../components/icons.tsx";

const Home = ()=> {
    // Example of a custom icon

    return (
        <div className={`px-4 gap-4 sm:px-6 lg:px-8 grid grid-cols-7 `}>
            <div className={`col-span-2 flex flex-col gap-2 mt-10 items-center`}>
                <div className={`flex  text-2xl font-bold p-4 `}>
                    <h2>Accès rapide</h2>
                </div>
                <ul className={`flex flex-col  gap-4`}>
                   <RapidAccessItem title={"Les démarches en ligne"} link={"https://service-public.bj/"} newTab={true} icon={<PhoneMobileIcon/>}/>
                  <RapidAccessItem title={`Paiement en ligne`} link={`https://paiement.tresorbenin.bj/#/recette-non-fiscales-communales`}  newTab={true} icon={<BankNotesIcon/>}/>
                   <RapidAccessItem title={"Portail national"} link={"https://gouv.bj/"} newTab={true} />

                </ul>
            </div>
            <div className={`col-span-4 p-20`}>

                <div className={" mb-48"}>
                    <div className="relative w-[800px] h-96 overflow-hidden">
                        <img
                            src={`https://cdn.paris.fr/paris/2025/07/03/large-ba84bfcf5b0041e8b7fca6f255a16dc2.jpg`}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                        />
                    </div>

                    <a className={"relative cursor-pointer"}>
                        <div className={"absolute bg-white w-[650px] -top-16 left-12 p-4  "}>
                            <div className={`flex gap-4 mb-4`}>
                                <span className={`text-xs font-semibold text-red-700`}>A LA UNE</span>
                                <span className={`text-green-700 font-semibold text-xs`}> INFO</span>
                            </div>
                            <div className={`p-2`}>
                                <h1 className={`text-4xl font-bold  mb-2`}> Titre de la superbe actualité à
                                    Avrankou! </h1>
                                <p className={``}>Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                                    1500s, when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book.</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className={`mt-40`}>

                </div>


            </div>
        </div>
    );
}

export default Home;
