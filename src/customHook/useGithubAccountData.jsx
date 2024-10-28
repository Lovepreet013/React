import React, { useEffect, useState } from 'react'

export const useGithubAccountData = (account) => {
    const [accountData, setAccountData] = useState({})
    const [error, setError] = useState(null)

    const getData = async (account) => {
        try {
            const response = await fetch(`https://api.github.com/users/${account}`)
            if (!response.ok) {
                throw new Error(`User not found: ${response.status}`)
            }
            const data = await response.json()
            setAccountData(data)
            setError(null) // Clear any previous errors
        } catch (error) {
            setError(error.message)
            setAccountData({}) // Clear account data in case of an error
        }
    }

    useEffect(() => {
        if (!account) {
            return
        }
        getData(account)
    }, [account])

    return { accountData, error }
}
