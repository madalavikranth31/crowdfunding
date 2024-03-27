import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface),'0x0232d25b25333A216b79ACd766Dd4A3A981d7135');//enter your address after deployng
export default instance;
