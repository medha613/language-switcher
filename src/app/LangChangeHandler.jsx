"use client"

import { useParams } from "next/navigation"
import { useEffect } from "react"

export const LangChangeHandler = () => {
    const {locale} = useParams()


    useEffect(() => {
        document.documentElement.setAttribute("lang", locale)
    })
    return null;
}  