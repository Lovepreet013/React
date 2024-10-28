import React, { useState } from 'react'
import { useGithubAccountData } from './useGithubAccountData'

const GithubDataUsage = () => {
    const [account, setAccount] = useState('')
    const [inputValue, setInputValue] = useState('')
    const { accountData, error } = useGithubAccountData(account)

    const handleRequest = (e) => {
        e.preventDefault()
        setAccount(inputValue)
        setInputValue('')
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Enter GitHub username"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleRequest}>Check User</button>

            {!account ? (
                <p>Please provide a GitHub username.</p>
            ) : error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : (
                accountData && (
                    <p>
                        GitHub user {accountData.name || 'N/A'} has{' '}
                        {accountData.public_repos || 0} public repositories.
                    </p>
                )
            )}
        </div>
    )
}

export default GithubDataUsage
