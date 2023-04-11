"use client"

import {useTranslations} from "next-intl";

export default async function Home({params:{lang}}) {

  const t = useTranslations('Index')

  return (
    <main className="flex min-h-screen">
      APP {lang}
      <h1>{t('title')}</h1>


    </main>
  )
}
