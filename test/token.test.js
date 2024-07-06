const { describe } = require("mocha");


const {ethers} = require("hardhat");
const { expect } = require("chai");


describe("deploy the ERC4626 token Contract to BSC Network",async()=>{

    let user, erc4262, myToken;

   beforeEach(async()=>{
    [owner, user, user1]=await ethers.getSigners()
   })
   console.log(owner,"address")



    const ERC4626Token = await ethers.getContractFactory("TokenA");
    
    // erc4262=await ERC4626Token.connect(owner).deploy()
    // console.log("Deploying Contract...",erc4262.address);



    const MyToken = await ethers.getContractFactory("MyToken");

    myToken = await MyToken.connect(owner).deploy()
 
    const token = await ERC4626Token.deploy(myToken.address);

    console.log("Deploying MyToken Contract...", myToken.address);

    expect(token.address).to.not.equal("");

    // await token.transfer(ethers.provider.getSigner().address, "100000000000000000000");

    // const balance = await token.balanceOf(ethers.provider.getSigner().address);
    // console.log("Your ERC4626 token balance is: ", balance.toString());


  });
