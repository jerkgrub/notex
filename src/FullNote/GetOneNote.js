import axios from "axios";
import { useRef, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import './GetOneNote.css';

const GetOneNote = () => {
    const { ntitlex } = useParams();
    const navigate = useNavigate();
    const [note, setNote] = useState({
        ntitle: '',
        priority1: '',
        priority2: '',
        priority3: '',
        braindump: '',
        ndate: '',
    });

    useEffect(() => {
        axios.get(`http://localhost:8000/api/note/${ntitlex}`)
            .then((res) => {
                console.log(res.data.theNote);
                setNote(res.data.theNote);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [ntitlex]);

    const updateNote = () => {
        Swal.fire({
            title: 'Save changes?',
            icon: 'warning',
            text: 'Values will be overwritten.',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Save'
        }).then((result) => {
            if (result.isConfirmed) {
                const updateN = {
                    n_title: note.n_title,
                    priority1: note.priority1,
                    priority2: note.priority2,
                    priority3: note.priority3,
                    braindump: note.braindump,
                    n_date: note.n_date,

                    c1r1: note.c1r1,
                    c1r2: note.c1r2,
                    c1r3: note.c1r3,
                    c1r4: note.c1r4,
                    c1r5: note.c1r5,
                    c1r6: note.c1r6,
                    c1r7: note.c1r7,
                    c1r8: note.c1r8,
                    c1r9: note.c1r9,
                    c1r10: note.c1r10,
                    c1r11: note.c1r11,
                    c1r12: note.c1r12,
                    c1r13: note.c1r13,
                    c1r14: note.c1r14,
                    c1r15: note.c1r15,
                    c1r16: note.c1r16,
                    c1r17: note.c1r17,
                    c1r18: note.c1r18,
                    c1r19: note.c1r19,     
                    
                    // right column
                    c2r1: note.c2r1,
                    c2r2: note.c2r2,
                    c2r3: note.c2r3,
                    c2r4: note.c2r4,
                    c2r5: note.c2r5,
                    c2r6: note.c2r6,
                    c2r7: note.c2r7,
                    c2r8: note.c2r8,
                    c2r9: note.c2r9,
                    c2r10: note.c2r10,
                    c2r11: note.c2r11,
                    c2r12: note.c2r12,
                    c2r13: note.c2r13,
                    c2r14: note.c2r14,
                    c2r15: note.c2r15,
                    c2r16: note.c2r16,
                    c2r17: note.c2r17,
                    c2r18: note.c2r18,
                    c2r19: note.c2r19,
                    
                };
    
                axios.put(`http://localhost:8000/api/note/update/${ntitlex}`, updateN)
                    .then((res) => {
                        console.log(res.data);
    
                        Swal.fire({
                            icon: 'success',
                            title: 'Note saved!',
                            text: '',
                            showConfirmButton: false,
                            timer: 800,
                        });
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        });
    };

    const deleteNote = async () => {
        const result = await 
        Swal.fire({
            title: 'Are you sure?',
            text: 'Note titled: ' + ntitlex + ' will be deleted',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete'
        });

        if (result.isConfirmed) {
            axios.delete(`http://localhost:8000/api/note/delete/${ntitlex}`)
                .then((res) => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Note deleted',
                        text: '',
                        showConfirmButton: false,
                        timer: 800,
                      });
                    console.log(res.data);
                    navigate("/note/all");
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    return (
        <div>
            {/* left side */}
            <div className="div1">
                {/* note title */}
                <label className="labelx">Note Title</label>
                <input 
                    type="text" 
                    value={note.n_title}
                    onChange={(e)=>{setNote({...note, n_title: e.target.value})}}
                />

                {/* Top Priorities */}
                <label>Top Priorities</label>
                <input 
                    type="text" 
                    value={note.priority1}
                    onChange={(e)=>{setNote({...note, priority1: e.target.value})}}
                />
                <input 
                    type="text" 
                    value={note.priority2}
                    onChange={(e)=>{setNote({...note, priority2: e.target.value})}}
                />
                <input 
                    type="text" 
                    value={note.priority3}
                    onChange={(e)=>{setNote({...note, priority3: e.target.value})}}
                />

                {/* BRAIN DUMP */}
                <label>Brain Dump</label>
                <textarea
                    style={{ height: 300, resize: 'none'}}
                    value={note.braindump}
                    onChange={(e)=>{setNote({...note, braindump: e.target.value})}}
                ></textarea>

                {/* update note button */}
                <button onClick={updateNote}>SAVE CHANGES</button>

                {/* delete button */}
                <button onClick={deleteNote}>DELETE</button> 


            </div>



            <div>
                        {/* DATE */}
                        <label>Date:</label>
                        <input
                            type="date"
                            value={note.n_date}
                            onChange={(e)=>{setNote({...note, n_date: e.target.value})}}
                        />
                    </div>


            <div class="tableX">
            
            <div class="column">
                
                
                

            </div>
            <div class="column">
                
                

            </div>
            </div>
        </div>

        
    );
};

export default GetOneNote;
