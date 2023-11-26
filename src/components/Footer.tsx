import React from 'react'
import Container from './Container';
import Logo from './Logo';
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='w-full bg-darkText text-slate-100'>
            <Container className='grid grid-colls-1 md:grid-colls-2 lg:grid-cols-4 gap-10'>
                <div className='flex flex-col gap-y-4'>
                    <Logo />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam vitae porro pariatur alias ipsam voluptatibus ad voluptatum error magni quam.</p>
                    <div>
                        <a href="https://www.youtube.com/">
                            <span className='bg-slate-100 text-darkText p-1 inline-flex items-center justify-center rounded-md text-lg hover:bg-orange-600 hover:text-white cursor-pointer duration-200'><FaYoutube /></span>

                        </a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer;