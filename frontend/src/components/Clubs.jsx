import React, { useEffect, useState } from 'react';
import { useFetch } from './hook/useFetch';
import { useNavigate } from 'react-router';

const { getAll, put, del, post } = useFetch("/clubs");

const Clubs = () => {
    const [allClubs, setAllClubs] = useState([]);
    const [clubToEdit, setClubToEdit] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const [newClub, setNewClub] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const clubs = await getAll();
            setAllClubs(clubs);
        };
        fetchData();
    }, []);

    const handleModify = (club) => {
        navigate(`/modify-club/${club.id}`);
    };

    const handleDelete = async (club) => {
        console.log("Eliminando club con id: ", club.id);
        await del(club.id);
        const clubs = await getAll();
        setAllClubs(clubs);
        return;
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setClubToEdit({
            ...clubToEdit,
            [name]: type === "checked" ? checked : value,
        });
    };

    const handleNewClubChange = (e) => {
        const { name, value, type, checked } = e.target;
        setNewClub({
            ...newClub,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await put(clubToEdit, clubToEdit.id);

        const clubs = await getAll();
        setAllClubs(clubs);

        setIsEdit(false);
        setClubToEdit(null);
    };

    const handleCreateClub = async (e) => {
        e.preventDefault();

        await post(newClub);
        const clubs = await getAll();
        setAllClubs(clubs);
        setNewClub({
            name: "",
            description: "",
            restricted: "",
            interest: "",
            gender: "",
            color: "",
        });
    };

    return (
        <div>
            {allClubs.map((c, index) => (
                <div key={index}>
                    <p className='dark'>{c.id}</p>
                    <p className='dark'>{c.name}</p>
                    <button onClick={() => handleModify(c)}>Edita</button>
                    <button onClick={() => handleDelete(c)}>Elimina</button>
                </div>
            ))}
            {isEdit && clubToEdit && (
                <form className='form-container' onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder='Nombre del Club' value={clubToEdit.name} onChange={handleInputChange} required
                    />
                    <textarea name="description" placeholder='Descripcion del Club' value={clubToEdit.description} onChange={handleInputChange} required>
                    </textarea>
                    <input type="checkbox" name="restricted" checked={clubToEdit.restricted} onChange={handleInputChange}/>
                    <input type="text" name="interest" placeholder='Intereses del Club' value={clubToEdit.interest} onChange={handleInputChange} required/>
                    <input type="text" name="gender" placeholder='Genero. EJ: Fantasía' value={clubToEdit.gender} onChange={handleInputChange} required/>
                    <input type="text" name='color' value={clubToEdit.color} onChange={handleInputChange}/>
                    <button type='submit'>Guardar Cambios</button>
                    <button type='button' onClick={() => setIsEdit(false)}>
                        Cancelar
                    </button>
                </form>
            )}
        </div>
    );
};

export default Clubs;
