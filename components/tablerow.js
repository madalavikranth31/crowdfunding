import React,{Component} from 'react';
import {Button, Table} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';
import {Router} from '../routes';

 class tableRow extends Component{

    state={
        loadinga: false
    }
onApprove= async ()=>{
    const campaign= Campaign(this.props.address);
    const accounts= await web3.eth.getAccounts();
    this.setState({loadinga:true})
    await campaign.methods.approveRequest(this.props.id).send({
       from: accounts[0]

    });
    Router.replaceRoute(`/campaign/${this.props.address}/requests`);
   
    this.setState({loadinga: false})
}
onFinalize = async ()=>{
    const campaign= Campaign(this.props.address);
    const accounts= await web3.eth.getAccounts();
    this.setState({loadingf:true})
    await campaign.methods.finalizeRequest(this.props.id).send({
       from: accounts[0]

    });
    Router.replaceRoute(`/campaign/${this.props.address}/requests`)
    this.setState({loadingf: false})

}


    render(){
        const {Row,Cell}=Table;
        const {id,request, approversCount}=this.props;
        const readyToFinalize = request.approval > approversCount/2;
        return (
            <Row disabled={request.complete} positive={readyToFinalize && !request.complete}>
            <Cell>{id}</Cell>
            <Cell>{request.description}</Cell>
            <Cell>{web3.utils.fromWei(request.value, "ether")}</Cell>
            <Cell>{request.recipient}</Cell>
            <Cell>
              {request.approvalCount}/{approversCount}
            </Cell>
            <Cell>
                {request.complete ? null : (
              <Button color="green" basic onClick={this.onApprove} loading={this.props.loadinga}>
                Approve
              </Button>
                )}
            </Cell>
            <Cell>
                {request.complete ? null : (
              <Button color="teal" basic onClick={this.onFinalize} loading={this.props.loadingf}>
                Finalize
              </Button>
               )}
            </Cell>
          </Row>

        );
    }
 }
 export default tableRow;