import { redirect } from 'next/navigation'
import {i18n} from "../../i18n";

export default async function MainPage(){



  redirect(`/${i18n.defaultLocale}`)
}