import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import React from 'react'
import Link from 'next/link';
import { UserButton, auth } from "@clerk/nextjs";
import { Separator } from '@/components/ui/separator';

type Props = {}

const DashboardPage = (props: Props) => {
    return (
        <>
            <div className="grainy min-h-screen">
                <div className="max-w-7xl mx-auto p-10">
                    <div className="h-14"></div>
                    <div className="flex justify-between items-center md:flex-row flex-col">
                      <div className='flex items-center'>
                      <Link href="/">
                <Button className="bg-green-600" size="sm">
                  <ArrowLeft className="mr-1 w-4 h-4" />
                  Back
                </Button>
              </Link>
              <div className="w-4"></div>
                    <h1 className='text-3xl font-bold text-gray-900'> Minhas notas </h1>
                    <div className="w-4"></div>
                    <UserButton/>
                      </div>
                    </div>
                    <div className="h8"></div>
                    <Separator/>
                     <div className="h8"></div>
               


                </div>
            </div>
        </>
    );
};

export default DashboardPage;