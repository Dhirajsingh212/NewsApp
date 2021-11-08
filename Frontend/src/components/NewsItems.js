import '/home/cryptoknight/Desktop/my-app/src/components/NewsItem.css';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Item1 = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    fontFamily: '"Gill Sans", sans-serif',
    color: 'black',
    fontSize: '18px',
    fontWeight: 'bolder'
}))
export default function NewsItems(props) {

    let alternate = "data:image/jpeg;base64,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";
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={5}>
                {props.data.map((items, index) => {
                    return (
                        <Grid item sm={12} md={6} lg={4} key={index}>
                            <Item1 className="heading">{!items.title.length>75?items.title:items.title.slice(0  ,75)}...</Item1>
                            <Item>
                                <img
                                    src={items.urlToImage==='null'?alternate:items.urlToImage}
                                    alt=""
                                    className="img"
                                />
                            </Item>
                            <Item className="content">
                                {items.content?items.content.slice(0,100):items.content}...
                            </Item>
                            <Item>
                            <a href={items.url} target="_blank" rel="noreferrer" className="d-flex justify-content-end">Read more</a>
                            </Item>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}
