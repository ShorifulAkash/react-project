import React from 'react'
// import { ReactDOM } from 'react'

export default function Header() {
    return (
        <div className="py-4 bg-gray-200">
            <div className="lg:container max-w-7xl mx-auto px-20">
                <div className="flex items-center justify-between gap-10">
                    <div className="">
                        logo
                    </div>
                    <ul className="flex items-center gap-5 text-lg font-medium">
                        <li className="">
                        About
                        </li>
                        <li className="">
                        Blog
                        </li>
                        <li className="">
                        Contact
                        </li>
                    </ul>
                    <button className="">
                        button
                    </button>
                </div>
            </div>
        </div>
    )
}
