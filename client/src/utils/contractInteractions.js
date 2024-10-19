import Web3 from 'web3';
import { contractAddress, contractABI } from './contractABI';

const web3 = new Web3(Web3.givenProvider);
const contract = new web3.eth.Contract(contractABI, contractAddress);

export const hashFile = async (file) => {
  const arrayBuffer = await file.arrayBuffer();
  const hash = web3.utils.sha3(new Uint8Array(arrayBuffer));
  return hash;
};

export const uploadDocumentHash = async (fileHash) => {
  const accounts = await web3.eth.getAccounts();
  await contract.methods.addDocument(fileHash).send({ from: accounts[0] });
};

export const verifyDocumentHash = async (fileHash) => {
  return await contract.methods.verifyDocument(fileHash).call();
};
