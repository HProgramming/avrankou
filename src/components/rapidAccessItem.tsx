
interface RapidAccessItemProps{
    title: string,
    link: string,
    newTab: boolean,
    icon?: React.ReactNode
}

const RapidAccessItem = ({title, link, newTab, icon}: RapidAccessItemProps) => {
    return (
        <li className={`relative  overflow-hidden w-64 p-1  bg-orange-50  text-gray-500 border-none cursor-pointer transition-colors duration-300 group`
        }>
                           <span
                               className="absolute top-0  w-full h-full bg-gradient-to-br bg-gray-100 -left-full transition-all duration-300 ease-in-out group-hover:left-0 z-0"></span>


            <a className={`flex justify-between p-2 z-10 relative text-sm w-full`} href={`${link}`} target={newTab ? "_blank" : "_self"}>
                <div className="h-7 w-7 text-green-600">
                    {icon || (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/>
                        </svg>
                    )}
                </div>


                <span>{title}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     strokeWidth="1.5" stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
                </svg>
            </a>
        </li>
    );
};

export default RapidAccessItem;
