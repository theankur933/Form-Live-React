import { useEffect, useState } from 'react';
import './Form.css';

function Form_local(props) {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [validate, setValidate] = useState('')
    //const [item, setItem] = useState([]);
    

    const submitHandling = e => {
        e.preventDefault();
        if((fname == '')  || (lname == '') || (dob == '') || (gender == '')){
            setValidate('All Field are required');
            return false;
        }else{
            e.target.reset();
            props.show_cmp(true);
            setValidate('');
            var obj_data = {
                fname,
                lname,
                dob,
                gender
            };
            var a = 1;
            localStorage.setItem('student', JSON.stringify(obj_data));
        }
        
       
    }
 

    return (
        <div className="wrapper df">
            <div className="form">
                <div className='danger'>
                    {validate}
                </div>
                <form onSubmit={submitHandling} >
                    <div className="form-field df">
                        <div>
                            <label> First Name :</label>
                        </div>
                        <div>
                            <input type="text" name='fname' placeholder="First name" 
                            onChange={(e) => setFname(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-field df">
                        <div>
                            <label> Last Name :</label>
                        </div>
                        <div>
                            <input type="text" di="lastName" name='lname' placeholder="Last name"
                            onChange={(e) => setLname(e.target.value)} />
                        </div>

                    </div>
                    <div className="form-field df">
                        <div>
                            <label>Date Of Birth :</label>
                        </div>
                        <div>
                            <input type="date" id="dob" name='dob' placeholder="Date of birth"
                            onChange={(e) => setDob(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-field radio">
                    
                            <label>Male :
                                <input type='radio' value='male' name='gender'
                                onChange={(e) => setGender(e.target.value)} />
                            </label>
                            <label>Female: 
                                 <input type='radio' value='fmale' name='gender'
                                 onChange={(e) => setGender(e.target.value)}  />
                            </label>
                      
                    </div>
                    <div className='buttons df'>
                        <div><button type='submit'>Submit</button></div>
                        <div><button type='button' onClick={() => props.show_cmp(true)}>Show Data</button></div>
                    </div>

                </form>
            </div>
        </div>
    );

}
export default Form_local;