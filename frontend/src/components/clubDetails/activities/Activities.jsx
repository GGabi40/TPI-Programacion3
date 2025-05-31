import React, { useState, useEffect } from 'react'
import { useFetch } from '../../hook/useFetch';

import ReviewForm from '../Reviews/ReviewForm';
import ReviewList from '../Reviews/ReviewList';

/* 

// ruta de admin/superadmin
router.post("/clubs/:clubId/activities", createNewActivity);

*/

const Activities = ({ clubId }) => {
    const { getAll } = useFetch(`/clubs/${clubId}/activities`);
    const [allActivities, setAllActivities] = useState([]);

    useEffect(() => {
        const fetchActivity = async () => {
            const activityData = await getAll()
            setAllActivities(activityData)
        }
        fetchActivity();
    }, [])


    return (
        <div>
            {allActivities.map((activ) => (
                <div key={activ.id}>
                    <h4>Actividad: {activ.bookId}</h4>
                    {/* <ReviewForm activityId={activ.id} userId={userId} /> */}
                    {/* <ReviewList activityId={activ.id} userId={userId} /> */}
                </div>
            ))}
        </div>
    )
}

export default Activities