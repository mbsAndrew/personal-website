import React, { Suspense } from 'react';

const Intro = React.lazy(() => import("./Intro"));

const IntroContainer = () => {
    return (
        <Suspense fallback={"Hello there"}>
            <Intro />
        </Suspense>
    );
};

export default IntroContainer;