import React from 'react';
import type { Semester } from '../data/curriculumData';
import CourseCard from './CourseCard';

interface SemesterColumnProps {
  semester: Semester;
}

const SemesterColumn: React.FC<SemesterColumnProps> = ({ semester }) => {
  return (
    <div className="min-w-[280px] flex-shrink-0 bg-white rounded-lg shadow-lg p-4 border-t-[6px] border-blue-600">
      <h2 className="text-center text-blue-600 text-2xl font-bold border-b-2 border-gray-200 pb-2 mb-4">
        Semestre {semester.number}
      </h2>
      <div>
        {semester.courses.map((course, index) => (
          <CourseCard key={course.id || `${semester.number}-${index}`} course={course} />
        ))}
      </div>
    </div>
  );
};

export default SemesterColumn;