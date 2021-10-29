import React, { useEffect, useState } from 'react';
import dummyData from '../dummyData.json';

type TProps = {
    children: JSX.Element;
};

const initContextValue = {
    projects: [],
    handleClick: () => null,
};

export const AppContext = React.createContext(initContextValue);

export const AppContextProvider = ({ children }: TProps) => {
    const [projects, setProjects] = useState([]);

    const fetchProjects = () => {
        setProjects(dummyData);
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleClick = () => {
        console.log('hello');
    };

    const value = {
        projects,
        handleClick,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
