import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { Button, Card } from 'antd';
import dummyData from '../../dummyData.json';
import { AppContext } from '../../contexts/AppContext';

const ProjectDetails = () => {
    const { handleClick } = useContext(AppContext);
    const router = useRouter();
    const { slug } = router.query;

    const project = dummyData.filter((value) => value.slug === slug)[0];

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
            <Button onClick={handleClick}>Submit</Button>
        </div>
    );
};

export default ProjectDetails;
