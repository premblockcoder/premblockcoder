
import React, { useEffect, useState } from 'react';
import { Wallet, utils } from 'ethers';
import "react-native-get-random-values"
import "@ethersproject/shims"
import { ethers } from 'ethers';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ActivityIndicator } from 'react-native'


export const generateMnemonics = () => {
  const Mnemonic = utils.entropyToMnemonic(utils.randomBytes(16)).split(' ')
  AsyncStorage.setItem('Mnemonic', JSON.stringify(Mnemonic))
}


export function loadWalletFromMnemonics(mnemonics,) {
  if (!(mnemonics instanceof Array) && typeof mnemonics !== 'string')
    throw new Error('invalid mnemonic');
  else if (mnemonics instanceof Array)
    mnemonics = mnemonics.join(' ');

  const wallet = Wallet.fromMnemonic(mnemonics)
  // if (!wallet) {
  //   <ActivityIndicator size={"large"} />
  // }
  console.log(wallet, "wallet ------")
  AsyncStorage.mergeItem('Gen_wallet_user_data', JSON.stringify(wallet))
  return wallet
  //  return new Wallet(privateKey, PROVIDER);
}

// export function loadWalletFromMnemonics(mnemonics) {
//   if (!(mnemonics instanceof Array) && typeof mnemonics !== 'string')
//       throw new Error('invalid mnemonic');
//   else if (mnemonics instanceof Array)
//       mnemonics = mnemonics.join(' ');

//   const { address } = Wallet.fromMnemonic(mnemonics);
//   return new Wallet(address, PROVIDER);
// }


export function loadWalletFromPrivateKey(pk) {
  try {
    if (pk.indexOf('0x') !== 0) pk = `0x${pk}`;
    return new Wallet(pk, PROVIDER);
  } catch (e) {
    throw new Error('invalid private key');
  }
}

