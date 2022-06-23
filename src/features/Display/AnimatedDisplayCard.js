import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';


function AnimatedDisplayCard({item}) {
    const { image, name, description } = item;
    const [toggle, setToggle] = useState(false);

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
        config: { duration: 1500 }
    })

    useEffect(() => {
        setToggle(true)
        return () => {
            
        };
    }, []);

    return (
        <animated.div style={animatedStyle}>
            <Card>
                <CardImg src={image} alt={name} />
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </animated.div>
    )
}

export default AnimatedDisplayCard
