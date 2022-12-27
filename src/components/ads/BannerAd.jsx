import React from 'react';
import {Adsense} from '@ctrl/react-adsense';


export const BannerAd = ({  }) => {

    return (
        <div> 
            <Adsense
                client="ca-pub-1461162184042470"
                style={{ display: 'block' }}
                layout="in-article"
                format="fluid"
            />
        </div>
    )
}