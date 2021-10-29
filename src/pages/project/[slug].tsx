import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { Button, Card } from 'antd';
import { AppContext } from '../../contexts/AppContext';

const ProjectDetails = () => {
    const { projects } = useContext(AppContext);
    const router = useRouter();
    const { slug } = router.query;

    if (projects.length === 0) {
        return <div>Loading..</div>;
    }

    const project = projects.filter((value) => value.slug === slug)[0];

    return (
        <div>
            <Card style={{ width: '100%' }}>
                <p>{project.id}</p>
                <p>{project.name}</p>
                <p>{project.country}</p>
                <p>{project.description}</p>
                <p>
                    <img src={project.logo} alt="" width={100} height={100} />
                </p>
                <p>{project.price}</p>
                <p>{project.revenue}</p>
            </Card>
        </div>
    );
};

export default ProjectDetails;
