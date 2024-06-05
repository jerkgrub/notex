import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './GetAllNote.css';

const GetAllNote = () => {

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

    // format functions
    const formatPreview = (priority1, priority2, priority3) => {
        let priorities = [priority1, priority2, priority3];
        return priorities.map((priority, index) => (
            <React.Fragment key={index}>
                {`${index + 1}. ${priority}`}
                <br/>
            </React.Fragment>
        ));
    }

    const truncateTitle = (title) => {
        if (title.length > 35) {
            return title.substring(0, 35) + "...";
        } else {
            return title;
        }
    }

    const formatDate = (dateString) => {
        let n_date = new Date(dateString); 
        let options = { 
            // year: 'numeric', 
            month: 'long', 
            day: 'numeric' };
        return n_date.toLocaleDateString("en-US", options); 
    }
    

    return (
        <html class='whole2'>
        <div class='allBody'>
            <h1 className="mynote">My Notes</h1>
            <div className="note-container">
                {allNote.slice().reverse().map((element, index) => (
                    <Link key={index} to={"/note/" + element.n_title} className="note-box">
                        <div>
                            <p className="notepreviewtitle">{truncateTitle(element.n_title)}</p>
                            <div className="datepreview">{formatDate(element.n_date)}</div>
                            <div className="prioritypreview">{formatPreview(element.priority1, element.priority2, element.priority3)}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
        </html>
    );
}

export default GetAllNote;
