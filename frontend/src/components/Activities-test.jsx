import React, { useEffect, useState } from 'react'
import { useFetch } from './hook/useFetch';

const { getAll, put, del } = useFetch("/activities");

const Activities = () => {

    const [allActivities, setAllActivities] = useState([]);
    const [activityToEdit, setActivityToEdit] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {
            const activities = await getAll();
            setAllActivities(activities);
        };
        fetchData();
    }, []);

    const handleEdit = (activity) => {
        console.log("editando la actividad con id: ", activity.id);
        setActivityToEdit(activity);
        setIsEdit(true);
        return;
    };

    const handleDelete = async (activity) => {
        console.log("eliminando actividad con id: ", activity.id);
        await del(activity.id);
        const activities = await getAll();
        setAllActivities(activities);
        return;
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setActivityToEdit({
            ...activityToEdit,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await put(activityToEdit, activityToEdit.id);

        const activities = await getAll();
        setAllActivities(activities);

        setIsEdit(false);
        setActivityToEdit(null);
    };
    
    
    return (
        <div>
            {allActivities.map((a, index) => (
                <div key={index}>
                    <p className='dark'>{a.id}</p>
                    <p className='dark'>{a.name}</p>
                    <button onClick={() => handleEdit(a)}>Edita Act</button>
                    <button onClick={() => handleDelete(a)}>Elimina Act</button>
                </div>
            ))}
            {isEdit && activityToEdit && (
                <form className='form-container' onSubmit={handleSubmit}>
                    <input type="text" name="nameBook" placeholder='Nombre del Libro' value={activityToEdit.name} onChange={handleInputChange} required />
                    <input type="text" name="progress" value={activityToEdit.progress} onChange={handleInputChange} required />
                    <input type="date" name="dateStart" value={activityToEdit.dateStart} onChange={handleInputChange} required />
                    <input type="date" name="dateEnd" value={activityToEdit.dateEnd} onChange={handleInputChange} />
                    <button type='submit'>Guardar Cambios</button>
                    <button type='button' onClick={() => setIsEdit(false)}>
                        Cancelar
                    </button>
                </form>
            )}

        </div>
    );
};

export default Activities;
