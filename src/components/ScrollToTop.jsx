import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'auto' });
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }
    }, [pathname, hash]);

    return null;
}

export default ScrollToTop;
