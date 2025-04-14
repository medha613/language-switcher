import { useTranslations } from "next-intl"

export default function AboutPage(){
    
    const t = useTranslations("AboutPage")

    return(
        <>
        <h2>{t("title")}</h2>
        
        </>
    )
}