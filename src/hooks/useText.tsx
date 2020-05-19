import {useTranslation} from "react-i18next";
import {TranslatableText} from "../locales/English";

export default function useText() {
    const { t, } = useTranslation()
    return t as (translatableText:TranslatableText) => String
}