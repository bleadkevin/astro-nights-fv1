import { useState, useEffect } from "react";
import { Keypair } from "@solana/web3.js";

const localStorageKey = "superPlaygroundKey";

const useLocalWallet = () => {
  const [wallet, setWallet] = useState<Keypair | null>(null);
  console.log(wallet)
  useEffect(() => {
    const storedKey = localStorage.getItem(localStorageKey);
    if (storedKey) {
      const secretKey = Uint8Array.from(JSON.parse(storedKey));
      const keypair = Keypair.fromSecretKey(secretKey);
      const localsession = Keypair.fromSecretKey(storedKey);
      setWallet(keypair);
    } else {
      const keypair = Keypair.generate();
      localStorage.setItem(localStorageKey, JSON.stringify(Array.from(keypair.secretKey)));
      console.log(keypair);
      setWallet(keypair);
      return;
    }
  }, []);

  const getPublicKey = () => {
    return wallet?.publicKey ?? null;
  };

  return { wallet, getPublicKey };
};

export default useLocalWallet;