import React from 'react';

export default function Main({classN, children  }) {
    return (
    <div className={classN} >
        {children}
    </div>)
    ;
}
