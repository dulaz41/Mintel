/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "ERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Enumerable__factory>;
    getContractFactory(
      name: "IERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Enumerable__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "DestinationMinter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DestinationMinter__factory>;
    getContractFactory(
      name: "MinHub_extender",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MinHub_extender__factory>;
    getContractFactory(
      name: "MinHub",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MinHub__factory>;
    getContractFactory(
      name: "Mintel_extender",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Mintel_extender__factory>;
    getContractFactory(
      name: "Mintel",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Mintel__factory>;
    getContractFactory(
      name: "SourceMinter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SourceMinter__factory>;
    getContractFactory(
      name: "Withdraw",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Withdraw__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "ERC721Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Enumerable>;
    getContractAt(
      name: "IERC721Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Enumerable>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "DestinationMinter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DestinationMinter>;
    getContractAt(
      name: "MinHub_extender",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MinHub_extender>;
    getContractAt(
      name: "MinHub",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MinHub>;
    getContractAt(
      name: "Mintel_extender",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Mintel_extender>;
    getContractAt(
      name: "Mintel",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Mintel>;
    getContractAt(
      name: "SourceMinter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SourceMinter>;
    getContractAt(
      name: "Withdraw",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Withdraw>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}