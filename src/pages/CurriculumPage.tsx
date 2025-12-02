import React from 'react';
import Header from '../components/Header';
import CurriculumGrid from '../components/CurriculumGrid';

const CurriculumPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <CurriculumGrid />
    </div>
  );
};

export default CurriculumPage;