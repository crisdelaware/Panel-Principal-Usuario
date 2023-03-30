import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Universidad Tecnologica de Aguascalientes',
    title: true
  },
  {
    name: 'Alumno',
    iconComponent: { name: 'cil-user-follow' },
    children: [
      {
        name: 'Adeudos',
        children: [
          {
            name: 'Pagos y Colegiaturas',
            url: '#'
          }
        ]
      },
      {
        name: 'Consultas',
        children: [
          {
            name: 'Historial',
            url: '#'
          },
          {
            name: 'Reporte de Pagos en Banco y Caja',
            url: '#'
          },
          {
            name: 'Datos de Estadia',
            url: '#'
          },
          {
            name: 'Deporte y Cultura',
            url: '#'
          },
          {
            name: 'Titulo XML',
            url: '#'
          },
        ]
      },
      {
        name: 'Datos Personales',
      },
      {
        name: 'Encuestas',
        children: [
          {
            name: 'Evaluacion de Docentes',
            url: '#'
          },
          {
            name: 'Evaluacion de Tutor',
            url: '#'
          },
          {
            name: 'Evaluacion de Servicios a el Estudiante',
            url: '#'
          },
          {
            name: 'Evaluacion Docente (Segunda Etapa)',
            url: '#'
          },
          {
            name: 'Estudio Socioeconomico',
            url: '#'
          },
          {
            name: 'Evaluacion de Orientador',
            url: '#'
          },
          {
            name: 'Evaluacion de Director',
            url: '#'
          },
        ]
      },
      {
        name: 'Reinscripciones',
        children: [
          {
            name: 'ESTATUS para la Reinscripcion',
            url: '#'
          }
        ]
      },
    ]
  },
  {
    name: 'Becas',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Proceso',
        url: '/buttons/buttons',
        children: [
          {
            name: 'Solicitud BECAS',
            url: '#'
          }
        ]
      },
    ]
  },
  {
    name: 'Buzon',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Quejas y Sugerencias',
        url: '/forms/form-control'
      },
    ]
  },
  {
    name: 'Estadias',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Proyectos Disponibles',
        url: '#'
      },
    ]
  },
];
