import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../store/modules/users/action";
import { useState } from "react";
import './styles.css'

const UserCard = () => {
    const [newName, setNewname] = useState('')
    const dispatch = useDispatch();

    const user = useSelector(state => state.user)

    const handleClick = () => {
        dispatch(changeName(newName));
    }

    return (
        <div className='card'>
            <div>Nome: {user.name}</div>
            <input onChange={(e) => setNewname(e.target.value)} />
            <button onClick={handleClick}>Change</button>
        </div>
    )
}

export default UserCard;