import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import './NoteTakingPage.css';

const NoteTakingPage = () => {
  const navigate = useNavigate();
  const [allNote, setAllNote] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/note/all")
            .then((res) => {
                console.log(res.data);
                setAllNote(res.data.theNote);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const [n_title, setNtitle] = useState("")
    const [priority1, setPriority1] = useState("");
    const [priority2, setPriority2] = useState("");
    const [priority3, setPriority3] = useState("");
    const [braindump, setBraindump] = useState("");
    const today = new Date().toISOString().substr(0,10);
    const [n_date, setNdate] = useState(today);

    // timebox data
    const [c1r1, setC1r1] = useState("");
    const [c2r1, setC2r1] = useState("");
    const [c1r2, setC1r2] = useState("");
    const [c2r2, setC2r2] = useState("");
    const [c1r3, setC1r3] = useState("");
    const [c2r3, setC2r3] = useState("");
    const [c1r4, setC1r4] = useState("");
    const [c2r4, setC2r4] = useState("");
    const [c1r5, setC1r5] = useState("");
    const [c2r5, setC2r5] = useState("");
    const [c1r6, setC1r6] = useState("");
    const [c2r6, setC2r6] = useState("");
    const [c1r7, setC1r7] = useState("");
    const [c2r7, setC2r7] = useState("");
    const [c1r8, setC1r8] = useState("");
    const [c2r8, setC2r8] = useState("");
    const [c1r9, setC1r9] = useState("");
    const [c2r9, setC2r9] = useState("");
    const [c1r10, setC1r10] = useState("");
    const [c2r10, setC2r10] = useState("");
    const [c1r11, setC1r11] = useState("");
    const [c2r11, setC2r11] = useState("");
    const [c1r12, setC1r12] = useState("");
    const [c2r12, setC2r12] = useState("");
    const [c1r13, setC1r13] = useState("");
    const [c2r13, setC2r13] = useState("");
    const [c1r14, setC1r14] = useState("");
    const [c2r14, setC2r14] = useState("");
    const [c1r15, setC1r15] = useState("");
    const [c2r15, setC2r15] = useState("");
    const [c1r16, setC1r16] = useState("");
    const [c2r16, setC2r16] = useState("");
    const [c1r17, setC1r17] = useState("");
    const [c2r17, setC2r17] = useState("");
    const [c1r18, setC1r18] = useState("");
    const [c2r18, setC2r18] = useState("");
    const [c1r19, setC1r19] = useState("");
    const [c2r19, setC2r19] = useState("");

    // add note button
    const addNote = () => {
      if (!n_title || n_title.trim() === "") {
          Swal.fire({
              icon: 'error',
              title: 'No title..',
              text: 'You need a Title for your note!',
          });
      } else {
          const existingNote = allNote.find(note => note.n_title === n_title);
  
          if (existingNote) {
              Swal.fire({
                  icon: 'error',
                  title: 'Duplicate title..',
                  text: 'A note with this title already exists!',
              });
          } else {
              const newNote = {
                n_title: n_title,
                priority1: priority1,
                priority2: priority2,
                priority3: priority3,
                braindump: braindump,
                n_date: n_date,
                c1r1, c2r1,
                c1r2, c2r2,
                c1r3, c2r3,
                c1r4, c2r4,
                c1r5, c2r5,
                c1r6, c2r6,
                c1r7, c2r7,
                c1r8, c2r8,
                c1r9, c2r9,
                c1r10, c2r10,
                c1r11, c2r11,
                c1r12, c2r12,
                c1r13, c2r13,
                c1r14, c2r14,
                c1r15, c2r15,
                c1r16, c2r16,
                c1r17, c2r17,
                c1r18, c2r18,
                c1r19, c2r19,
              };
  
              axios.post("http://localhost:8000/api/note/new", newNote)
                  .then((response) => {
                      console.log(response.data);
                      Swal.fire({
                          icon: 'success',
                          title: 'Note added!',
                          text: '',
                          showConfirmButton: false,
                          timer: 800,
                      });
                      navigate("/note/all");
                  })
                  .catch((err) => {
                      console.log(err);
                  });
          }
      }
  };
  
    // html starts here
    return (
      <html class='whole'>
      <div className="note-taking-container">
        <div className="left-section">
  
          {/* NoteX Logo */}
          <img
            src="https://i.imgur.com/QS0CSGi.png"
            alt="NoteX Logo"
            style={{ width: '25%', marginBottom: '10px' }}
          />
          <br />

          {/* note title */}
          <label>Note Title</label>
          <table>
            <tbody>
              <tr>
                <td>
                  <input 
                  className="priority" 
                  type="text" onChange={(e)=>{setNtitle(e.target.value)}} />
                </td>
              </tr>
            </tbody>
          </table>
  
          {/* Top Priorities */}
          <br />
          <label>Top Priorities</label>
          <br />

          <table>
            <tbody>
              {/* priority 1 */}
              <tr>
                <td>
                  <input 
                  className="priority" 
                  type="text" onChange={(e)=>{setPriority1(e.target.value)}} />
                </td>
              </tr>
              {/* priority 2 */}
              <tr>
                <td>
                  <input 
                  className="priority" type="text" 
                  onChange={(e)=>{setPriority2(e.target.value)}} />
                </td>
              </tr>
              {/* priority 3 */}
              <tr>
                <td>
                  <input 
                  className="priority" 
                  type="text" 
                  onChange={(e)=>{setPriority3(e.target.value)}} />
                </td>
              </tr>
            </tbody>
          </table>
  
          {/* BRAIN DUMP */}
          <br/>
          <label>Brain Dump</label>
          <textarea
            style={{ height: 300, resize: 'none'}}
            className='braindump'
            onChange={(e)=>{setBraindump(e.target.value)}}
          ></textarea>
          <br />
  
          {/* add button */}
          <button 
          onClick={()=>{addNote()}}>Add Note</button>
        
          
        </div>
  
        {/* right side */}
        <div className="right-section">
  
          {/* DATE */}
          <label>Date:</label>
          <input
            type="date"
            className='datex'
            value={n_date}
            onChange={(e)=>{setNdate(e.target.value)}}
          />

          {/* :00 and :30 labels */}
          <p 
          className='timeLabel'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:00 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:30</p>

          {/* start of timebox */}
          <table>
          <tbody>
  
            {/* row 1 */}
            <tr>
              <td>
                <input 
                className="timeboxText" type="text" 
                readOnly 
                style={{ width: '33px', textAlign: 'center', lineHeight: 'normal', fontWeight: 'bold',color: 'black'}} 
                placeholder='5' />
              </td>
              <td>
                <input 
                className="timeboxText" 
                type="text" onChange={(e)=>{setC1r1(e.target.value)}}/>
              </td>
              <td>
                <input 
                className="timeboxText"
                type="text" onChange={(e)=>{setC2r1(e.target.value)}}/>
              </td>
            </tr>
  
            {/* row 2 */}
            <tr>
              <td>
                <input 
                className="timeboxText" 
                type="text" 
                readOnly 
                style={{ width: '33px', textAlign: 'center', lineHeight: 'normal', fontWeight: 'bold',color: 'black'}} 
                placeholder='6' />
              </td>
              <td>
                <input 
                className="timeboxText" 
                type="text" onChange={(e)=>{setC1r2(e.target.value)}}/>
              </td>
              <td>
                <input 
                className="timeboxText"
                type="text" onChange={(e)=>{setC2r2(e.target.value)}}/>
              </td>
            </tr>
  
            {/* row 3 */}
            <tr>
              <td>
                <input 
                className="timeboxText" 
                type="text" readOnly style={{ width: '33px', textAlign: 'center', lineHeight: 'normal', fontWeight: 'bold',color: 'black',}} 
                placeholder='7' />
              </td>
              <td>
                <input 
                className="timeboxText" 
                type="text" onChange={(e)=>{setC1r3(e.target.value)}}/>
              </td>
              <td>
                <input 
                className="timeboxText"type="text" 
                onChange={(e)=>{setC2r3(e.target.value)}}/>
              </td>
            </tr>
  
            {/* row 4 */}
            <tr>
              <td>
                <input className="timeboxText" type="text" readOnly style={{ width: '33px', textAlign: 'center', lineHeight: 'normal', fontWeight: 'bold',color: 'black'}} 
                placeholder='8' />
              </td>
              <td>
                <input className="timeboxText" type="text" onChange={(e)=>{setC1r4(e.target.value)}}/>
              </td>
              <td>
                <input className="timeboxText"type="text" onChange={(e)=>{setC2r4(e.target.value)}}/>
              </td>
            </tr>
  
            {/* row 5 */}
            <tr>
              <td>
                <input 
                className="timeboxText"
                type="text" readOnly
                style={{ width: '33px', textAlign: 'center', lineHeight: 'normal', fontWeight: 'bold',color: 'black', }} 
                placeholder='9' />
              </td>
              <td>
                <input 
                className="timeboxText" 
                type="text" onChange={(e)=>{setC1r5(e.target.value)}}/>
              </td>
              <td>
                <input 
                className="timeboxText"type="text" 
                onChange={(e)=>{setC2r5(e.target.value)}}/>
              </td>
            </tr>
  
            {/* row 6 */}
            <tr>
              <td>
                <input className="timeboxText" type="text" readOnly style={{ width: '33px', textAlign: 'center', lineHeight: 'normal', fontWeight: 'bold',color: 'black'}} 
                placeholder='10' />
              </td>
              <td>
                <input className="timeboxText" type="text" onChange={(e)=>{setC1r6(e.target.value)}}/>
              </td>
              <td>
                <input className="timeboxText"type="text" onChange={(e)=>{setC2r6(e.target.value)}} />
              </td>
            </tr>
  
            {/* row 7 */}
            <tr>
              <td>
                <input className="timeboxText" type="text" readOnly style={{ width: '33px', textAlign: 'center', lineHeight: 'normal', fontWeight: 'bold',color: 'black'}} 
                placeholder='11' />
              </td>
              <td>
                <input className="timeboxText" type="text" onChange={(e)=>{setC1r7(e.target.value)}}/>
              </td>
              <td>
                <input className="timeboxText"type="text" onChange={(e)=>{setC2r7(e.target.value)}}/>
              </td>
            </tr>
  
            {/* row 8 */}
            <tr>
              <td>
                <input className="timeboxText" type="text" readOnly style={{ width: '33px', textAlign: 'center', lineHeight: 'normal', fontWeight: 'bold',color: 'black'}} 
                placeholder='12' />
              </td>
              <td>
                <input className="timeboxText" type="text" onChange={(e)=>{setC1r8(e.target.value)}}/>
              </td>
              <td>
                <input className="timeboxText"type="text" onChange={(e)=>{setC2r8(e.target.value)}}/>
              </td>
            </tr>
  
            {/* row 9 */}
            <tr>
              <td>
                <input className="timeboxText" type="text" readOnly style={{ width: '33px', textAlign: 'center', lineHeight: 'normal', fontWeight: 'bold',color: 'black'}} 
                placeholder='1' />
              </td>
              <td>
                <input className="timeboxText" type="text" onChange={(e)=>{setC1r9(e.target.value)}}/>
              </td>
              <td>
                <input className="timeboxText"type="text" onChange={(e)=>{setC2r9(e.target.value)}}/>
              </td>
            </tr>
  
            {/* row 10 */}
            <tr>
              <td>
                <input className="timeboxText" type="text" readOnly style={{ width: '33px', textAlign: 'center', lineHeight: 'normal', fontWeight: 'bold',color: 'black'}} 
                placeholder='2' />
              </td>
              <td>
                <input className="timeboxText" type="text" onChange={(e)=>{setC1r10(e.target.value)}}/>
              </td>
              <td>
                <input className="timeboxText"type="text" onChange={(e)=>{setC2r10(e.target.value)}}/>
              </td>
            </tr>
  
            {/* row 11 */}
            <tr>
              <td>
                <input className="timeboxText" type="text" readOnly style={{ width: '33px', textAlign: 'center', lineHeight: 'normal', fontWeight: 'bold',color: 'black'}} 
                placeholder='3' />
              </td>
              <td>
                <input className="timeboxText" type="text" onChange={(e)=>{setC1r11(e.target.value)}}/>
              </td>
              <td>
                <input className="timeboxText"type="text" onChange={(e)=>{setC2r11(e.target.value)}}/>
              </td>
            </tr>
  
            {/* row 12 */}
            <tr>
              <td>
                <input className="timeboxText" type="text" readOnly style={{ width: '33px', textAlign: 'center', lineHeight: 'normal', fontWeight: 'bold',color: 'black'}} 
                placeholder='4' />
              </td>
              <td>
                <input className="timeboxText" type="text" onChange={(e)=>{setC1r12(e.target.value)}}/>
              </td>
              <td>
                <input className="timeboxText"type="text" onChange={(e)=>{setC2r12(e.target.value)}}/>
              </td>
            </tr>
  
            {/* row 13 */}
            <tr>
              <td>
                <input className="timeboxText" type="text" readOnly style={{ width: '33px', textAlign: 'center', lineHeight: 'normal', fontWeight: 'bold',color: 'black'}} 
                placeholder='5' />
              </td>
              <td>
                <input className="timeboxText" type="text" onChange={(e)=>{setC1r13(e.target.value)}}/>
              </td>
              <td>
                <input className="timeboxText"type="text" onChange={(e)=>{setC2r13(e.target.value)}}/>
              </td>
            </tr>
  
            {/* row 14 */}
            <tr>
              <td>
                <input className="timeboxText" type="text" readOnly style={{ width: '33px', textAlign: 'center', lineHeight: 'normal', fontWeight: 'bold',color: 'black'}} 
                placeholder='6' />
              </td>
              <td>
                <input className="timeboxText" type="text" onChange={(e)=>{setC1r14(e.target.value)}}/>
              </td>
              <td>
                <input className="timeboxText"type="text" onChange={(e)=>{setC2r14(e.target.value)}} />
              </td>
            </tr>
  
            {/* row 15 */}
            <tr>
              <td>
                <input className="timeboxText" type="text" readOnly style={{ width: '33px', textAlign: 'center', lineHeight: 'normal', fontWeight: 'bold',color: 'black'}} 
                placeholder='7' />
              </td>
              <td>
                <input className="timeboxText" type="text" onChange={(e)=>{setC1r15(e.target.value)}}/>
              </td>
              <td>
                <input className="timeboxText"type="text" onChange={(e)=>{setC2r15(e.target.value)}}/>
              </td>
            </tr>
  
            {/* row 16 */}
            <tr>
              <td>
                <input className="timeboxText" type="text" readOnly style={{ width: '33px', textAlign: 'center', lineHeight: 'normal', fontWeight: 'bold',color: 'black'}} 
                placeholder='8' />
              </td>
              <td>
                <input className="timeboxText" type="text" onChange={(e)=>{setC1r16(e.target.value)}}/>
              </td>
              <td>
                <input className="timeboxText"type="text" onChange={(e)=>{setC2r16(e.target.value)}}/>
              </td>
            </tr>
  
            {/* row 17 */}
            <tr>
              <td>
                <input className="timeboxText" type="text" readOnly style={{ width: '33px', textAlign: 'center', lineHeight: 'normal', fontWeight: 'bold',color: 'black'}} 
                placeholder='9' />
              </td>
              <td>
                <input className="timeboxText" type="text" onChange={(e)=>{setC1r17(e.target.value)}}/>
              </td>
              <td>
                <input className="timeboxText"type="text" onChange={(e)=>{setC2r17(e.target.value)}}/>
              </td>
            </tr>
  
            {/* row 18 */}
            <tr>
              <td>
                <input className="timeboxText" type="text" readOnly style={{ width: '33px', textAlign: 'center', lineHeight: 'normal', fontWeight: 'bold',color: 'black'}} 
                placeholder='10' />
              </td>
              <td>
                <input className="timeboxText" type="text" onChange={(e)=>{setC1r18(e.target.value)}}/>
              </td>
              <td>
                <input className="timeboxText"type="text" onChange={(e)=>{setC2r18(e.target.value)}}/>
              </td>
            </tr>
  
            {/* row 19 */}
            <tr>
              <td>
                <input className="timeboxText" type="text" readOnly style={{ width: '33px', textAlign: 'center', lineHeight: 'normal', fontWeight: 'bold',color: 'black'}} 
                placeholder='11' />
              </td>
              <td>
                <input className="timeboxText" type="text" onChange={(e)=>{setC1r19(e.target.value)}}/>
              </td>
              <td>
                <input className="timeboxText"type="text" onChange={(e)=>{setC2r19(e.target.value)}}/>
              </td>
            </tr>
            
  
  
          </tbody>
        </table>
  
  
  
        </div>
      </div>
      </html>
    );
  };

export default NoteTakingPage;