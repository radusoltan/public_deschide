"use client"
import {redirect, useParams, usePathname} from "next/navigation"
import {i18n} from "../../../../../i18n";
import {NextIntlClientProvider} from 'next-intl/client'
import {Menu} from "@headlessui/react"

export const LocaleSwitcher = ()=>{

  const params = useParams()

  const pathname = usePathname()

  const redirectToPathname = (locale) => {

    if (!pathname) return '/'

    const segments = pathname.split('/')

    segments[1] = locale

    return segments.join('/')

  }

  return <Menu as="div" classname="relative ml-3">
    <div>
      <Menu.Button className="flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
        <span className="sr-only">Open user menu</span>
        {/*<FlagIcon countryCode={selectedLanguage}/>*/}
        {/*{selectedLanguage}*/}
        RO
        <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
        >
          <path
              fillRule="evenodd"
              d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
              clipRule="evenodd"
          />
        </svg>
      </Menu.Button>
    </div>
    <ul>
      {i18n.locales.map((locale, index)=>(<li key={index}>{
        redirectToPathname(locale)
      }</li>))}
    </ul>

  </Menu>
}