"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({ weight: '600', subsets: ['latin'] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-7 w-48 mr-4 ">
          <Image fill alt="Logo" src="/_logo.png" />
        </div>
        
      </Link>
      
      <div className="flex items-end gap-x-2">
      
        <Link href={isSignedIn ? "/dash1" : "/sign-up"}>
          <Button variant="outline" className="rounded-full">
            Get Started
          </Button>
        </Link>
        <Link href="/about">
          <Button variant="outline" className="rounded-full">
            About Us
          </Button>
        </Link>
        
      </div>
      
    </nav>
  )
}