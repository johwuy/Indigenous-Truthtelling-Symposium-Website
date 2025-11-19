import Divider from "./divider";
import Pages from "../data/Pages"
import Link from "next/link";

const NavMenu = () => {
    return (
        <div className="flex flex-col w-screen items-end z-20 relative">
            <div className="flex flex-col bg-black-200 w-1/3 p-4 gap-2 items-center">
                {Pages.map((page, idx) => (
                    <Link 
                        key={idx} 
                        href={page.href}
                        className="text-white hover:text-gray-300 text-lg"
                    >
                        {page.name}
                    </Link>
                ))}
            </div>

            <div className="w-1/3">
                <Divider color1="#F37E6A" color2="#F1BE4B" />
            </div>
        </div>
    );

};
export default NavMenu;