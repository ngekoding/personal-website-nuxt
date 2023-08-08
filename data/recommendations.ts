interface Author {
  name: string
  position: string
  avatar: string
}

interface Recommendation {
  author: Author
  message: string
  meta?: any
}

const recommendations: Recommendation[] = [
  {
    message: 'Nur Muhammad is the main backbone of the successful digital transformation that has been carried out by the Faculty of Engineering since 2018. Nur Muhammad\'s contribution to the implementation of various digital services is very large, so that the Faculty of Engineering UGM has succeeded in obtaining the WBK title from the Minister of PANRB in 2021, which is 1 of 6 Faculties within the Ministry of Education, Culture and Research, out of tens of thousands of Faculties in Indonesia.',
    author: {
      name: 'Prof. Ir. Selo, S.T., M.T., M.Sc., Ph.D., IPU, ASEAN Eng.',
      position: 'Dean of Faculty of Engineering, Universitas Gadjah Mada',
      avatar: '/img/selo.jpeg',
    },
    meta: {
      class: 'bg-purple-500',
    },
  },
  {
    message: 'I meet Nur, when he works as a senior developer in Faculty Engineering of University Gadjah Mada. I managed him directly to develop many information systems that make our team more productive. Nur has high commitment in term of work deliverable, his experience knowledge in PHP and LAMP stack makes him really productive and have good performance. Thank you, Nur, hopefully we can get in touch soon in another project.',
    author: {
      name: 'Dr. Ir. Ridi Ferdiana, S.T., M.T., IPM.',
      position: 'Director of the Directorate of Information Systems and Resources, Universitas Gadjah Mada',
      avatar: '/img/ridi-ferdiana.jpeg',
    },
    meta: {
      class: 'bg-blue-500',
    },
  },
]

export default recommendations
