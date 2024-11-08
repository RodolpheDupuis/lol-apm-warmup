'use client'

import { useCallback, useEffect, useState } from "react";

export default function Navbar({ size, setSize }: { size: string, setSize: (size: string) => void }) {
    const [visible, setVisible] = useState<Boolean>(false);

    return (
        <div className="p-3 min-w-full h-[100px] absolute flex">
            <div className=" bg-[#041e36] h-full rounded-full flex justify-between items-center w-full p-3 hover:shadow-nav"
                style={{transition: 'box-shadow 300ms ease'}}
            >
                <div className=" ml-4 font-[family-name:var(--font-geist-mono)]">
                    Oui
                </div>
                <div className="mr-4 font-[family-name:var(--font-geist-mono)]">
                    <button onClick={() => setVisible(!visible)} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar">Target size</button>
                    {visible && <div id="dropdownNavbar" className="z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-[#041e36] dark:divide-gray-600 absolute mt-[3rem] right-0 mr-4">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                        <li>
                            <a onClick={() => setSize('1rem')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#052847]  dark:hover:text-white">Small</a>
                        </li>
                        <li>
                            <a onClick={() => setSize('3rem')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#052847]  dark:hover:text-white">Medium (default)</a>
                        </li>
                            <li>
                                <a onClick={() => setSize('5rem')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#052847]  dark:hover:text-white">Large</a>
                            </li>
                        </ul>
                    </div>}
                </div>
            </div>
        </div>
    )
}