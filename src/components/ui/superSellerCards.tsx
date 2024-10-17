import { ButtonHTMLAttributes, ReactNode } from "react";
interface CardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}
const SuperSellerCards: React.FC<CardProps> = ({ children }) => {
    return (
        <div>
            <div className='md:h-[24vh] md:w-[20vw] sm:h-[11vh] sm:w-[9vw]  bg-[#e9f5f3] h-[12vh] w-44  rounded-lg flex items-center justify-center'> {/* Added flex for centering */}
                {children}
            </div>
        </div>
    );
}

export default SuperSellerCards;
