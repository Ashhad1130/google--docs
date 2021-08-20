import React from 'react'
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { signOut, useSession } from 'next-auth/client';

function Header() {
    const [session] = useSession();
    return (
        <header className='sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white'>
        <Button
            color="blue"
            buttonType="outline"
            iconOnly={true}
            ripple="dark"  
            className="h-20 w-20 border-0"
        >
            <Icon name='menu' size='3xl'/>
        </Button>
        <Icon name='description' size="5xl" color='blue'/>
        <h1 className="md:inline:flex ml-2 text-gray-700 text-2xl">Docs</h1>
        <div className="mx-5 md:mx-20 flex flex-grow items-center px-2 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md">
            <Icon name="search" size="3xl" color="gray"/>
            <input type="text" placeholder="Search" className="flex flex-grow px-5 outline-none bg-transparent text-base"></input>
        </div>
        <Button
            color="gray"
            buttonType="outline"
            rounded={true}
            iconOnly={true}
            ripple="dark"
            className="ml-5 md:ml-20 h-20 w-20 border-0"
        >
            <Icon name="apps" color='gray' size="3xl"/>
        </Button>
        <img loading="lazy" 
        className="cursor-pointer ml-2 h-12 w-12 rounded-full" 
        src={session?.user?.image}
        onClick = {signOut}
        />

        </header>
    )
}

export default Header
