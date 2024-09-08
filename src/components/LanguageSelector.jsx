import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LanguageSelector = ({ language, setLanguage }) => {
  return (
    <Select value={language} onValueChange={setLanguage}>
      <SelectTrigger className="w-[60px]">
        <SelectValue>
          {language === 'en' ? '🇬🇧' : language === 'es' ? '🇪🇸' : '🇩🇪'}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">🇬🇧</SelectItem>
        <SelectItem value="es">🇪🇸</SelectItem>
        <SelectItem value="de">🇩🇪</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;