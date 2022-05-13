
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: "",
            videoID: "",
        }
    }

    addComment = async () => {
        let comment = {
            text: this.state.text,
            videoID: "M7lc1UVf-VE"
        } 
        try {
            await axios.post('http://localhost:3000/api/comments/', comment)
            .then((res) => console.log(res.data))
            this.setState({
                name: '',
                comment: '',
            });
        }
        catch (err) {
            alert(err);
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.addComment();
    }

    render() { 
        return ( 
            <div className="container jumbotron small" style={{maxHeight: '30vh'}}>
                <h3>Comment</h3>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="comment">
                        <Form.Control type="text" placeholder="Leave a comment..." name='text' value={this.state.text} onChange={this.handleChange}/>
                    </Form.Group>           
                    <Button variant="primary" type="submit">Add Comment</Button>
                </Form>
            </div>
         );
    }
}

export default CommentForm;