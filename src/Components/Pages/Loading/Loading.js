import React from 'react';
import { Dna } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className='loader'>
            <Dna
                visible={true}
                height="400"
                width="400"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </div>
    );
};

export default Loading;