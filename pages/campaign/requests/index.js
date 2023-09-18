import {Link} from '../../../routes';
import React ,{Component} from 'react';
import { Button,Table } from 'semantic-ui-react';
import Layout from '../../../components/layout';
import Campaign from '../../../ethereum/campaign';
import TableRow from '../../../components/tablerow';


class RequestIndex extends Component{
      static async getInitialProps(props){
        const {address}=props.query;
        const campaign =Campaign(address);
        const requestCount= await campaign.methods.getRequestsCount().call();
        const approversCount= await campaign.methods.approversCount().call();
        const requests= await Promise.all(Array(parseInt(requestCount)).fill().map((element,index)=>{
            return campaign.methods.requests(index).call();
        }));

     
     
        return {address, requests, requestCount,approversCount};
      }

      renderRow(){
        return this.props.requests.map((request,index)=>{
            return <TableRow
            key={index} 
            id={index}
            request={request}
            address={this.props.address}
            approversCount={this.props.approversCount}
          > 
            </TableRow>
        });
      }


    render(){
        const {Header,Row,HeaderCell,Body}=Table;

        return(

           
            <Layout> <h1>requests list</h1> 
            <Link route={`/campaign/${this.props.address}/requests/new`}>
                 <a>
                <Button primary>Add Request</Button>
                </a></Link>
<Table>
    <Header>
        <Row> 
            <HeaderCell>ID</HeaderCell>
            <HeaderCell>Description</HeaderCell>
            <HeaderCell>Amount</HeaderCell>
            <HeaderCell>Reciptent</HeaderCell>
            <HeaderCell>Approval Count</HeaderCell>
            <HeaderCell>Approve</HeaderCell>
            <HeaderCell>Finalize</HeaderCell>
        </Row>
    </Header>
    <Body>
        {this.renderRow()}
    </Body>
</Table>

                </Layout>
            
        )
    }
}
 export default RequestIndex;