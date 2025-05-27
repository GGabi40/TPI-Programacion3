import React, {useState, useEffect} from 'react'
import ClubForm from '../clubForm/ClubForm';
import { useNavigate, useParams } from 'react-router';
import { useFetch } from '../hook/useFetch';

const { put, getById } = useFetch("/clubs");

const ModifyClub = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [clubData, setClubData] = useState(null);

  useEffect(() => {
    const fetchClub = async () => {
      const club = await getById(id);
      setClubData(club);
    };
    fetchClub();
  }, [id]);

  const handleEdit = async (data) => {
    const updated = await put(data, clubData.id);
    navigate('/mis-clubes');
  };

  if (!clubData) return <p className='dark'>Cargando datos del club...</p>

  return <ClubForm mode="edit" initialData={clubData} onSubmit={handleEdit} />
}

export default ModifyClub
