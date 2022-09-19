/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import About from '../components/About';
import Certificates from '../components/Certificates';
import Career from '../components/Career';
import Footer from './footer';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Main() {
  return (
    <>
      {/* <div className="top-14 px-4 [counter-reset:section_-1] xs:px-10 md:px-24 lg:px-50">
      <section class="flex-column my-auto mx-auto flex min-h-screen max-w-4xl">
        <div class="relative bottom-6 my-auto short:bottom-0">
          <p class="paragraph mb-3.5">Hi, I'm</p>
          <h1 class="heading mb-4">Pedro Sousa.</h1>
          <h1 class="heading -mt-1.5 mb-4 tracking-[-0.025em] text-slate-400 dark:text-secondary-text">I make web apps.</h1><p class="paragraph mb-5 max-w-md">A developer that loves creating digital products, front to back. Currently working on personal projects while finishing a course sponsored by 
          <a href="https://www.xpinc.com/" target="_blank" rel="noreferrer" class="anchor">XP Inc.</a></p>
          <button class="h-9 rounded-md px-4 font-medium shadow-sm transition border-[0.5px] border-slate-200 dark:border-neutral-800 dark:border-2 dark:shadow-none hocus:dark:border-neutral-100 undefined" type="button">Contact me</button></div></section> */}
        {/* <main class="flex-1">
            <div class="h-96 bg-amber-400 p-10">
                <h1 class="text-4xl">Top Content</h1>
            </div>
            <div class="h-96 bg-white p-10">
                <h1 class="text-4xl">Middle Content</h1>
            </div>
            <div class="h-96 bg-green-400 p-10">
                <h1 class="text-4xl">Middle Content</h1>
            </div>
            <div class="h-96 bg-indigo-400 p-10">
                <h1 class="text-4xl">Last Content</h1>
            </div>
        </main> */}
    <div className="relative top-14 w-screen h-screen overflow-y-auto position-relative">
      <main class="flex-1 h-screen overflow-y-auto overflow-x-hidden position-relative">
        <About />
        <Certificates />
        <Career />
        <Footer />
      </main>
    </div>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      {/* <div className="w-20">
        <Disclosure as="aside" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14">
                  
                </div>
              </div>
            </>
          )}
        </Disclosure>
        
      </div> */}
    </>
  )
}
