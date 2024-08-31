import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  { image: 'https://talent24.ai/match_evaluation_detail.png', title: 'Match Evaluation Detail' },
  { image: 'https://talent24.ai/match_evaluation_overview.png', title: 'Match Evaluation Overview' },
  { image: 'https://talent24.ai/resume_evaluation.png', title: 'Resume Evaluation' },
];

export function SlideShowModal({ isOpen, onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] p-0">
        <div className="relative">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-auto"
          />
          <h3 className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
            {slides[currentSlide].title}
          </h3>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-2 transform -translate-y-1/2"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-2 transform -translate-y-1/2"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
