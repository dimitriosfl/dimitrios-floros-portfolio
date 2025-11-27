import { useEffect, useRef, useState } from "react";

export default function RevealOnScroll({ children })
{
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() =>
    {
        const observer = new IntersectionObserver(([entry]) =>
        {
            if (entry.isIntersecting)
            {
                setIsVisible(true);
            } else
            {
                setIsVisible(false);
            }
        }, {
            threshold: 0.2,
            rootMargin: "0px 0px -50px 0px"
        });

        if (ref.current)
        {
            observer.observe(ref.current);
        }

        return () =>
        {
            if (ref.current)
            {
                observer.unobserve(ref.current);
            }
            observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`reveal ${isVisible ? 'visible' : ''}`}
        >
            {children}
        </div>
    );
}
