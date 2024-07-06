// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC4626.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenA is ERC4626 {
    constructor(IERC20 _asset) 
        ERC4626(_asset) 
        ERC20("MyVaultToken", "MVT") 
        // Ownable()
    {
       
    }

    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }

    function burn(uint256 amount) public  {
        _burn(msg.sender, amount);
    }
}