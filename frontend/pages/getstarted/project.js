import Link from "next/link";
import React, { useEffect, useState } from "react";
import { viewProject, mintNFT } from "../api/mintel";
import Image from "next/image";

const project = () => {
  const [projects, setProjects] = useState([]);
  // const [minted, setMinted] = useState(false);

  const fetchProject = async () => {
    const project = await viewProject();
    console.log(project);
    setProjects(project);
  };

  useEffect(() => {
    fetchProject();
  }, []);

  const handleMintNFT = async (nftAddress, index) => {
    await mintNFT(nftAddress);
    setProjects((prevProjects) =>
      prevProjects.map((project, i) =>
        i === index ? { ...project, minted: true } : project
      )
    );
  };

  return (
    <div className=" bg-[#1e2c2e]">
      <div className="flex items-center text-center mr-14 justify-end ">
        <Link href="/getstarted" className="mr-3">
          <button className="shadow-md bg-gray-7 00 active:bg-white active:text-gray-800 hover:bg-slate-600 appearance-none border w-80 ml-9 mr-3 mt-4 rounded py-3 px-3 font-medium text-slate-50 leading-tight  hover:shadow-outline active:shadow-lg">
            Back
          </button>
        </Link>
      </div>
      <div className=" mt-20 ">
        <h1 className="text-4xl pl-28   text-slate-100 font-medium mb-4  -mt-5">
          Project Setting
        </h1>
        <p className="block text-slate-400 pl-28 text-sm font-bold mb-2 w-[960px]">
          Check your deployed projects here.
        </p>

        <div className="  h-screen  bg-[#1e2c2e]   ">
          <div className=" mb-4 mt-16 items-center lg:pl-[82px]  px-2  ">
            <h3 className="text-slate-200 text-3xl font-bold mb-2">Projects</h3>
            <hr className="w-80 border-2 border-slate-200" />

            <h3 className="text-md text-slate-400 font-bold pt-3 mt-2">
              Available Project
            </h3>
          </div>

          <div className="flex flex-wrap justify-center mt-4 ">
            {/* {to call view project} */}
            {projects.map((project, i) => (
              <div
                key={i}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 mx-4  px-2 mb-4"
              >
                <div
                  className="w-64 max-h-[368px] bg-black/60 rounded-lg border-none shadow-sm overflow-hidden"
                  key={i}
                >
                  <img
                    className="w-full h-48 object-cover"
                    src={`https://ipfs.io/ipfs/${project.uri.slice(7)}`}
                    alt={project.name}
                  />
                  <div className="p-4">
                    <div className="text-xl text-white font-medium">
                      {project.name ? project.name : "Not Available"}
                    </div>
                    <div className="text-xs text-white/50 font-normal">
                      <a
                        href={`https://areonscan.com/accounts/${project.nftAddress}`}
                        target="_blank"
                        className="hover:underline transition duration-100 ease-out"
                      >
                        {project.nftAddress}
                      </a>
                    </div>
                    <div className="mt-2 flex items-center">
                      <div className="bg-blue-500 text-white rounded-full py-1 px-2 text-xs uppercase mr-2">
                        ${project.price}
                      </div>
                      <div className="bg-blue-500 text-white rounded-full py-1 px-2 text-xs uppercase mr-2">
                        {project.symbol ? project.symbol : "NIL"}
                      </div>
                    </div>
                    <div className="text-center  justify-start">
                      {project.minted && (
                        <div className="text-green-500 font-semibold p-5 my-2 mt-4 mb-2">
                          NFT Minted Successfully!
                        </div>
                      )}
                      {!project.minted && (
                        <button
                          onClick={() => handleMintNFT(project.nftAddress, i)}
                          className="text-md bg-green-400 text-black  p-5 my-2 shadow-md appearance-none border w-32 mt-4 rounded-md py-3 px-3 font-semibold active:bg-black active:text-white hover:bg-green-300 transition duration-200 ease-in  leading-tight  hover:shadow-outline active:shadow-lg"
                        >
                          Mint
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default project;
