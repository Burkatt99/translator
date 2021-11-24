import React, { useState } from "react";
import { connect } from "react-redux";
import "./main.css";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

function FindTranslate(state) {
  const [search,setSearch] = useState();
  const [phrase, setPhrase] = useState();
  const [translate,setTranslate] = useState();
  const [sum,setSum] = useState();
  const [status,setStatus] = useState();
  
  const handleSubmit = (event) => {
    event.preventDefault();
  }
 const changeSearch = (e) => {
   setSearch(e.target.value);
  };
 const findTranslate = () =>{
    const words = search.toLowerCase();
    const allArr = state.words;
    const variant_en = allArr.find(item => String(item.en).toLowerCase() === words);
    const variant_ua = allArr.find(item => String(item.ua).toLowerCase() === words);
    if(variant_ua === undefined && variant_en === undefined){
      setStatus(false);
      setTranslate('Not found');
      setSum('');
      setPhrase(words);
      setSearch('');
    } else if(variant_en !== undefined){
      setStatus(true);
      setTranslate(variant_en.ua);
      setSum(variant_en.ua_num);
      setPhrase(words);
      setSearch('');
    } else if(variant_ua !== undefined){
      setStatus(true);
      setTranslate(variant_ua.en);
      setSum(variant_ua.en_num);
      setPhrase(words);
      setSearch('');
    }
  }
    return (
      <div>
        <form onSubmit={handleSubmit} className="find">
        <TextField
          id="filled-basic"
          label="Write words for translate"
          variant="filled"
          className="search"
          color="success"
          onChange={changeSearch}
          value={search}
        />
        </form>
        <Button variant="contained" onClick={findTranslate} className="search_but" color="success">Search</Button>
        <div className='translate'>
        <table>
          <tr>
            <th>Значення</th>
            <th>Переклад</th>
            <th>Частотність</th>
          </tr>
              <tr>
                <td>{phrase}</td>
                <td>{translate}</td>
                <td>{sum}</td>
              </tr>
        </table>
        </div>
      </div>
    );
  }
function mapStateToProps(state) {
  return {
    words: state.todo,
  };
}

export default connect(mapStateToProps)(FindTranslate);
