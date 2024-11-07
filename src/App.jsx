
import { useState } from 'react'
import './App.css'

function App() {

  const [formData,setFormData] = useState({
    firstName : "",
    middleName : "",
    lastName : "",
    dob : "",
    email : "",
    phone : "",
    country : "",
    state : "",
    zip : "",
    address : "",
    mailofcomment : false,
    mailoflike : false,
    mailoffollow : false,
    sms : ""
  });

  function changeHandler(event) {
    let {type,name,value,checked} = event.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]:type==="checkbox" ? checked : value
      }
    });

  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className='app'>
      <form className='field' onSubmit={submitHandler}>
        <h2>Info</h2>

        <div className='div'>
          <label htmlFor="firstName"><b>1.First name </b></label>
          <input type="text" name="firstName" id="firstName" placeholder='e.g. Jack' value={formData.firstName} onChange={changeHandler}/>
        </div>

        <div className='div'>
          <label htmlFor="middleName"><b>2.Middle name </b></label>
          <input type="text" name="middleName" id="middleName" placeholder='e.g. Fraser' value={formData.middleName} onChange={changeHandler}/>
        </div>

        <div className='div'>
          <label htmlFor="lastName"><b>3.Last name </b></label>
          <input type="text" name="lastName" id="lastName" placeholder='e.g. McGurk' value={formData.lastName} onChange={changeHandler}/>
        </div>

        <div className='div'>
          <label htmlFor="dob">4.Date of Birth</label>
          <input type="date" name="dob" id="dob" value={formData.dob} onChange={changeHandler}/>
        </div>

        <div className='div'>
          <label htmlFor="country"><b>5.Citizen of </b></label>
          <select name="country" id="country" value={formData.country} onChange={changeHandler}>
            <option value="">Select</option>
            <option value="India">India</option>
            <option value="Germany">Germany</option>
            <option value="Australia">Australia</option>
            <option value="Switzerland">Switzerland</option>
            <option value="France">France</option>
            <option value="Japan">Japan</option>
          </select>
        </div>

        <div className='div'>
          <label htmlFor="state"><b>6.State</b></label>
          <input type="text" name="state" id="state" placeholder='e.g. Odisha' value={formData.state} onChange={changeHandler}/>
        </div>

        <div className='div'>
          <label htmlFor="zip"><b>7.Postal code/ZIP</b></label>
          <input type="number" name="zip" id="zip" placeholder='e.g. 123456' value={formData.zip} onChange={changeHandler}/>
        </div>

        <div  className='div'>
          <label htmlFor="address"><b>8.Address</b></label>
          <input type="text" name="address" id="address" placeholder='e.g. saint lucia road' value={formData.address} onChange={changeHandler}/>
        </div>

        <div className='div'>
          <label htmlFor="email"><b>9.Email </b></label>
          <input type="email" name="email" id="email" placeholder='e.g. jfm123@gmail.com' value={formData.email} onChange={changeHandler}/>
        </div>

        <div className='div'>
          <label htmlFor="phone"><b>10.Phone no. </b></label>
          <input type="tel" name="phone" id="phone" placeholder='e.g. +91 123456789' value={formData.phone} onChange={changeHandler}/>
        </div>

        <div className='div'>
          <div><b>11.Notifications via email</b></div>
          <div>
            <input type="checkbox" name="mailofcomment" id="mailofcomment" checked={formData.mailofcomment} onChange={changeHandler}/>
            <label htmlFor="mailofcomment">Get mail when someone comments on your post</label>
          </div>
          <div>
            <input type="checkbox" name="mailoflike" id="mailoflike" checked={formData.mailoflike} onChange={changeHandler}/>
            <label htmlFor="mailoflike">Get mail when someone liked your post</label>
          </div>
          <div>
            <input type="checkbox" name="mailoffollow" id="mailoffollow" checked={formData.mailoffollow} onChange={changeHandler}/>
            <label htmlFor="mailoffollow">Get mail when someone follows your account</label>
          </div>
        </div>

        <div className='div'>
          <div><b>12.Notifications via SMS</b></div>
          <div>
            <input type="radio" name="sms" id="sameasemail" value='same as email' checked={formData.sms==="same as email"} onChange={changeHandler}/>
            <label htmlFor="sameasemail">Same as Email</label>
          </div>
          <div>
            <input type="radio" name="sms" id="everything" value='everything' checked={formData.sms==="everything"} onChange={changeHandler}/>
            <label htmlFor="everything">Everything</label>
          </div>
          <div>
            <input type="radio" name="sms" id="nosms" value='do not push sms' checked={formData.sms==="do not push sms"} onChange={changeHandler}/>
            <label htmlFor="nosms">Do not push SMS</label>
          </div>
        </div>

        <div className='div'>
          <button>Save</button>
        </div>


      </form>
    </div>
  )
}

export default App
