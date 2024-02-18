import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface),'0x3859D90C1177855D034F4051Ad6E804fACC6D414');//enter your address after deployng
export default instance;
