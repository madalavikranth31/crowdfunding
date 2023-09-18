import React,{Component} from 'react';
import {Form, Button,Input,Message } from 'semantic-ui-react';
import Layout from "../../../components/layout";
import Campaign from '../../../ethereum/campaign';
import {Router,Link} from '../../../routes';
import web3 from '../../../ethereum/web3';
class newRequest extends Component{
state={
    value:'',
    description:'',
    recipient:'',
    loading: false,
    errorMessage:''

};

static async getInitialProps(props){
    const {address}= props.query;
    return{address};

};
onSubmit= async (event)=>{
    event.preventDefault();
    
    const campaign = Campaign(this.props.address);
    const {description,value,recipient}=this.state;
    this.setState({loading: true, errorMessage:''})
    try{

        const accounts= await web3.eth.getAccounts();
        
        await campaign.methods.createRequest(description, web3.utils.toWei(value,"ether"),recipient)
        .send({from: accounts[0]});
        Router.pushRoute(`/campaign/${this.props.address}/requests`);
    

    }catch(err){
        this.setState({errorMessage: err.message});

    }
    this.setState({loading: false});



};

    render(){
        return(
            <Layout>
                <Link route={`/campaign/${this.props.address}/requests`}>
                <a> 
                    <Button primary>Back

                    </Button>
                </a>
                </Link>
                <h3>new Requests page</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} > 
                 <Form.Field>
                <label>Description</label>
                 <Input 
                    value={this.state.description}
                    onChange={(event)=> this.setState({description: event.target.value})}></Input>
                
                 </Form.Field>
                 <Form.Field>
                <label>Amount of Ether</label>
                 <Input 
                    label='ether'
                    labelPosition='right' 
                    
                    value={this.state.value}
                    onChange={(event)=> this.setState({value: event.target.value})}></Input>
                
                 </Form.Field>
                 <Form.Field>
                <label>Receptent</label>
                 <Input 
                    value={this.state.recipient}
                    onChange={(event)=> this.setState({recipient: event.target.value})}></Input>
                
                 </Form.Field>
                 <Message error header="Oops!" content={this.state.errorMessage}/>
                 <Button primary loading={this.state.loading}>Submit!</Button>
                </Form> 
            </Layout>
            
        )
    }

}

export default newRequest;