import {useFormik} from 'formik';
import {Button} from '@mui/material';
import './Component.css';
function Demo() {
    const formik = useFormik({
        initialValues:{
            fname:'',
            lname:'',
            city:'',
            Add1:'',
            Pay:'',
            place:''
        },
        onSubmit:(values)=>{
            console.log('Form data',values);
        },
        validate:(values)=>{
            console.log('errors:' , formik.errors);
            let errors={};
            if(values.fname==='')
             errors.fname="First name is Required";
            if(values.lname==='')
            errors.lname="Last name is Required" ;
            if(values.city==='')
            errors.city="City is Required" ;
            if(values.Add1==='')
            errors.Add1="Address is Required" ;
            if(values.zip==='')
            errors.zip="Zip is Required" ;
            return errors;
        }
        
    });
    console.log(formik.values);
    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
              
                <div className='first'>
                            <div className='fname'>
                                <input  style={{width:550,border:'none',borderBottom:'2px solid #ccc',paddingLeft:0,padding:15,margin:0}} type='text' id="fname" minLength={8} name="fname" placeholder='First Name *' onChange={formik.handleChange} value={formik.values.fname}/>
                                {formik.errors.fname? <div style={{color:'red'}}>{formik.errors.fname}</div> : null}
                            </div>
                            <div className='lname'>
                                <input style={{width:550,border:'none',borderBottom:'2px solid #ccc',padding:15 , marginLeft:50}} type='text' id="lname" minLength={8} name="lname" placeholder='Last Name *' onChange={formik.handleChange} value={formik.values.lname}/>
                                {formik.errors.lname?<div style={{color:'red', marginLeft:50}}>{formik.errors.lname} </div> : null}
                                <br />
                            </div>
                        </div>
                        <div>
                                <input  style={{width:1180,border:'none',borderBottom:'2px solid #ccc',paddingLeft:0,padding:15,margin:0}} type='text' id="Add1" minLength={32} name="Add1" placeholder='Address Line 1*' onChange={formik.handleChange} value={formik.values.Add1}/>
                                {formik.errors.Add1? <div style={{color:'red'}}>{formik.errors.Add1}</div> : null}
                            </div>
                            <div>
                                <input  style={{width:1180,border:'none',borderBottom:'2px solid #ccc',paddingLeft:0,padding:15,margin:0}} type='text' id="Add2" minLength={32} name="Add2" placeholder='Address Line 2' onChange={formik.handleChange} value={formik.values.Add2}/>
                                
                            </div>
                       <div className='first'>
                            <div className='fname'>
                            <input  style={{width:550,border:'none',borderBottom:'2px solid #ccc',paddingLeft:0,padding:15,margin:0}} type='text' id="city" name="city" placeholder='City *' onChange={formik.handleChange} value={formik.values.city}/>
                            {formik.errors.city? <div style={{color:'red'}}>{formik.errors.city}</div> : null}
                            </div>
                
                            <br/>
                            <div className='first'>
                            <div className='lname'>
                            <input style={{width:550,border:'none',borderBottom:'2px solid #ccc',padding:15 , marginLeft:50}} type='text' id="place" name="place" placeholder='State/Province/Region ' onChange={formik.handleChange} value={formik.values.place}/>
                           
                            <br />
                            </div>
                        </div>
                    </div>
                    <div className='first'>
                            <div className='fname'>
                                <input  style={{width:550,border:'none',borderBottom:'2px solid #ccc',paddingLeft:0,padding:15,margin:0}} type='number' id="zip" maxLength={6} name="Zip" placeholder='Zip / Postal code *' onChange={formik.handleChange} value={formik.values.zip}/>
                                {formik.errors.zip? <div style={{color:'red'}}>{formik.errors.zip}</div> : null}
                            </div>
                            <div className='lname'>
                                <input style={{width:550,border:'none',borderBottom:'2px solid #ccc',padding:15 , marginLeft:50}} type='text' id="country" name="country" placeholder='Country *' onChange={formik.handleChange} value={formik.values.country}/>
                                {formik.errors.country?<div style={{color:'red', marginLeft:50}}>{formik.errors.country} </div> : null}
                                <br />
                            </div>
                        </div>
                <div>
                <br/><input type={'checkBox'} id='TandC' name='payment' onChange={formik.handleChange} value="Place"/>Use this address for Payment details
                </div >
                <div className='but'>
                <Button variant='contained' >Next</Button></div>
            </form>
        </div>
    );
}
export default Demo;