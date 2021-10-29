import React from 'react';
import { Card } from 'antd';
import Link from 'next/link';

type TProject = {
    id: number;
    name: string;
    slug: string;
    logo: string;
    price: string;
    description: string;
    country: string;
    revenue: string;
};

type ProjectProps = {
    project: TProject;
};
const Project = (props: ProjectProps) => {
    const { project } = props;
    const { country, description, id, logo, name, price, revenue, slug } = project;

    return (
        <div className="site-card-border-less-wrapper">
            <Link href="/project/[slug]" as={`/project/${slug}`}>
                <Card style={{ width: '100%' }}>
                    <p>{id}</p>
                    <p>{name}</p>
                    <p>{country}</p>
                    <p>{description}</p>
                    <p>
                        <img src={logo} alt="" width={100} height={100} />
                    </p>
                    <p>{price}</p>
                    <p>{revenue}</p>
                </Card>
            </Link>
        </div>
    );
};
export default Project;
