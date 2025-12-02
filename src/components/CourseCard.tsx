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

  const CardContent = (
    <div
      className={`${getTypeClasses()} border rounded-md p-3 my-2 text-center transition-all duration-200
      hover:shadow-md hover:-translate-y-0.5 cursor-pointer min-h-[60px] flex items-center justify-center`}
    >
      <span className="font-semibold text-sm text-black">{course.name}</span>
    </div>
  );

  const Wrapper = course.pdfPath ? (
    <a href={course.pdfPath} target="_blank" rel="noopener noreferrer" className="block no-underline">
      {CardContent}
    </a>
  ) : (
    CardContent
  );

  return (
    <div className="relative group">
      {Wrapper}

      {/* OPTIONAL DROPDOWN */}
      {course.type === 'optional' && course.options && (
        <div
          className="
            absolute left-0 w-full mt-1 opacity-0 invisible 
            group-hover:opacity-100 group-hover:visible 
            transition-all duration-300 z-20
          "
        >
          <div className="bg-white shadow-lg rounded-md border p-2">
            <p className="text-xs font-semibold text-gray-700 mb-1">Opciones disponibles:</p>

            <ul className="space-y-1">
              {course.options.map((opt, index) => (
                <li
                  key={index}
                  className="
                    text-xs bg-gray-50 hover:bg-gray-100 p-2 rounded border 
                    transition-colors cursor-pointer
                  "
                >
                  {opt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseCard;
