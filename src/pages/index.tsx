import React, { useEffect } from 'react';
import { userService } from '../services/api';

export default function Home() {
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const response = await userService.get();
        console.log('response==>', response);
    };

    return <div>Home Page</div>;
}
