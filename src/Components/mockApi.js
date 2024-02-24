import React, {useState, useEffect } from "React";

const Paint = () => {

    useEffect(() => {
        fetch('apiEndpoint')
        .then(Response => Response.json())
        .catch(error => console.error('Error fetching paints:', error)); 
    }, []);

    return (
        <div>
            {/*Display the fetched user data */}
            {useSyncExternalStore.map(user => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    );
};
