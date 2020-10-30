import {useTranslation} from "react-i18next";
import {Translation} from "../locales";

export default function useText<PageContext>(pageContext: keyof Translation) {
    const {t,} = useTranslation(pageContext)
    return t as (translatableText: keyof PageContext) => string
}