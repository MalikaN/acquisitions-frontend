import React, { useContext } from 'react';
import Project from '../../components/project';
import { AppContext } from '../../contexts/AppContext';

const Products = () => {
    const { projects } = useContext(AppContext);

    return (
        <div>
            {projects.map((project) => (
                <Project key={project.id} project={project} />
            ))}
        </div>
    );
};

export default Products;
