const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("TokenModule", (m) => {

  // var to return it 
  const tokenContract  = m.contract("Token", ["SilopiToken", 100] );
  /*
  ("Token", ["SilopiToken", 100] 
  Token is the name of the
    we have a constructor (args* )
    in this case (nameToken , cap )
    (string memory _name, uint _cap) = ["SilopiToken", 100]
  */

  return { tokenContract };
});
