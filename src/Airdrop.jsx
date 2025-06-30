import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import React from 'react';

export default function Airdrop() {
    //hook
    const wallet = useWallet();
    const {connection} = useConnection();

    //func
    async function sendAirdropToUser() {
       await connection.requestAirdrop(wallet.publicKey,1000000000)
    }
    return <div>
        <input type="text" placeholder="Enter your wallet address" />
        <button onClick={sendAirdropToUser}>Airdrop</button>
       
    </div>
}