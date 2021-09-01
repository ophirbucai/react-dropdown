import {useRef, useEffect} from 'react';

export default function useClickOutside(handler) {
    const domNode = useRef();

    useEffect(() => {
        const maybeHandler = e => {
            if (!domNode.current.contains(e.target)) {
                handler();
            }
        }
        document.addEventListener('click', maybeHandler);
        return () => document.removeEventListener('click', maybeHandler)// eslint-disable-next-line
    }, []);

    return domNode;
}