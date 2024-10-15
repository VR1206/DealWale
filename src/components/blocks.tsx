import { ButtonHTMLAttributes, ReactNode } from "react";

interface BlockProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode; 
}

const Blocks: React.FC<BlockProps> = ({ children }) => {
    return (
        <div className='flex justify-center items-center'>
            <div className='md:h-[18vh] md:w-[12vw] sm:h-[18vh] sm:w-[27vw] h-[18vh] w-[40vw] bg-[#cbd5e1] rounded-xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105'>
                {children}
            </div>
        </div>

    );
}

export default Blocks;
