import React from 'react'
import { useParams } from 'react-router-dom';

function AdminProfile() {
    const params = useParams();
    const paramsId = params.id


    return (
        <div>AdminProfile</div>
    )
}

export default AdminProfile