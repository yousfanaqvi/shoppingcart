import React , {useState} from 'react'
import "./sideMenu.css"
import {woman,man,kids} from "./linksArray"
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { styled } from '@mui/material/styles';
import {categoryActions} from '../../../store/categorySlice';
import { womanCatActions } from '../../../store/womanCat';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom"

function SideMenu() {

    let navigate=useNavigate();
    const dispatch=useDispatch();


    const StyledTab = styled(TabList)({
        borderBottom: '1px solid #e8e8e8'
    })

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
        dispatch(categoryActions.changeCategory(newValue));
        };

    //const [link,setLink]=useState("#");  // setting state and link for active
    
       
  return (
    <aside>
        <Box sx={{ width: '100%', paddingTop:"4rem"}}>
         <TabContext value={value} >
        <Box sx={{}}>
          <TabList onChange={handleChange} aria-label="tabs" className='category-header'>
            <Tab label="woman" value="1" />
            <Tab label="man" value="2" />
            <Tab label="kids" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1" id="links">
        {woman.map((array) => (
            <li key={array.id}> <a onClick={()=>{navigate("/product");dispatch(womanCatActions.changesubCategory(array.category));}}>{array.category}</a></li>

        ))}
        </TabPanel>
        <TabPanel value="2" id="links">
        {man.map((array) => (
            <li  key={array.id}><a onClick={()=>{navigate("/product");dispatch(womanCatActions.changesubCategory(array.category));}}>{array.category}</a></li>
         ))}
        </TabPanel>
        <TabPanel value="3" id="links">
        {kids.map((array) => (
            <li  key={array.id}><a onClick={()=>{navigate("/product");dispatch(womanCatActions.changesubCategory(array.category));}}>{array.category}</a></li>
        ))}
        </TabPanel>
      </TabContext>
    </Box>

           
            
    </aside>
  );
}

export default SideMenu