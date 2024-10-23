import React, { useState } from 'react';
import { useGithubAccountData } from './useGithubAccountData';

const GithubDataUsage = () => {
    const [account, setAccount] = useState('')
    const [inputValue, setInputValue] = useState('')
    const accountData = useGithubAccountData(account)

    const handleRequest = (e) => {
        e.preventDefault()
        setAccount(inputValue)
        setInputValue("")
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={handleRequest}>Check User</button>

            {!account ? (<p>please provide Github username</p>) : (
            <p>Github user {accountData.name} has {accountData.public_repos} public repositories.</p>
            )}
        </div>
    );
};

export default GithubDataUsage;



