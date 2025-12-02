import React from 'react';
import type { Course } from '../data/curriculumData';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const getTypeClasses = () => {
    switch (course.type) {
      case 'optional':
        return 'bg-orange-50 border-orange-400';
      case 'free-choice':
        return 'bg-green-50 border-green-500';
      default:
        return 'bg-blue-50 border-blue-200';
    }
  };

  const content = (
    <div
      className={`${getTypeClasses()} border rounded-md p-3 my-2 text-center transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 cursor-pointer min-h-[60px] flex items-center justify-center`}
    >
      <span className="font-semibold text-sm text-black">{course.name}</span>
    </div>
  );

  if (course.pdfPath) {
    return (
      <a href={course.pdfPath} target="_blank" rel="noopener noreferrer" className="block no-underline">
        {content}
      </a>
    );
  }

  return content;
};

export default CourseCard;