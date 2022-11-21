import { unstable_getServerSession } from 'next-auth';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LogoutButton from './LogoutButton';

async function Header() {

    const session = await unstable_getServerSession();

    if (session) return (
        <header className='sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm'>
            <div className='flex items-center space-x-2'>
                <Image className='rounded-full object-contain mx-2' src={session.user?.image!} alt="" width="50" height="10" />
                <div>
                    <p className='text-blue-400'>Logged In As: </p>
                    <p className='font-bold text-lg'>{session.user?.name}</p>
                </div>
            </div>
            <LogoutButton />


        </header>
    )

    return (
        <header className='sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm'>
            <div className='flex flex-col  space-y-5 items-center'>
                <div className='flex items-center space-x-2'>
                    <Image src="https://links.papareact.com/jne" alt="" width="50" height="10" />
                    <p className="text-blue-400">Welcome to Meta Messenger</p>
                </div>
                <Link href="/auth/signin" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Sign In</Link>
            </div>
        </header>
    )
}

export default Header