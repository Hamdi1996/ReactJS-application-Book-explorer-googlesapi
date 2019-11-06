import React,{Component} from 'react';
import {FormGroup,FormControl,InputGroup,Button, Glyphicon} from 'react-bootstrap';
import Gallery from './Gallery'
class Global extends Component
{
 
    constructor(props)
    {
        super(props);
        this.state={
            query:'',
            items:[]
        }
    }
    search()
    {
        const BASE_URL = `https://www.googleapis.com/books/v1/volumes?q=search+terms`;
        fetch(`${BASE_URL}${this.state.query}`,{method:'GET'})
        .then(Response=>Response.json())
        .then(json=>{
            let {items}=json;
            this.setState({items})

       });}
    render()
    {
        return(
            <div className="Global">
                <h2>Book Explorer!</h2>
                <InputGroup>
                    <FormControl className="search"
                placeholder="Search for a book "
                onChange={event=>this.setState({query:event.target.value})}
                onKeyPress={event=>{
                    if (event.key=='Enter')
                    {
                        this.search();
                    }
                }}
                aria-describedby="basic-addon2"
                />
                <InputGroup.Append onClick={()=>this.search()}>
                <Button variant="primary">Search</Button>
                </InputGroup.Append>
            </InputGroup>
            <Gallery  items={this.state.items}/>
            </div>
        )
    }
}

export default Global;