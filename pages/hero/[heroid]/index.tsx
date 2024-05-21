"use client"

import React from 'react'

import { useRouter } from 'next/router';
import Image from 'next/image';
import { urlForImage } from "@/sanity/lib/image";
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Providers from '@/components/Providers';
import { useHeroSectionById } from '@/hooks/useHeroSectionById';
import Head from 'next/head';
import Container from '@/components/Container';


const MyHero = () => {
    const router = useRouter();
    const { id } = router.query;

    const hero = useHeroSectionById(id);
  
    return (
      <div>
  
        <Head>
            <title>Fleet-Feature</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="favicon.ico" />
        </Head>
        <Providers>
        <Navbar />
      <Container>
      <div className='flex flex-col justify-center items-center'>
        
        {hero ? (
          <div className="md:w-1/2 py-4  items-center">
          <h1 className="text-2xl font-bold flex justify-center items-center h-full mb-8">{hero?.title}</h1>
  
          {hero.image && (
              <Image
                src={urlForImage(hero.image.asset)}
                alt="Picture"
                width={200}
                height={200}
                quality={80}
                priority={false}
                placeholder="empty"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl my-6"
              />
            )}
  
          <h1 className="font-medium text-xl mb-6">Subtitle: {hero?.subtitle} </h1>
          
          <p className="">{hero?.summary}</p>
          
  
          
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      </Container>
      </Providers>
      </div>
    );
  }
  
  export default MyHero;