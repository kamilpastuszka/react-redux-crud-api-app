import React, { Component } from 'react';
import { CakeForm } from '../components/CakeForm';
import { addCake } from '../store/actions/actions';
import { connect } from 'react-redux';
import {Header} from '../components/Header';

class AddView extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      name: "",
      comment: "",
      yumFactor: "",
      imageUrl: "" 
   };

  }

  handleChange(e) {
      console.log('change handled')
      console.log(e.target.name);
      console.log(e.target.value);
      this.setState({[e.target.name]: e.target.value})
      console.log(this.state);
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddCake(this.state);
    this.props.history.push('/');
  }

  render() {    
    return (
      <div>
        <div className="col-lg-6">
        <h2> Add New Cake  </h2>
        </div>
        <CakeForm
          name={this.state.name}
          comment={this.state.comment}
          yumFactor={this.state.yumFactor}
          imageUrl={this.state.imageUrl}
          changed={this.handleChange}
          submit={this.handleSubmit}   
        />
      </div>
    )
  }
}

const mapPropsToDispatch = dispatch => {
  return {
    onAddCake: (newCake) => dispatch(addCake(newCake))
  }
}

export default connect(null, mapPropsToDispatch)(AddView);
   
