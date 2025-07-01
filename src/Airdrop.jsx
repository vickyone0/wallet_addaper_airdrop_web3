import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import React from 'react';

export default function Airdrop() {
    //hook
    const wallet = useWallet();
    const {connection} = useConnection();

    //func
    async function sendAirdropToUser() {
        const amount = document.getElementById("publicKey").value
       await connection.requestAirdrop(wallet.publicKey,amount*1000000000)
       alert("airdropped sol")
    }
    return <div>
        <input id= "publicKey" type="text" placeholder="Enter your wallet address" />
        <button onClick={sendAirdropToUser}>Airdrop</button>
       
    </div>
}