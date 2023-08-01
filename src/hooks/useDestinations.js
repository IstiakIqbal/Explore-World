import axios, * as others from 'axios';
const { useState, useEffect } = require("react");


const useDestinations = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();

    const options = {
        method: 'GET',
        url: 'destinationsData.json',
        params: {
        },
        headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': ''
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await axios.get(options);
                // setData(res);
                console.log(res);
            }
            catch (error) {
                console.error(error);
            }
            setLoading(false);
        }
        fetchData();
    }, []);
    return [data, setData, loading];
};

export default useDestinations;