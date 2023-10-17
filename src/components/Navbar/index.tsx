'use client'

import { useState } from 'react'

import { Dialog } from '@headlessui/react';

import LMSE from '@/assets/logos/logo-lmse.png';

import { List, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const navList = [
  { name: 'Vídeo Institucional', href: 'video', samePage: false },
  { name: 'Sobre', href: 'about', samePage: false },
  { name: 'Serviços Oferecidos', href: 'service', samePage: false },
  { name: 'Parceiros', href: 'partner', samePage: false },
  { name: 'Time', href: 'team', samePage: false },
  { name: 'Cases', href: 'cases', samePage: true },
  { name: 'Clientes', href: 'client', samePage: false },
  { name: 'Produtos', href: 'product', samePage: false },
  { name: 'Contato', href: 'footer', samePage: false },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg shadow-stone-300 fixed w-screen z-10 ">
      
      {/* Desktop Nav */}
      <nav className="flex items-center justify-around p-6 lg:px-8" aria-label="Global">
        
        {/* Logo */}
        <div className="flex">
          <a href="https://www.lmse.com.br" className="-m-1.5 p-1.5">
            <Image
              className="w-max h-8"
              src={LMSE}
              alt="" />
          </a>
        </div>
        
        {/* Botão Hamburger */}
        <div className="flex xl:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <List size={32} className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden xl:flex xl:gap-x-12">
          {navList.map((item) => (
            item.samePage === true ?
              <Link
                key={item.name}
                href={`/${item.href}`}
                className="text-sm font-semibold leading-6 text-gray-900 hover:bg-sky-400 hover:text-stone-100 px-2.5 py-1 rounded-2xl">
                {item.name}
              </Link> :
              <Link
                key={item.name}
                href={`#${item.href}`}
                className="text-sm font-semibold leading-6 text-gray-900 hover:bg-sky-400 hover:text-stone-100 px-2.5 py-1 rounded-2xl">
                {item.name}
              </Link>

          ))}
        </div>
      </nav>
      {/* Mobile Sidebar */}
      <Dialog as="div" className="xl:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {
                  navList.map((item) => (
                    <a
                      key={item.name}
                      href={`#${item.href}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-sky-400 hover:text-stone-100">
                      {item.name}
                    </a>
                  ))
                }
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header >
  )
}
