import React from 'react';
import { Button } from "@/components/ui/button";
import { Play } from 'lucide-react';

export const VideoSection = ({ openVideoModal }) => (
  <section className="mb-16">
    <h3 className="text-3xl font-semibold mb-6 text-center">See Talent AI in Action</h3>
    <div className="relative w-full max-w-3xl mx-auto">
      <img
        src={`https://img.youtube.com/vi/fVVG_vpH6ag/maxresdefault.jpg`}
        alt="Talent AI Video Thumbnail"
        className="w-full h-auto rounded-lg shadow-lg"
      />
      <Button
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        onClick={openVideoModal}
      >
        <Play className="mr-2 h-4 w-4" /> Watch Video
      </Button>
    </div>
  </section>
);