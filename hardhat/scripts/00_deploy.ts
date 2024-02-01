import { ethers } from "hardhat";
import {
  Mintel__factory,
  Mintel,
  MintelExtender__factory,
  MintelExtender,
} from "../typechain-types";

async function main() {
  const accounts = await ethers.getSigners();
  const deployer = accounts[0];
  const mintelFactory: Mintel__factory = (await hre.ethers.getContractFactory(
    "Mintel"
  )) as Mintel__factory;

  const initBaseURI = "https://";
  const initNotRevealedUri = "https://";
  const maxSupply = 10000; // Set your desired max supply
  const maxMintAmount = 10; // Set your desired max mint amount
  const nftPerAddressLimit = 5; // Set your desired NFT per address limit
  const creators = [deployer.address]; // Set the creators' addresses
  const royaltyPercentages = [10]; // Set the royalty percentages

  const mintel: Mintel = await mintelFactory.deploy(
    "Name",
    "Symbol",
    initBaseURI,
    initNotRevealedUri,
    maxSupply,
    maxMintAmount,
    nftPerAddressLimit,
    creators,
    royaltyPercentages
  );
  await mintel.deployed();
  console.log(`Mintel contract was deployed at address ${mintel.address}`);
  console.log(
    "-------------------------------------------------------------------"
  );

  // Deploy MintelExtender contract
  const mintelExtenderFactory: MintelExtender__factory =
    (await hre.ethers.getContractFactory(
      "Mintel_extender"
    )) as MintelExtender__factory;
  const mintelExtender: MintelExtender = await mintelExtenderFactory.deploy();
  await mintelExtender.deployed();
  console.log(
    `MintelExtender contract was deployed at address ${mintelExtender.address}`
  );

  // // Add a project to MintelExtender
  // const projectName = "ProjectName";
  // const projectSymbol = "PNS";
  // const projectPrice = 1;
  // const projectURI = "https://project-uri.com";
  // const addProjectTx = await mintelExtender.addProject(
  //   projectName,
  //   projectSymbol,
  //   projectPrice,
  //   mintelContract.address,
  //   projectURI
  // );
  // await addProjectTx.wait();
  // console.log(`Project added to MintelExtender`);

  // // View projects in MintelExtender for the deployer
  // const numProjects = await mintelExtender.noOfProjects();
  // console.log(`Number of projects for the deployer: ${numProjects}`);

  // const projects = await mintelExtender.viewProjects();
  // console.log(`Projects for the deployer:`, projects);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
