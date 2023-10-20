'use client'

import LMSE from '@/assets/logos/logo-lmse.png';

import { ArrowLeftCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {

  return (
    <header className="bg-white shadow-lg shadow-stone-300 fixed w-screen overflow-hidden z-10 ">
      {/* Desktop Nav */}
      <nav className="flex items-center px-4 py-4 justify-around" aria-label="Global">
        {/* Logo */}
        <div className="flex">
          <a href="https://lmse.com.br" className="-m-1.5 p-1.5">
            <span className="sr-only">LMSE - Leandro Morilhas Soluções Educacionais</span>
            <Image
              className="h-8 w-auto"
              src={LMSE}
              alt="" />
          </a>
        </div>
        {/* Btn icon back */}
        <div className="flex md:hidden">
          <Link href="https://lmse.com.br"  className="hover:text-sky-400">
            <ArrowLeftCircle size={32} className="h-6 w-6" aria-hidden="true" />
          </Link>
        </div>
        <div className="hidden md:flex">
          <Link
            href="https://lmse.com.br"
            className="text-sm font-semibold leading-6 text-gray-900 hover:bg-sky-400 hover:text-stone-100 px-2.5 py-1 rounded-2xl">
            Voltar
          </Link>
        </div>
      </nav>
    </header >
  )
}
