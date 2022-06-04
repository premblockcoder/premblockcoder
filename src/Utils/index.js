
import React, { useEffect, useState } from 'react';
import { Wallet, utils } from 'ethers';
import "react-native-get-random-values"
import "@ethersproject/shims"
import { ethers } from 'ethers';
import AsyncStorage from '@react-native-async-storage/async-storage'

//const provider = ethers.getDefaultProvider('rinkeby');
//const provider = new ethers.providers.JsonRpcProvider('https://rpc-mumbai.maticvigil.com/v1/20f15278a96284b49a7c487e414de7419515d496')
const provider = new ethers.providers.JsonRpcProvider('https://polygon-rpc.com')   
export const generateMnemonics = () => {
  const Mnemonic = utils.entropyToMnemonic(utils.randomBytes(16)).split(' ')
  AsyncStorage.setItem('Mnemonic', JSON.stringify(Mnemonic))
}


var walletMnemonic
export async function loadWalletFromMnemonics(mnemonics, walletName, walletPass, walletConfirmPass) {

  if (!(mnemonics instanceof Array) && typeof mnemonics !== 'string')
    throw new Error('invalid mnemonic');
  else if (mnemonics instanceof Array)
    mnemonics = mnemonics.join(' ');

  walletMnemonic = Wallet.fromMnemonic(mnemonics);
  let { address, privateKey } = walletMnemonic

  if (address && walletName) {
    const availableList = await AsyncStorage.getItem('walletInfoList');
    let updatedList = [];

    if (availableList) {
      updatedList = [...JSON.parse(availableList)];
    }
    updatedList.push({ address, walletName, walletPass, walletConfirmPass, privateKey });
    await AsyncStorage.setItem('walletInfoList', JSON.stringify(updatedList))
  }
  return true;
  // return new Wallet(address);
}


export const getBal = async (address) => {
  let bal
  if (address) {
    await provider.getBalance(address).then((balance) => {
      // convert a currency unit from wei to ether
      bal = ethers.utils.formatEther(balance)
    })
  }
  return bal
}


export const sendTrans = async (toAddress, amount, walletKey) => {
    const keyWallet = new ethers.Wallet(walletKey, provider)

    let wallet = await keyWallet?.connect(provider)
    let tx = {
      to: toAddress,
      value: utils.parseEther(amount)
    }
    let trans = await wallet?.sendTransaction(tx)
    return trans
}


export function loadWalletFromPrivateKey(pk) {
  try {
    if (pk.indexOf('0x') !== 0) pk = `0x${pk}`;
    return new Wallet(pk, provider);
  } catch (e) {
    throw new Error('invalid private key');
  }
}

export const gasFee = async () => {
  let gasPrice = await provider.getGasPrice()
  // // ...often this gas price is easier to understand or
  // // display to the user in gwei
  let final = utils.formatUnits(gasPrice)
  return final
}

