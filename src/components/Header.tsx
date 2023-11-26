'use client';
import React from 'react'
import Container from './Container'
import Logo from './Logo'
import { BsCart } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { useSession,signIn,signOut } from 'next-auth/react';
import { FiLogOut } from "react-icons/fi";
import Image from 'next/image';





const Header = () => {
    const {data: session} = useSession();
    console.log(session);
  return (
    <div className='bg-bodyColor h-20'>
        <Container className='h-full flex items-center md:gap-x-5 justify-between md:justify-start'> 
            {/* {logo} */}
            <Logo/>
            {/* Search Field */}
            <div className='searchDiv'>
                <FiSearch className="text-gray-500 group-focus-within:text-darkText duration-200"/>
                <input type="text" placeholder='search for products'
                className='placeholder:text-sm flex-1 outline-none' />
            </div>
            {/* Login/Register */}
            {!session &&(
                 <div
                 onClick={()=> signIn()}
                  className='headerDiv'>
                     <CiUser/>
                     <p className='text-sm font-semibold'>Login/Registar</p>
                 </div>
            )}
            {/* Cart button */}
            <div className='cartDiv'>
                <BsCart className="text-xl"/>
                <p className='text-sm font-semibold'>$0.00</p>
                <span className='cartSpan'>
                    0
                </span>
            </div>
            {/* {user Image} */}
            {
                session && <Image 
                src= {session?.user?.image as string} 
                alt='user image'
                 width={50} 
                 height={50}
                 className='rounded-full object-cover'/>
            }
            {/* logout button */}
           {session && (
             <div 
             onClick={()=>signOut()}
             className='headerDiv px-2 gap-x-2 cursor-pointer'>
                 <FiLogOut className="text-2xl"/>
                 <p className='text-sm font-semibold'>Logout</p>
             </div>
           )}
            
        </Container>
    </div>
  )
}

export default Header