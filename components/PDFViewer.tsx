
import React, { useEffect, useRef } from 'react';

interface PDFViewerProps {
  url: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ url }) => {
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preventContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const container = viewerRef.current;
    if (container) {
      container.addEventListener('contextmenu', preventContextMenu);
    }

    return () => {
      if (container) {
        container.removeEventListener('contextmenu', preventContextMenu);
      }
    };
  }, []);

  // PDF.js or browser iframe with toolbar disabled
  const protectedUrl = `${url}#toolbar=0&navpanes=0&scrollbar=0`;

  return (
    <div className="relative mt-8 group">
      <div className="absolute top-0 left-0 right-0 h-10 bg-gray-900 text-white flex items-center px-4 justify-between rounded-t-lg z-10 pointer-events-none">
        <span className="text-sm font-medium">InfosSewa Secure PDF Viewer (View Only)</span>
        <span className="text-xs">Download Disabled</span>
      </div>
      <div ref={viewerRef} className="relative w-full h-[800px] border border-gray-300 rounded-lg shadow-inner overflow-hidden bg-gray-100">
        <iframe
          src={protectedUrl}
          className="w-full h-full"
          title="Document Viewer"
          onContextMenu={(e) => e.preventDefault()}
        />
        {/* Overlay to intercept right clicks if the iframe doesn't catch them */}
        <div 
          className="absolute inset-0 pointer-events-none select-none opacity-0"
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>
      <p className="text-center text-gray-500 text-xs mt-2 italic">
        * This document is for viewing purposes only. Right-click and downloads are restricted to protect content integrity.
      </p>
    </div>
  );
};

export default PDFViewer;
