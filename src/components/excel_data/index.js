import React, { Component } from "react";
import {ExcelRenderer} from 'react-excel-renderer';
import { connect } from "react-redux";
import { ADD_ITEM_WORDS } from "../../constatns/todo_type";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import './style.css';



class ExcelToJson extends Component {
 
  fileHandler = (event) => {
    let fileObj = event.target.files[0];
    ExcelRenderer(fileObj, (err, resp) => {
      if(err){
        console.log(err);            
      }
      else{
        const data_words = resp.rows;
        data_words.forEach(el => {
          this.props.dispatch({
            type: ADD_ITEM_WORDS,
            en: el[0],
            en_num: el[1],
            ua: el[2],
            ua_num: el[3],
          });
        });
      }
    });                 
 }

  render() {
    const Input = styled('input')({
      display: 'none',
    });
    console.log(this.props.words);
    return (
      <div className="base_block">
        <h1>You can download your base with words for translate</h1>
      <label htmlFor="contained-button-file">
        <Input id="contained-button-file" multiple type="file" onChange={this.fileHandler.bind(this)}/>
        <Button variant="contained" component="span" className="but_load" color="success">
          Upload
        </Button>
      </label>
      </div>
    );
  }
}
  function mapStateToProps(state) {
    return {
      words: state.todo,
    };
  }
export default connect(mapStateToProps)(ExcelToJson);
