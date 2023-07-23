import React from 'react'

function UserProfile({ params }: any) {
    return (
        <div>User profile of {params.id}</div>
    );
}

export default UserProfile