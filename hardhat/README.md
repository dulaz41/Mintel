# Mintel Smart Contract

Mintel is an ERC721-compliant smart contract deployed on the AREON blockchain. It provides a streamlined and user-friendly platform for creators to mint and manage NFTs with customizable options. This README outlines the features, usage, and deployment details of the Mintel smart contract.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Usage](#usage)
- [Deployment](#deployment)
- [Configuration](#configuration)
- [Owner Functions](#owner-functions)
- [Withdrawal](#withdrawal)

## Overview

Mintel is an ERC721Enumerable contract that extends the OpenZeppelin contracts ERC721Enumerable and Ownable. It introduces features to facilitate the creation, minting, and management of NFTs on the AREON blockchain. Key functionalities include minting NFTs, setting limits, revealing NFTs, and adjusting pricing and URIs.

## Features

1. **Flexible Minting:** Users can mint NFTs with a specified quantity, subject to limits configured by the contract owner.
2. **Revealing NFTs:** Owners have the option to reveal NFTs to the public, unlocking the metadata URI for all minted tokens.
3. **Customizable URI:** The base URI, extension, and not revealed URI are customizable, allowing creators to define the metadata location for their NFTs.
4. **Configurable Limits:** Maximum supply, minting amount per session, and NFTs per address limits can be configured to control the contract's behavior.
5. **Royalty Distribution:** The contract supports royalty distribution to multiple creators based on configured percentages.
6. **Secure Ownership:** Only the contract owner can execute certain critical functions, ensuring control over essential aspects.

## Usage

### Minting

To mint NFTs, users can call the `mint` function by providing the desired quantity and corresponding payment in Ether. Ensure the minting conditions, such as maximum supply and per-session limits, are satisfied.

### Revealing NFTs

Owners can reveal NFTs to the public by calling the `reveal` function, making the metadata URI accessible for all minted tokens.

### Token Information

Token information, including the current base URI, not revealed URI, and extension, can be retrieved using the corresponding getter functions.

## Deployment

Deploy the Mintel smart contract on the AREON blockchain by providing the required constructor parameters: name, symbol, initial base URI, initial not revealed URI, maximum supply, maximum mint amount per session, and NFTs per address limit. Additionally, provide arrays of creators and their corresponding royalty percentages.

## Configuration

Owners can adjust various contract parameters such as minting cost (`setCost`), maximum mint amount per session (`setmaxMintAmount`), base URI (`setBaseURI`), base extension (`setBaseExtension`), and not revealed URI (`setNotRevealedURI`). Limits like NFTs per address can also be modified (`setNftPerAddressLimit`).

## Owner Functions

The contract includes functions that can only be executed by the owner, ensuring control over critical aspects of the contract. These functions include revealing NFTs, adjusting limits, and updating configuration parameters.

## Withdrawal

The owner can withdraw the contract's Ether balance using the `withdraw` function, transferring funds to the owner's address.

---
