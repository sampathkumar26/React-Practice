import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Col, Row, Space } from 'antd';
import React, { useEffect, useState } from 'react';


function UseEffect() {

    const [ resource, setResources ] = useState( 'posts' );
    const [ items, setItems ] = useState( [] );

    useEffect( () => {

        fetch( ` https://jsonplaceholder.typicode.com/${ resource }` )
            .then( response => response.json() )
            .then( json => setItems( json ) )
    }, [ resource ] )


    return (
        <>
            <Space.Compact block className="btn-group">
                <Button className="btn" type="primary" onClick={ () => setResources( 'posts' ) }>Posts</Button>
                <Button type="primary" onClick={ () => setResources( 'users' ) }>Users</Button>
                <Button type="primary" onClick={ () => setResources( 'comments' ) }>Comments</Button>
            </Space.Compact>

            <h2>{ resource }</h2>

            <Space className="space">
                <Row gutter={ [ 16, 16 ] }>
                    {
                        items.map( item => {
                            if ( resource === 'posts' ) {
                                return (
                                    <Col key={ item.id } span={ 6 }>
                                        <Card title={ item.title }>
                                            { item.body }
                                        </Card>
                                    </Col>

                                )
                            }
                            else if ( resource === 'users' ) {
                                return <Col key={ item.id } span={ 8 }>
                                    <Card className='card'>
                                        <img src='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairDreads&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
                                            alt='img' />
                                        <h2>{ item.name }</h2>
                                        <h4>{ item.username } <br />
                                            { item.phone }<br />
                                            { item.website }<br />
                                        </h4>
                                    </Card>
                                </Col>
                            }
                            else {
                                return <Col key={ item.id } span={ 6 }>
                                    <Card title={ item.name }>
                                        <h5>{ item.email }</h5>
                                        { item.body }
                                    </Card>
                                </Col>

                            }
                        } )
                    }
                </Row>
            </Space>
        </> )
}

export default UseEffect;