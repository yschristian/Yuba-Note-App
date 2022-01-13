import React, { useState } from 'react'
import Card from './card';

const Body = () => {
    const [notes, setnotes] = useState([]);
    const [title, settitle] = useState("");
    const [body, setbody] = useState("");

    const onsubmitHandler = (event) => {
        event.preventDefault();
        if(title !== "" && body !== "") {
            var temp = [...notes];//copy
            temp.push({title: title, body: body});
            setnotes(temp);
            settitle("");
            setbody("");
            event.target.reset();
        }

        else {
            alert("all fields are required");
        }
    }
    return (
        <>
            <div className='sidebar'>
                <h4>Note List</h4>
                <hr style={{width: "90%"}}/>

                <div className='cardCont'>
                    {notes.length === 0 ? 
                        <div className='nonote'>No note Yet</div> : 

                        notes.map((note) => (
                            <Card card={note}/>
                        ))
                    }                  
                    
                </div> 
            </div>

            <div className='noteform'>
                <h4>New Note</h4>
                <hr />
                <form className='form' onSubmit={onsubmitHandler}>
                    <div className='datain'>
                        <input
                            type="text"
                            name="title"
                            placeholder='Enter note title'
                            Value={title}
                            onChange={(event) => settitle(event.target.value)}
                        />
                    </div>
                    <div className='datain'>
                        <textarea
                            cols={5}
                            placeholder='enter note body'
                            name="body" 
                            Value={body}
                            onChange={(event) => setbody(event.target.value)}
                        />
                    </div>
                    <div className='btn'>
                        <button type='submit'>Add New</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Body
