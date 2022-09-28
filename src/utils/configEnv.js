export const configEnv = {
    80001: {
        rpc: "https://polygon-mumbai.g.alchemy.com/v2/G_y-QIx6x36GBlL-J2xd90ByJkOZ-FlY",
        currency: 'CRO',
        'ApercronLaunchpadUSDT': {
            contractAddress: '0x5eb6919A17A1906a6e44cc29B0837931f8822370',
            abi: [{ "inputs": [{ "internalType": "address", "name": "_devAddress", "type": "address" }, { "internalType": "address", "name": "_usdtAddress", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "inputs": [], "name": "PLATFORM_FEE", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "TOKEN_FEE", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "TOTAL_PERCENTAGE", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "USDTAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "uint256", "name": "launchTime", "type": "uint256" }, { "internalType": "uint256", "name": "endTime", "type": "uint256" }, { "internalType": "address", "name": "tokenAddress", "type": "address" }, { "internalType": "uint256", "name": "hardcap", "type": "uint256" }, { "internalType": "uint256", "name": "softcap", "type": "uint256" }, { "internalType": "uint256", "name": "totalTokenForSale", "type": "uint256" }, { "internalType": "uint256", "name": "tokenPerEth", "type": "uint256" }, { "internalType": "bool", "name": "isFairLaunch", "type": "bool" }, { "internalType": "bool", "name": "isRefund", "type": "bool" }, { "internalType": "string", "name": "uri", "type": "string" }], "internalType": "struct ApercronLaunchpadUSDT.CreateLaunch", "name": "_launchData", "type": "tuple" }], "name": "addTokenToLaunchpad", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "auditData", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_launchId", "type": "uint256" }, { "internalType": "uint256", "name": "usdtAmount", "type": "uint256" }], "name": "buyToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_launchId", "type": "uint256" }], "name": "cancelSale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_launchId", "type": "uint256" }], "name": "claimRemainingToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "currentLaunchID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "devAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_launchId", "type": "uint256" }], "name": "getUri", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "kycData", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "launchAddress", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "launchData", "outputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "launchOwner", "type": "address" }, { "internalType": "uint256", "name": "launchTime", "type": "uint256" }, { "internalType": "uint256", "name": "endTime", "type": "uint256" }, { "internalType": "address", "name": "tokenAddress", "type": "address" }, { "internalType": "uint256", "name": "hardcap", "type": "uint256" }, { "internalType": "uint256", "name": "softcap", "type": "uint256" }, { "internalType": "uint256", "name": "tokenPerEth", "type": "uint256" }, { "internalType": "uint256", "name": "totalTokenForSale", "type": "uint256" }, { "internalType": "uint256", "name": "totalSoldToken", "type": "uint256" }, { "internalType": "uint256", "name": "amountRaised", "type": "uint256" }, { "internalType": "bool", "name": "isFairLaunch", "type": "bool" }, { "internalType": "uint256", "name": "amountWithdrawn", "type": "uint256" }, { "internalType": "bool", "name": "isRefund", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_devAddress", "type": "address" }], "name": "setDevAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_launchId", "type": "uint256" }, { "internalType": "bool", "name": "_kycStatus", "type": "bool" }, { "internalType": "string", "name": "_audit", "type": "string" }], "name": "setKycAndAudit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_usdtAddress", "type": "address" }], "name": "setUSDTAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "totalAmountRaised", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSales", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "uris", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "userLaunches", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_launchId", "type": "uint256" }, { "internalType": "uint256", "name": "_amountToWithdraw", "type": "uint256" }], "name": "withdrawAmount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }],
            isToken: false,
        },
        'ApercronLaunchpadEth': {
            contractAddress: '0xEb51D4495eD39Aa0A9Aea088D3C709C6307aB198',
            abi: [{ "inputs": [{ "internalType": "address", "name": "_devAddress", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "inputs": [], "name": "PLATFORM_FEE", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "TOKEN_FEE", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "TOTAL_PERCENTAGE", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "uint256", "name": "launchTime", "type": "uint256" }, { "internalType": "uint256", "name": "endTime", "type": "uint256" }, { "internalType": "address", "name": "tokenAddress", "type": "address" }, { "internalType": "uint256", "name": "hardcap", "type": "uint256" }, { "internalType": "uint256", "name": "softcap", "type": "uint256" }, { "internalType": "uint256", "name": "totalTokenForSale", "type": "uint256" }, { "internalType": "uint256", "name": "tokenPerEth", "type": "uint256" }, { "internalType": "bool", "name": "isFairLaunch", "type": "bool" }, { "internalType": "bool", "name": "isRefund", "type": "bool" }, { "internalType": "string", "name": "uri", "type": "string" }], "internalType": "struct ApercronLaunchpadEth.CreateLaunch", "name": "_launchData", "type": "tuple" }], "name": "addTokenToLaunchpad", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "auditData", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_launchId", "type": "uint256" }], "name": "buyToken", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_launchId", "type": "uint256" }], "name": "cancelSale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_launchId", "type": "uint256" }], "name": "claimRemainingToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "currentLaunchID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "devAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_launchId", "type": "uint256" }], "name": "getUri", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "kycData", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "launchAddress", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "launchData", "outputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "launchOwner", "type": "address" }, { "internalType": "uint256", "name": "launchTime", "type": "uint256" }, { "internalType": "uint256", "name": "endTime", "type": "uint256" }, { "internalType": "address", "name": "tokenAddress", "type": "address" }, { "internalType": "uint256", "name": "hardcap", "type": "uint256" }, { "internalType": "uint256", "name": "softcap", "type": "uint256" }, { "internalType": "uint256", "name": "tokenPerEth", "type": "uint256" }, { "internalType": "uint256", "name": "totalTokenForSale", "type": "uint256" }, { "internalType": "uint256", "name": "totalSoldToken", "type": "uint256" }, { "internalType": "uint256", "name": "amountRaised", "type": "uint256" }, { "internalType": "bool", "name": "isFairLaunch", "type": "bool" }, { "internalType": "uint256", "name": "amountWithdrawn", "type": "uint256" }, { "internalType": "bool", "name": "isRefund", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_devAddress", "type": "address" }], "name": "setDevAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_launchId", "type": "uint256" }, { "internalType": "bool", "name": "_kycStatus", "type": "bool" }, { "internalType": "string", "name": "_audit", "type": "string" }], "name": "setKycAndAudit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_newPlatformFee", "type": "uint256" }], "name": "setPlatformFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_newTokenFee", "type": "uint256" }], "name": "setTokenFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "totalAmountRaised", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSales", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "uris", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "userLaunches", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_launchId", "type": "uint256" }, { "internalType": "uint256", "name": "_amountToWithdraw", "type": "uint256" }], "name": "withdrawAmount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }],
            isToken: true,
        },
    },
    4:{
        rpc:'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
        currency:'ETH',
        'ApercronLaunchpadUSDT':{
            contractAddress:'0x8066152b761052c8929ea48De4f38664DB4ce846',
            abi:[{"inputs":[{"internalType":"address","name":"_devAddress","type":"address"},{"internalType":"address","name":"_usdtAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"PLATFORM_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOKEN_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOTAL_PERCENTAGE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDTAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"launchTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"hardcap","type":"uint256"},{"internalType":"uint256","name":"softcap","type":"uint256"},{"internalType":"uint256","name":"totalTokenForSale","type":"uint256"},{"internalType":"uint256","name":"tokenPerEth","type":"uint256"},{"internalType":"bool","name":"isFairLaunch","type":"bool"},{"internalType":"bool","name":"isRefund","type":"bool"},{"internalType":"string","name":"uri","type":"string"}],"internalType":"struct ApercronLaunchpadUSDT.CreateLaunch","name":"_launchData","type":"tuple"}],"name":"addTokenToLaunchpad","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"auditData","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_launchId","type":"uint256"},{"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"buyToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_launchId","type":"uint256"}],"name":"cancelSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_launchId","type":"uint256"}],"name":"claimRemainingToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentLaunchID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_launchId","type":"uint256"}],"name":"getUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"kycData","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"launchAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"launchData","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"launchOwner","type":"address"},{"internalType":"uint256","name":"launchTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"hardcap","type":"uint256"},{"internalType":"uint256","name":"softcap","type":"uint256"},{"internalType":"uint256","name":"tokenPerEth","type":"uint256"},{"internalType":"uint256","name":"totalTokenForSale","type":"uint256"},{"internalType":"uint256","name":"totalSoldToken","type":"uint256"},{"internalType":"uint256","name":"amountRaised","type":"uint256"},{"internalType":"bool","name":"isFairLaunch","type":"bool"},{"internalType":"uint256","name":"amountWithdrawn","type":"uint256"},{"internalType":"bool","name":"isRefund","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devAddress","type":"address"}],"name":"setDevAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_launchId","type":"uint256"},{"internalType":"bool","name":"_kycStatus","type":"bool"},{"internalType":"string","name":"_audit","type":"string"}],"name":"setKycAndAudit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_usdtAddress","type":"address"}],"name":"setUSDTAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalAmountRaised","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSales","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"uris","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userLaunches","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_launchId","type":"uint256"},{"internalType":"uint256","name":"_amountToWithdraw","type":"uint256"}],"name":"withdrawAmount","outputs":[],"stateMutability":"nonpayable","type":"function"}],
            isToken:false,
        },
        'ApercronLaunchpadEth':{
            contractAddress:'0x959Eb2Cfc9F7165D86e903bc6CDd653e1D17A49e',
            abi:[{"inputs":[{"internalType":"address","name":"_devAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"PLATFORM_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOKEN_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOTAL_PERCENTAGE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"launchTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"hardcap","type":"uint256"},{"internalType":"uint256","name":"softcap","type":"uint256"},{"internalType":"uint256","name":"totalTokenForSale","type":"uint256"},{"internalType":"uint256","name":"tokenPerEth","type":"uint256"},{"internalType":"bool","name":"isFairLaunch","type":"bool"},{"internalType":"bool","name":"isRefund","type":"bool"},{"internalType":"string","name":"uri","type":"string"}],"internalType":"struct ApercronLaunchpadEth.CreateLaunch","name":"_launchData","type":"tuple"}],"name":"addTokenToLaunchpad","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"auditData","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_launchId","type":"uint256"}],"name":"buyToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_launchId","type":"uint256"}],"name":"cancelSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_launchId","type":"uint256"}],"name":"claimRemainingToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentLaunchID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_launchId","type":"uint256"}],"name":"getUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"kycData","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"launchAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"launchData","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"launchOwner","type":"address"},{"internalType":"uint256","name":"launchTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"hardcap","type":"uint256"},{"internalType":"uint256","name":"softcap","type":"uint256"},{"internalType":"uint256","name":"tokenPerEth","type":"uint256"},{"internalType":"uint256","name":"totalTokenForSale","type":"uint256"},{"internalType":"uint256","name":"totalSoldToken","type":"uint256"},{"internalType":"uint256","name":"amountRaised","type":"uint256"},{"internalType":"bool","name":"isFairLaunch","type":"bool"},{"internalType":"uint256","name":"amountWithdrawn","type":"uint256"},{"internalType":"bool","name":"isRefund","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devAddress","type":"address"}],"name":"setDevAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_launchId","type":"uint256"},{"internalType":"bool","name":"_kycStatus","type":"bool"},{"internalType":"string","name":"_audit","type":"string"}],"name":"setKycAndAudit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newPlatformFee","type":"uint256"}],"name":"setPlatformFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newTokenFee","type":"uint256"}],"name":"setTokenFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalAmountRaised","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSales","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"uris","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userLaunches","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_launchId","type":"uint256"},{"internalType":"uint256","name":"_amountToWithdraw","type":"uint256"}],"name":"withdrawAmount","outputs":[],"stateMutability":"nonpayable","type":"function"}],
            isToken:true,
        },
    }
}