import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface),'YOUR_CONTRACT_ADDRESS_HERE');//enter your address after deployng
export default instance;
