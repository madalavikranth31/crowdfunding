import React, {Component} from 'react';
import { Card } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Campaign from '../ethereum/campaign';
//import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';
import Layout from '../components/layout';
import {Link} from '../routes';

class CampaignIndex extends Component{

   static async getInitialProps() {
      const campaigns = await factory.methods.getDeployedCampaigns().call();
      const campaignTitlesAndAddresses = [];
      for (let i = 0; i < campaigns.length; i++) {
        const campaign = Campaign(campaigns[i]);
        const summary = await campaign.methods.getSummary().call();
        campaignTitlesAndAddresses.push({
          address: campaigns[i],
          title: summary[0]
        });
      }
      return { campaignTitlesAndAddresses };
    }
    

   renderCampaign(){
      const items= this.props.campaignTitlesAndAddresses.map(campaign =>{
         return{
         header: campaign.title,
         description: (<Link route={`campaign/${campaign.address}`}>
         <a> View Campaign</a>
         </Link>
         ),
         fluid: true
      };
   });
       
      return <Card.Group items={items}/>; 

      }
      
   
   render(){
      return (
         <Layout>
            
            <div> 
               <link
                  rel="stylesheet"
                  href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
               ></link>
            
               <h3 style={{ padding: '0 10px' }}>Campaigns List</h3>
            
               <Link route='/campaign/createcomtract'>
                  <a>
                     <Button floated="right"
                     content ="Create Campaign"
                     icon="add circle"
                     primary
                     />
                  </a>
               </Link>
               
               {this.renderCampaign()}
            
            </div>
         
         </Layout>
      )
   }
}

export default CampaignIndex;