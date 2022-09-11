import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { US as EN, RO, RU } from 'country-flag-icons/react/1x1'
import { countries } from 'country-flag-icons'
import { useRouter } from 'next/router'

export default function LanguageSwitcher() {

  const {locale, locales} = useRouter()

  
  
  return (
    <Menu as="div" className="relative items-center md:order-2">
      <div>
        <Menu.Button className="inline-flex justify-center items-center p-2 text-sm text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
          <EN title='US' className='mr-2 w-5 h-5 rounded-full'/>
          EN
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-30 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              <a className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white'>
                <div className='inline-flex items-center'>
                  <EN title="United States" className="h-3.5 w-3.5 rounded-full mr-2" />
                  EN
                </div>
              </a>
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              
              <a className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white'>
                <div className='inline-flex items-center'>
                  <RO title="Romania" className="h-3.5 w-3.5 rounded-full mr-2"/>
                  RO
                </div>
              </a>
              
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              <a className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white'>
                <div className='inline-flex items-center'>
                  <RU tutle='Russian' className='h3.5 w-3.5 rounded-full mr-2' />
                </div>
                RU
              </a>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

