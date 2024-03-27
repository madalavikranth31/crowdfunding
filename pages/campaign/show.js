import React ,{Component} from 'react';
import Layout from '../../components/layout';
import Campaign from '../../ethereum/campaign';
import {Card,Grid,Button} from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import Contribute from '../../components/formsubmit';
import {Link} from '../../routes';

class CampignShow extends Component{
 static async getInitialProps(props){
    const campaign= Campaign(props.query.address);
    const summary= await campaign.methods.getSummary().call();

    return {
        address: props.query.address,
        campaignTitle: summary[0],
        campaignDescription: summary[1],
        minimumContribution: summary[2],
        balance: summary[3],
        requestsCount: summary[4],
        approversCount: summary[5],
        manager: summary[6],
    };
 }


 renderCards(){
    const{
        balance,
        manager,
        minimumContribution,
        requestsCount,
        approversCount,
    }= this.props;
   const items=[
    {
        header:manager,
        meta:'address of manager',
        description:'This is the addres of manager',
        style:{overflowWrap: 'break-word'}
    },
    {
        header: web3.utils.fromWei(balance,'ether'),
        meta:'balance',
        description:'the amount of money present in eth'
    },
    {
        header:minimumContribution,
        meta:'minimum amount needed to contribute to the contract',
        description:'The minimmun eth to contribute in  Wei'
    },
    {
        header: requestsCount,
        meta:'count on requests',
        description:'Number of requests made'
    },
    {
        header: approversCount,
        meta:'approvers',
        description:'# contibutors approving the request'
    },
   ];
   return <Card.Group items={items}/>


 }
    render(){
        return (
            <Layout>
                
                <h2>{this.props.campaignTitle}</h2>
                <p style={{ fontSize: '15px' }}>{this.props.campaignDescription}</p>
                
                <Grid>
                    <Grid.Row>
                    <Grid.Column width={10}>
                        {this.renderCards()} 
                         
                    
                    </Grid.Column>
                    <Grid.Column width={6}>
                    <Contribute address={this.props.address}></Contribute>

                    </Grid.Column>
                    </Grid.Row>
                    


                    <Grid.Row>
                        <Grid.Column>
                        <Link route={`/campaign/${this.props.address}/requests`}> 
                       <a> <Button primary> View Requests</Button></a>
                       </Link> 
                        </Grid.Column>
                    
                    </Grid.Row>
                   
                      
                </Grid>
                
                
                </Layout>
        
        
        );
    }
}
export default CampignShow;