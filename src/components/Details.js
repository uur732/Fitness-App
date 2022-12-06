import { Stack, Typography, Button } from '@mui/material'
import React from 'react'

import bodyPartImage from '../assets/icons/bodyPartImage.png';
import equipmentImage from '../assets/icons/equipmentImage.png';
import targerImage from '../assets/icons/targerImage.png';



const Details = ({ exerciseDetail }) => {
    // http://localhost:3000/#/exercise/0007
    {/*const exerciseDetail = [
        {
            bodyPart:"back",
            equipment:"cable",
            gifUrl:"http://d205bpvrqc9yn1.cloudfront.net/0007.gif",
            id:"0007",
            name:"alternate lateral pulldown",
            target:"lats"
        }
      ];*/}


    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

    const extraDetail = [
        {
            icon: bodyPartImage,
            name: bodyPart,
        },
        {
            icon: equipmentImage,
            name: equipment,
        },
        {
            icon: targerImage,
            name: target,
        },
    ];


    return (
        <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
            <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
            <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
                <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize" color="#4F4C4C">
                    {name}
                </Typography>
                <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
                    Exercises keep you strong.{' '}
                    <span style={{ textTransform: 'capitalize' }}>{name}</span> is one
                    of the best <br /> exercises to target your {target}. It will help you improve your{' '}
                    <br /> mood and gain energy.
                </Typography>
                {extraDetail.map((item) => (
                    <Stack key={item.name} direction="row" gap="24px" alignItems="center">
                        <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
                            <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
                        </Button>
                        <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }} color="#4F4C4C">
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
};

export default Details;