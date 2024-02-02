import { ContractFactory, ethers } from "ethers";
import nft from "../../utils/Mintel.json";
import { Step8 } from "../../components/Steps";

const projectStruct =
  "(string name , string symbol ,uint price, address contractAddress, address owner, string uri)";
const abi = [
  "function addProject(string memory _name, string memory _symbol, uint256 _price, address _contractAddress, string memory _uri )  public payable",
  `function viewProjects() public view returns(${projectStruct}[] memory)`,
  "function noOfProjects() public view returns(uint)",
];

const contractAddr = "0x760Df1198d861832314965D84A3e3ACddCB96144";

const getContract = async () => {
  if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum); // A connection to the Ethereum network
    var signer = await provider.getSigner(); // Holds your private key and can sign things
    const Contract = new ethers.Contract(contractAddr, abi, signer);
    return Contract;
  } else {
    alert("No wallet detected");
  }
};

export async function viewProject() {
  const mintelContract = await getContract();
  console.log(mintelContract);
  var projects = await mintelContract.viewProjects();
  const structuredProjects = projects.map((project) => ({
    owner: project.owner,
    name: project.name,
    symbol: project.symbol,
    price: project.price.toNumber(),
    nftAddress: project.contractAddress,
    uri: project.uri,
  }));

  return structuredProjects;
}

export async function addProject(name, symbol, price, projectAddr, uri) {
  const mintelContract = await getContract();
  console.log(mintelContract);
  var tx = await mintelContract.addProject(
    name,
    symbol,
    price,
    projectAddr,
    uri,
    { value: 10000000000000000n }
  );
  await tx.wait();
}

{
  /* <Step8 viewProjects={viewProjects} />; */
}

export const noOfProjects = async () => {
  const mintelContract = await getContract();
  count = await mintelContract.noOfProjects();
  // console.log(count);
  return count;
};

export async function mintNFT(projectAddr) {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum); // A connection to the Ethereum network
    var signer = await provider.getSigner(); // Holds your private key and can sign things
    const pContract = new ethers.Contract(projectAddr, nft.abi, signer);
    const mintTX = await pContract.mint(2, { value: 100000000000000000n });
    await mintTX.wait();
  } catch (error) {
    console.log(error);
  }
}
