export interface Course {
  id?: string;
  name: string;
  code?: string;
  pdfPath?: string;
  type?: 'regular' | 'optional' | 'free-choice';
  options?: string[]; 
}

export interface Semester {
  number: number;
  courses: Course[];
}

export const curriculumData: Semester[] = [
  {
    number: 1,
    courses: [
      { id: 'C1000024', name: 'Principios de Química', code: '1000024', pdfPath: '/pdf/1000024.pdf' },
      { id: 'C1000003', name: 'Álgebra Lineal', code: '1000003', pdfPath: '/pdf/1000003.pdf' },
      { id: 'C1000004', name: 'Cálculo Diferencial', code: '1000004', pdfPath: '/pdf/1000004.pdf' },
      { id: 'C1000019', name: 'Fundamentos de Mecánica', code: '1000019', pdfPath: '/pdf/1000019.pdf' },
      { id: 'C2015718', name: 'Introducción a la Ingeniería Química', code: '2015718', pdfPath: '/pdf/2015718.pdf' },
      { name: 'Libre elección (3)', type: 'free-choice' }
    ]
  },

  {
    number: 2,
    courses: [
      { id: 'C1000025', name: 'Laboratorio de Técnicas básicas en Química', code: '1000025', pdfPath: '/pdf/1000025.pdf' },
      { id: 'C1000005', name: 'Cálculo Integral', code: '1000005', pdfPath: '/pdf/1000005.pdf' },
      { id: 'C1000017', name: 'Fundamentos de Electricidad y Magnetismo', code: '1000017', pdfPath: '/pdf/1000017.pdf' },
      { id: 'C2015708', name: 'Balance de Materia', code: '2015708', pdfPath: '/pdf/2015708.pdf' },

      // OPTIONAL
      {
        name: 'Optativa - Herramientas de Ingeniería (3)',
        type: 'optional',
        options: [
          'Modelado y Simulación I',
          'Herramientas Computacionales para Ingeniería',
          'MATLAB Aplicado a Ingeniería',
          'Diseño Asistido por Computador (CAD)'
        ]
      },

      { name: 'Libre elección (3)', type: 'free-choice' }
    ]
  },

  {
    number: 3,
    courses: [
      { id: 'C1000026', name: 'Principios de Análisis Químico', code: '1000026', pdfPath: '/pdf/1000026.pdf' },
      { id: 'C1000028', name: 'Principios de Química Inorgánica', code: '1000028', pdfPath: '/pdf/1000028.pdf' },
      { id: 'C1000006', name: 'Cálculo en Varias Variables', code: '1000006', pdfPath: '/pdf/1000006.pdf' },
      { id: 'C1000013', name: 'Probabilidad y Estadística Fundamental', code: '1000013', pdfPath: '/pdf/1000013.pdf' },
      { id: 'C20155741', name: 'Termodinámica', code: '2015741', pdfPath: '/pdf/2015741.pdf' }
    ]
  },

  {
    number: 4,
    courses: [
      { id: 'C1000027', name: 'Laboratorio de Principios de Análisis Químico', code: '1000027', pdfPath: '/pdf/1000027.pdf' },
      { id: 'C1000030', name: 'Principios de Química Orgánica', code: '1000030', pdfPath: '/pdf/1000030.pdf' },
      { id: 'C1000007', name: 'Ecuaciones Diferenciales', code: '1000007', pdfPath: '/pdf/1000007.pdf' },
      { id: 'C2015714', name: 'Fluidos', code: '2015714', pdfPath: '/pdf/2015714.pdf' },
      { id: 'C20155740', name: 'Termodinámica Química', code: '2015740', pdfPath: '/pdf/2015740.pdf' }
    ]
  },

  {
    number: 5,
    courses: [
      { id: 'C1000010', name: 'Laboratorio de Principios de Química Orgánica', code: '1000031', pdfPath: '/pdf/1000031.pdf' },
      { id: 'C2015970', name: 'Métodos Numéricos', code: '2015970', pdfPath: '/pdf/2015970.pdf' },
      { id: 'C2015703', name: 'Ingeniería Económica', code: '2015703', pdfPath: '/pdf/2015703.pdf' },
      { id: 'C2015743', name: 'Transferencia de Calor', code: '2015743', pdfPath: '/pdf/2015743.pdf' },
      { id: 'C2015276', name: 'Manejo de Sólidos', code: '2015726', pdfPath: '/pdf/2015726.pdf' },
      { id: 'C2015707', name: 'Balance de Energía y Equilibrio Químico', code: '2015707', pdfPath: '/pdf/2015707.pdf' }
    ]
  },

  {
    number: 6,
    courses: [
      { name: 'Principios de los Procesos Biotecnológicos (3) - **Pendiente**' },
      { id: 'C2015702', name: 'Gerencia y Gestión de Proyectos', code: '2015702', pdfPath: '/pdf/2015702.pdf' },
      { id: 'C2015744', name: 'Transferencia de Masa', code: '2015744', pdfPath: '/pdf/2015744.pdf' },
      { id: 'C2015721', name: 'Laboratorio de Propiedades Termodinámicas y de Transporte', code: '2015721', pdfPath: '/pdf/2015721.pdf' },
      { id: 'C2015716', name: 'Ingeniería de las Reacciones Químicas', code: '2015716', pdfPath: '/pdf/2015716.pdf' },

      // OPTIONAL
      {
        name: 'Taller de Ingeniería Química (2) - **Pendiente**',
        type: 'optional',
        options: [
          'Taller de Seguridad Industrial',
          'Taller de Diseño de Procesos',
          'Taller de Optimización en Ingeniería'
        ]
      }
    ]
  },

  {
    number: 7,
    courses: [
      {
        name: 'Optativa - Ciencias Económicas y Administrativas (3)',
        type: 'optional',
        options: [
          'Economía Industrial',
          'Gestión Financiera',
          'Administración Pública',
          'Economía Ambiental'
        ]
      },

      { id: 'C2015731', name: 'Operaciones de Separación', code: '2015731', pdfPath: '/pdf/2015731.pdf' },
      { id: 'C2015719', name: 'Lab. De Fluidos, Sólidos y Transferencia de Calor', code: '2015719', pdfPath: '/pdf/2015719.pdf' },

      {
        name: 'Optativa - Termodinámica (3)',
        type: 'optional',
        options: [
          'Termodinámica Avanzada',
          'Propiedades de Fluidos',
          'Termodinámica de Reactores'
        ]
      },

      { name: 'Libre elección (3)', type: 'free-choice' },
      { name: 'Libre elección (3)', type: 'free-choice' }
    ]
  },

  {
    number: 8,
    courses: [
      {
        name: 'Optativa - Materiales (3)',
        type: 'optional',
        options: [
          'Ciencia de Materiales I',
          'Polímeros Industriales',
          'Materiales Cerámicos',
          'Nanomateriales'
        ]
      },

      { id: 'C2015710', name: 'Control de Procesos', code: '2015710', pdfPath: '/pdf/2015710.pdf' },

      { name: 'Diseño de Productos y Procesos Químicos y Bioquímicos (3) - **Pendiente**' },

      {
        name: 'Optativa - Procesos Químicos y Bioquímicos (3)',
        type: 'optional',
        options: [
          'Bioprocesos',
          'Tecnología Enzimática',
          'Procesos Fermentativos',
          'Ingeniería Bioquímica Avanzada'
        ]
      },

      { name: 'Libre elección (3)', type: 'free-choice' },
      { name: 'Libre elección - Profundización (4)', type: 'free-choice' }
    ]
  },

  {
    number: 9,
    courses: [
      { id: 'C2015737', name: 'Taller de Proyectos Interdisciplinarios', code: '2015737', pdfPath: '/pdf/2015737.pdf' },
      { id: 'C2015715', name: 'Ingeniería de Procesos', code: '2015715', pdfPath: '/pdf/2015715.pdf' },
      { id: 'C2015720', name: 'Laboratorio de Operac. de Separac., Reac. y Control', code: '2015720', pdfPath: '/pdf/2015720.pdf' },
      { name: 'Libre elección (3)', type: 'free-choice' },
      { name: 'Libre elección - Profundización (4)', type: 'free-choice' }
    ]
  },

  {
    number: 10,
    courses: [
      { id: 'C2015289', name: 'Trabajo de Grado', code: '2015289', pdfPath: '/pdf/2015289.pdf' },
      { id: 'C2015712', name: 'Diseño de Plantas y Equipos', code: '2015712', pdfPath: '/pdf/2015712.pdf' },
      { name: 'Libre elección (3)', type: 'free-choice' },
      { name: 'Libre elección - Profundización (4)', type: 'free-choice' }
    ]
  }
];
