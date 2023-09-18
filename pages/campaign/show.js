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
        minimumContribution: summary[0],
        balance: summary[1],
        requestsCount: summary[2],
        approversCount: summary[3],
        manager: summary[4],
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
                <h3>Campaign Show</h3>
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