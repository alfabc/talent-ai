import React from 'react';

const VideoSection = ({ t }) => {
  return (
    <section className="mb-16">
      <h3 className="text-3xl font-semibold mb-6 text-center">{t?.videoSection?.title || 'See Talent AI in Action'}</h3>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src="https://www.youtube.com/embed/fVVG_vpH6ag"
          title="Talent AI Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSection;