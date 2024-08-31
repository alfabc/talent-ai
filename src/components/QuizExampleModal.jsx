import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

export function QuizExampleModal({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-0 w-auto h-auto max-w-none">
        <div className="overflow-auto">
          <img
            src="https://talent24.ai/quiz_generation.png"
            alt="AI-powered Quiz Generation"
            className="w-auto h-auto"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
