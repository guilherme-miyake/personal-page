import {useTranslation} from "react-i18next";
import {Translation} from "../locales";

export default function useText<TranslatableText>(context: keyof Translation) {
    const {t,} = useTranslation(context)
    return t as (translatableText: keyof TranslatableText) => string
}