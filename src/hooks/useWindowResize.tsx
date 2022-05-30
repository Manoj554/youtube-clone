import { useState, useEffect } from 'react';
import { WindowSizeObj } from '../../types';

const useWindowResize = () => {
    const windowObj = { height: 0, width: 1496 };
    const [windowSize, setWindowSize] = useState<WindowSizeObj>(windowObj);

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                ...windowSize,
                height: window.innerHeight,
                width: window.innerWidth
            });
        }
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [windowSize]);

    return windowSize;
}

export default useWindowResize;