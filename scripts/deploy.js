const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    
    const gameContract = await gameContractFactory.deploy(                        
      ["Leo", "Aang", "Pikachu"],       
      ["QmVx79jpJTCvh9B8M6ZNucB4ehxLJyZVNsVqSfrwLwSKCG", 
      "QmetNRFG8t55zndy9WDBZfLcW37FGSQYELYAt3poiRWTbL", 
      "QmRippRQfe5zwRwudtwEy1YjXYpnQ1pt7dKXNcfu66moUS"],
      [100, 200, 300],                    
      [100, 50, 25],
      "Elon Musk",
      "Qmens3TSDu2rpf7KSdoNGZdnLkN9CnS2mX7eyt6KUF4uNi",
      10000,
      50
    );
  
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
  
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain()