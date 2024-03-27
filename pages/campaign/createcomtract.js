import React, {Component} from 'react';
import { Card } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
//import 'semantic-ui-css/semantic.min.css';
import { Button,Form,Input,Message } from 'semantic-ui-react';
import Layout from '../../components/layout';

import web3 from '../../ethereum/web3';
import {Router} from '../../routes.js';

class CampaignNew extends Component{
    state={
        title: '',
        description:'',
        minimumContribution: '',
        errorMessage: '',
        loading: false

    };
    onSubmit = async (event) =>{
        event.preventDefault();

        this.setState({loading: true, errorMessage: ''});
        try{
        const accounts= await web3.eth.getAccounts();
        await factory.methods.createCampaign(this.state.title, this.state.description, this.state.minimumContribution).send({
            from: accounts[0]
        });
        Router.pushRoute('/')
    } catch (err){
        this.setState({errorMessage: err.message}); 
    }
    this.setState({loading: false})
    };


    render(){
   
        return (
            
            <Layout> 
             
                <h2>Create new campaign</h2>
                <Form onSubmit={this.onSubmit} 
                error={!!this.state.errorMessage}
                >
                    <Form.Field>
                        <label>Campaign Title</label>
                        <Input 
                        value={this.state.title}
                        onChange={(event) => this.setState({title: event.target.value})}
                        ></Input>
                    </Form.Field>

                    <Form.Field>
                        <label>Description</label>
                        <textarea 
                        value={this.state.description}
                        onChange={(event) => this.setState({description: event.target.value})}
                        rows="5"
                        ></textarea>
                    </Form.Field>

                    <Form.Field>
                        <label>Min contibution</label>
                        <Input label= 'wei' 
                        labelPosition='right' 
                        value={this.state.minimumContribution}
                        onChange={(event) => this.setState({minimumContribution: event.target.value})}
                        ></Input>
                    </Form.Field>
                    
                        <Message error header="OOPS!" content={this.state.errorMessage}/>

                        <Button loading={this.state.loading} primary> Create!</Button>
                                  
                </Form>

            </Layout>
        )
    }
}


export default CampaignNew;
