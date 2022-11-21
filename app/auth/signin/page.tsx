import React from 'react'
import { getProviders, signIn } from "next-auth/react"
import Image from 'next/image';
import SignInComponent from './SignInComponent';
import { unstable_getServerSession } from 'next-auth';

async function SignInPage() {
    const providers = await getProviders();



    return (
        <div className='grid justify-center'>
            <div className=''>
                <Image className="rounded-full mx-2 object-cover" src="https://links.papareact.com/161" alt="" width="700" height="700" />
            </div>

            <SignInComponent providers={providers} />
        </div>
    )
}

export default SignInPage