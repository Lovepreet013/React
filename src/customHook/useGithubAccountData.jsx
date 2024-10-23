import React, { useEffect, useState } from 'react'

export const useGithubAccountData = (account) => {
    const [accountData, setAccountData] = useState({})

    useEffect(() => {
        if(!account){
            return
        }

       getData(account)

    }, [account])


    const getData = async (account) => {
        const response = await fetch(`https://api.github.com/users/${account}`)
        const data = await response.json()
        setAccountData(data)
    }

    return accountData
}


