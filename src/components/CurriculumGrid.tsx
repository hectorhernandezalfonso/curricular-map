import React from 'react';
import { curriculumData } from '../data/curriculumData';
import SemesterColumn from './SemesterColumn';

const CurriculumGrid: React.FC = () => {
  return (
    <div className="flex p-8 gap-6 overflow-x-auto items-start">
      {curriculumData.map((semester) => (
        <SemesterColumn key={semester.number} semester={semester} />
      ))}
    </div>
  );
};

export default CurriculumGrid;