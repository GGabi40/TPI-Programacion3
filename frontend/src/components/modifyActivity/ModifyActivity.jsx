import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router';
import { useFetch } from '../hook/useFetch';
import ActivityForm from '../activityForm/ActivityForm';



const ModifyActivity = () => {
  const { put, getById } = useFetch("/activities");
  const { id } = useParams();
  const navigate = useNavigate();

  const [activityData, setActivityData] = useState(null);

  useEffect(() => {
    const fetchActivity = async () => {
      const activity = await getById(id);
      setActivityData(activity);
    };
    fetchActivity();
  }, [id]);

  const handleClickEdit = async (data) => {
    const updated = await put(data, clubData.id);
    navigate('/activities');
  };

  if (!activityData) return <p className='dark'>Cargando datos de la actividad...</p>

  return <ActivityForm mode="edit" initialData={activityData} onSubmit={handleClickEdit} />
}

export default ModifyActivity