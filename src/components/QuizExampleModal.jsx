import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

export function QuizExampleModal({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[1288px] p-0">
        <div className="w-[1288px] h-[545px]">
          <img
            src="/ai-powered-generation-of-questionnaires.png"
            alt="AI-powered generation of questionnaires"
            className="w-full h-full object-cover"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}