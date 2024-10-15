import { CiSearch } from 'react-icons/ci';

function NavBar() {
    return (
        <>
            <div className='fixed top-0 left-0 w-full md:h-[10vh] sm:h-[8vh] h-[8vh] bg-[#ffffff] flex justify-center border-b border-[#d4d4d4] z-50 shadow-md'>
                <div className='md:h-[10vh] md:w-[80vw] sm:h-[8vh] sm:w-full h-[8vh] w-full bg-[#ffffff] flex items-center justify-between px-8 overflow-hidden'>
                    <div className='flex space-x-4 items-center'>
                        <h1 className='md:text-xl sm:text-lg text-sm font-bold text-gray-800'>DealWale</h1>
                        <div className="md:h-[6vh] md:w-[55vw] sm:h-[4vh] sm:w-[70vw] h-[4vh] w-[50vw] bg-[#f7f7f7] flex items-center p-3 rounded-2xl transition-all duration-200 hover:bg-[#ececec]">
                            <CiSearch className="text-2xl text-[#c7c7c7]" />
                            <input
                                className="md:h-[6vh] md:w-[55vw] sm:h-[4vh] sm:w-[70vw] h-[4vh] w-[40vw] rounded-2xl cursor-pointer p-2 bg-[#f7f7f7] outline-none hover:bg-[#f1f1f1] transition-all duration-200"
                                placeholder="Search for Products, Brand and More"
                            />
                        </div>
                    </div>

                    <div className='flex space-x-4 items-center'>
                        <h1 className='lg:block sm:hidden hidden text-gray-700'>Location</h1>
                        <button className='bg-slate-500 lg:px-6 lg:py-2 md:px-5 md:py-1 sm:px-4 sm:py-1 px-3 py-1 text-white rounded-lg lg:text-lg md:text-base sm:text-sm text-xs hover:bg-slate-600 active:bg-slate-700 transition-colors duration-200 shadow-lg'>
                            Login
                        </button>

                    </div>
                </div>
            </div>
            <div className="pt-[10vh] sm:pt-[8vh]"></div>
        </>
    );
}

export default NavBar;
