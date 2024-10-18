import React from 'react';

const BottomShadowDiv = ({ children }) => {
    return (
        <div className="relative shadow-bottom p-5 bg-white">
            {children}
        </div>
    );
};

export default BottomShadowDiv;