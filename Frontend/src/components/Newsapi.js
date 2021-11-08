import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import NewsItems from './NewsItems.js';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function Newsapi(props) {
    const [page, setpage]=useState(1);
    const [data, setdata] = useState([]);
    const [totalresults, settotalresults]=useState(0)

    useEffect(() => {
        axios
            .get(
                `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey={add apikey here}&page=${page}&pageSize=21`
            )
            .then((res) => {;
                setdata(res.data.articles);
                settotalresults(res.data.totalResults);
            })
            .catch((err) => console.log(err));
    }, [page]);

    const handleprevclick=()=>{
        setpage(page-1);
    }
    
    const handlenextclick=()=>{
        setpage(page+1);
    }

    const numpages = (Math.ceil(totalresults/21));

    return (
        <>
            <div className="container d-flex justify-content-between my-3">
                <Button
                    variant="contained"
                    color="inherit"
                    startIcon={<KeyboardBackspaceIcon />}
                    onClick={handleprevclick}
                    disabled={page<=1}
                >
                    
                </Button>
                <Button
                    variant="contained"
                    color="inherit"
                    endIcon={<ArrowRightAltIcon />}
                    onClick={handlenextclick}
                    disabled={page===numpages}
                >
                </Button>
            </div>
            <div className="my-4">
                <NewsItems data={data} />
            </div>
        </>
    );
}
