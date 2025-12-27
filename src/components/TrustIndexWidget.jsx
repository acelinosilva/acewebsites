import React, { useEffect, useRef } from 'react';

const TrustIndexWidget = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Create the script element
        const script = document.createElement('script');
        script.src = 'https://cdn.trustindex.io/loader.js?dfef5c661a77196ef116987711a';
        script.async = true;
        script.defer = true;

        // Append the script directly to the specific container
        // This helps the loader find the intended position
        containerRef.current.appendChild(script);

        // Cleanup: remove the script when component unmounts
        return () => {
            if (script && script.parentNode) {
                script.parentNode.removeChild(script);
            }
            // Some TrustIndex widgets might create global overlays or tags
            // but the main widget should be inside the container now.
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="trustindex-widget-container"
            style={{ minHeight: '400px', width: '100%', position: 'relative' }}
        >
            {/* The widget will be injected here by the loader script */}
        </div>
    );
};

export default TrustIndexWidget;
