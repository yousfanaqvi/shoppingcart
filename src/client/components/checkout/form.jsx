import React from 'react'
import "./checkout.css"
import {useDispatch, useSelector} from "react-redux";
import {shippingActions} from '../../../store/shippingSlice';
import {useEffect} from "react"
function Form() {

    const dispatch=useDispatch();
    const formstate=useSelector((state)=>state.shipping.isFormcomplete);    
    useEffect(() => {
        window.addEventListener("beforeunload", alertUser);
        return () => {
          window.removeEventListener("beforeunload", alertUser);
        };
      }, []);
      const alertUser = (e) => {
        e.preventDefault();
        e.returnValue = "";
      };
     function resetForm()  { 
        document.getElementById("addressform").reset();
        dispatch(shippingActions.formComplete(false));
     }
    async function sendData (e) {
        e.preventDefault();
        dispatch(shippingActions.formComplete(true))
        let data = {
            "fname": e.target.fname.value,
            "lname": e.target.lname.value,
            "telephone":e.target.phone.value,
            "email":e.target.email.value,
            "address":e.target.address.value,
        }
        const headers = {
          "Content-Type":"application/json",
    
        }
    
        return fetch(`http://localhost:3000/storeData`,{
          method:"POST",
          headers,
          body:JSON.stringify(data)
        }).then(response => {
            alert("Address saved! - Click cart button to make payment")
        console.log("response",response)
        }).catch(err => {
          console.log("Error",err)
        })

      }
      
  return (
    <div className='checkform-container'>
        <div className="form-signin m-auto ">
            <div className='form-floating'>
                <h2>PLEASE ENTER THE SHIPPING DETAILS</h2>
            <form id="addressform"  onSubmit={sendData}>
            <fieldset disabled= {formstate ?"disabled":null}>
            <div className='delivery-form-name'>
             <div className="form-floating ">
                <input type="text" name="fname" className="form-control" id="floatingInput" placeholder="ENTER YOUR FIRST NAME" required/>
                <label htmlFor="floatingInput">FIRST NAME</label>
            </div>
            
            <div className="form-floating  ">   
                <input type="text" name="lname" className="form-control" id="floatingInput" placeholder="ENTER YOUR LAST NAME" required/>
                <label htmlFor="floatingInput ">LAST NAME</label>
            </div>
            </div>
            <div className='form-info'>
            <div className="form-floating  ">   
                <input type="tel" name="phone" className="form-control" id="floatingInput" placeholder="ENTER YOUR PHONE NUMBER" required/>
                <label htmlFor="floatingInput tel">PHONE NUMBER</label>
            </div>
            <div className="form-floating ">
                <input type="email" name="email" className="form-control" id="floatingInput" placeholder="ENTER YOUR EMAIL" required/>
                <label htmlFor="floatingInput email">EMAIL</label>
            </div>
            <div className="form-floating ">
                <input type="text" name="address" className="form-control" id="floatingInput" placeholder="ENTER YOUR ADDRESS " required/>
                <label htmlFor="floatingInput email" required>ADDRESS </label>
            </div>
            </div>
            <div className='delivery-form-name'>
            <div className="form-floating ">
                <label htmlFor=" floatingInput" className="form-label">COUNTRY</label>
                    <select className="form-select" id="country" required>
                        <option value=""></option>
                        <option>United States</option>
                    </select>
            </div>
            <div className="form-floating ">
                <label htmlFor="floatingInput" className="form-label">STATE</label>
                <select className="form-select" id="state" required>
                    <option value=""></option>
                    <option>California</option>
                    <option>NEW YORK</option>
                    <option>NEW JERSEY</option>
                    <option>CHICAGO</option>
                    <option>LAS VEGAS</option>
                </select>
            </div>
            <div className="form-floating ">
                <label htmlFor="floatingInput" className="form-label">ZIP</label>
                <select className="form-select" id="zip" required>
                    <option value=""></option>
                    <option>00837</option>
                    <option>20337</option>
                    <option>12337</option>
                    <option>03451</option>
                    <option>23985</option>

                </select>
            </div>
            </div>
            <button type='submit' name="submit" id="svbtn" className='save-btn ' >{formstate ? "Saved":"Save"} </button>

            </fieldset>
            <button type='button' name="redo" id="redobtn" className='save-btn ' onClick={resetForm} >Reset </button>

            </form>
            </div>
        </div>
        
    </div>
  )

}

export default Form