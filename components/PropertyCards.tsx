import { Card, Carousel, Col, Row, Tag } from 'antd'
import Image from 'next/image'
import React from 'react'
import DefaultImg from '@/public/images/default-img.png'
import { HomeOutlined, ExpandAltOutlined, UserOutlined, EnvironmentOutlined } from '@ant-design/icons'
import { PropertyWithImages } from '@/db'
import Link from 'next/link'


const PropertyCards = ({ properties, layout }: { properties: PropertyWithImages[], layout: "horizontal" | "vertical" | null }) => {
    return (
        <>
            {layout === "vertical" ?
                <Row gutter={[16, 16]} wrap>
                    {properties.map((property) => (
                        <Col key={property.id} xs={24} md={8}>
                            <Card hoverable className='p-0 mb-1 pointer'>
                                <Carousel arrows className='h-50'>
                                    {property.images.length > 0 ? (
                                        property.images.map((image: { url: string }, i: number) => (
                                            <Image key={i}
                                                src={image.url}
                                                alt='property image'
                                                width={0}
                                                height={200}
                                                objectFit='cover'
                                                sizes='100vw'
                                                className='image-br'
                                                priority
                                            />
                                        ))
                                    ) : (
                                        <Image
                                            src={DefaultImg.src}
                                            alt='Default image'
                                            width={0}
                                            height={200}
                                            objectFit='cover'
                                            sizes='100vw'
                                            className='image-br'
                                        />
                                    )}
                                </Carousel>
                                <div className='p-1'>
                                    <PropertyContent property={property} />
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row> : (
                    properties.map((property) => (
                        <Card key={property.id} hoverable className='p-0 mb-1 pointer'>
                            <Row gutter={[16, 16]} wrap>
                                <Col xs={24} md={8}>
                                    <Carousel arrows className='h-50'>
                                        {property.images.length > 0 ? (
                                            property.images.map((image: { url: string }, i: number) => (
                                                <Image key={i}
                                                    src={image.url}
                                                    alt='property image'
                                                    width={0}
                                                    height={200}
                                                    objectFit='cover'
                                                    sizes='100vw'
                                                    className='image-br'
                                                    priority
                                                />
                                            ))
                                        ) : (
                                            <Image
                                                src={DefaultImg.src}
                                                alt='Default image'
                                                width={0}
                                                height={200}
                                                objectFit='cover'
                                                sizes='100vw'
                                                className='image-br'
                                            />
                                        )}
                                    </Carousel>
                                </Col>
                                <Col xs={24} md={16} className='p-1'>
                                    <Link href={`/properties/${property.id}`} className='text-black'>
                                        <PropertyContent property={property} />
                                    </Link>
                                </Col>
                            </Row>
                        </Card>
                    ))
                )}
        </>
    )
}

const PropertyContent = async ({ property }: { property: PropertyWithImages }) => {
    return (
        <>
            <div className='card-header'>
                <p className='card-header-title'>
                    For {property.type.toUpperCase()}
                </p>
                <p className='card-header-price'>
                    ${property.price.toLocaleString()}
                </p>
            </div>
            <Tag icon={<HomeOutlined />} color="blue">
                {property.bhk.split("_").join(" ")}
            </Tag>
            <Tag icon={<HomeOutlined />} color="blue">
                {property.propertyType}
            </Tag>
            <Tag icon={<ExpandAltOutlined />} color="blue">
                {property.area} sqft
            </Tag>
            <Tag icon={<UserOutlined />} color="blue">
                {property.preferredTenants}
            </Tag>
            <h4 className='mt-1'>{property.name}</h4>
            <p className='card-desc'>
                {property.description?.slice(0, 180)}{" "}
                {property.description && property.description.length > 180 && "..."}
            </p>
            <EnvironmentOutlined />
            {property.street}, {property.city}, {property.state}, {property.zipcode}
        </>
    )
}

export default PropertyCards