import "./NoteList.css";
import {useSelector,useDispatch} from 'react-redux';
// import { deleteNote } from "../../redux/actions/noteActions";
import { actions } from "../../redux/reducers/notereducer";
import {noteSelecter} from '../../redux/reducers/notereducer'

function NoteList() {
  
    const notes=useSelector(noteSelecter);
    console.log(notes);

    const dispatch=useDispatch();
  
  return (
    <div className="container">
    <ul>
      {notes.map((n,index) => (
        <li>
            {/* <p>{n.createdAt}</p> */}
            <p className="note-content">{n.text}</p>
            <button className="btn btn-danger" onClick={()=>dispatch(actions.delete(index))}>Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
