import { useEffect, useState } from "react";
import "./Show_data_local.css";

function Show_data_local(props) {
  const [showform, setShowform] = useState("");

  const [showData, setShowData] = useState({});

  var record = JSON.parse(localStorage.getItem("student"));
  useEffect(() => {
    setShowData(record);
  }, [showform]);

  const [f_name, setF_name] = useState(record.fname);
  const [l_name, setL_name] = useState(record.lname);
  const [_dob, set_Dob] = useState(record.dob);
  const [_gender, set_Gender] = useState(record.gender);

  function submit_Handling() {
    var update_obj = {
      fname: f_name,
      lname: l_name,
      dob: _dob,
      gender: _gender,
    };
    localStorage.setItem("student", JSON.stringify(update_obj));
    setShowform("");
  }

  var deleteItem = () => {
    localStorage.removeItem("student");
    props.show_cmp(false);
  };
  return (
    <div className="form">
      <table>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{showData.fname + " " + showData.lname}</td>
            <td>{showData.dob}</td>
            <td>{showData.gender}</td>
            <td>
              <button onClick={() => setShowform("update-form-show")}>
                Edit
              </button>
            </td>
            <td>
              <button onClick={deleteItem}>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className={`update-form-wrapper df ${showform}`}>
        <div className="update-form">
          <div className="toggle-icon" onClick={() => setShowform("")}>
            <div className="sp-top"></div>
            <div className="sp-bottom"></div>
          </div>

          <div>
            <h2>Update Your Record</h2>
          </div>
          <from className="from-update">
            <div>
              <lable className="lable">First Name: </lable>
              <input
                type="text"
                value={f_name}
                onChange={(e) => setF_name(e.target.value)}
              />
            </div>
            <div>
              <lable className="lable">Last Name: </lable>
              <input
                type="text"
                value={l_name}
                name="l_name"
                onChange={(e) => setL_name(e.target.value)}
              />
            </div>
            <div>
              <lable className="lable">Date Of Birthday: </lable>
              <input
                type="text"
                value={_dob}
                name="_dob"
                onChange={(e) => set_Dob(e.target.value)}
              />
            </div>
            <div>
              <label className="lable-radio" htmlFor="male">
                Male:
              </label>
              <input
                type="radio"
                name="gender"
                value="Male"
                id="male"
                onChange={(e) => set_Gender(e.target.value)}
              />
            </div>
            <div>
              <label className="lable-radio" htmlFor="female">
                Feale:{" "}
              </label>
              <input
                type="radio"
                name="gender"
                value="Female"
                id="female"
                onChange={(e) => set_Gender(e.target.value)}
              />
            </div>
            <div>
              <button type="submit" onClick={submit_Handling}>
                save
              </button>
            </div>
          </from>
        </div>
      </div>
      <div className="add-btn">
        <button onClick={() => props.show_cmp(false)}>Add New</button>
      </div>
    </div>
  );
}
export default Show_data_local;
