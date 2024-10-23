import { useEffect } from "react"

export const useBackgroundColor = (color) => {
    useEffect(() => {
        document.body.style.backgroundColor = color

        return () => {
            document.body.style.backgroundColor = ''
        }
    })
}