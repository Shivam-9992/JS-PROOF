let nfts = [];

const mintNFT = (name, artist, year,id) => {
  const nft = {
    name: name,
    artist: artist,
    year: year,
    id: id,
  };
  nfts.push(nft);
};

const listNFTs = () => {
  for (let i = 0; i < nfts.length; i++) {
    console.log("Name: " + nfts[i].name);
    console.log("Artist: " + nfts[i].artist);
    console.log("Year: " + nfts[i].year);
    console.log("NFT ID: " + nfts[i].id);
    console.log("---------------------------");
  }
};

const getTotalSupply = () => {
  console.log("Total Supply: " + nfts.length);
};

mintNFT("Einstein: His Life and Universe", "Walter Isaacson", 2007,1);
mintNFT("Steve Jobs", "Walter Isaacson", 2011,2);
mintNFT("Elon Musk", "Walter Isaacson", 2023,3);

listNFTs();
getTotalSupply();
