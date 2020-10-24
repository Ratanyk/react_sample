import React from 'react'
// import Moment from 'react-moment';
import {Link} from 'react-router-dom';

import { getModels } from '../../services/luis.service'

import "./luisModels.css";

class LuisModels extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    }

  }

  componentDidMount(){
    getModels()
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      this.setState({
        models : data,
        loading: false
      })
    });
  }


  render() {
    return (
      <section className="luis-models">
        <div className="container mt-5">
          <div>
            <div className="section-name-wrapper weight-700">
              LUIS Models <span className="weight-400"> Management</span>
            </div>
            <div className="">
              Build a bot dialog model and integrate it with your APIs.
            </div>
            <div className="separator mt-4 w-25">
              <hr />
            </div>
          </div>
        </div>

      </section>
    )
  }
}
export default LuisModels
