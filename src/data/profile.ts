import { PRESENT, type EndDate, type MonthYear } from '../utils/date'

export interface ExperienceEntry {
  role: string
  startDate: MonthYear
  endDate: EndDate
  location?: string
  bullets: string[]
}

export interface CompanyExperience {
  company: string
  summary?: string
  location?: string
  roles: ExperienceEntry[]
}

export interface EducationEntry {
  school: string
  degree: string
  period: string
}

export interface SkillGroup {
  label: string
  items: string[]
}

export const personal = {
  name: 'Muhammad Asif Nawaz',
  headline: 'Lead Developer | Senior Software Engineer | 6 Years of Experience',
  location: 'United Kingdom',
  email: 'masifnawaz27@gmail.com',
  linkedin: 'https://www.linkedin.com/in/muhammadasifnawaz27',
  newsletter: 'https://www.linkedin.com/in/muhammadasifnawaz27/recent-activity/newsletter/',
  github: 'https://github.com/Asif-Nawaz27',
  summary: [
    'Passionate and results-driven .NET Developer with 6+ years of professional experience, covering all stages of the software development lifecycle, including planning, defining, designing, developing and delivering high-quality applications. Committed to delivering scalable and efficient solutions that align with business objectives.',
    'Strong problem-solving mindset and a keen eye for detail, thriving in collaborative environments where innovation and continuous improvement are valued.',
    'Proficient across a diverse range of technologies, platforms, and server environments, with a deep understanding of modern software architecture and industry best practices.',
  ],
  topSkills: ['DotNet Developer', 'Cloud Engineer', 'Web Engineering', 'Azure DevOps'],
}

export const experience: CompanyExperience[] = [
  {
    company: 'Dartican',
    location: 'Texas, United States',
    summary:
      'Dartican is a USA-based company that develops CompAccelerator, a multi-tenant, multi-lingual, template-driven compensation management platform that lets managers compensate their reporting population via comp workbooks.',
    roles: [
      {
        role: 'Senior Software Engineer',
        startDate: '2022-09',
        endDate: PRESENT,
        bullets: [
          'Full-stack ownership across CompAccelerator: fulfilling new requirements, building services, optimizing database stored procedures and functions, and providing client support for production deployments.',
          'Built an import service that parses, loads, and validates multiple workbooks within a single Excel file, handling every template contained in it.',
          'Built a calculation service that performs the mathematical computations triggered immediately after import completes.',
          'Implemented a Zoho CRM integration to streamline client bug reporting.',
        ],
      },
    ],
  },
  {
    company: 'Norandum',
    location: 'Lahore',
    summary:
      'Norandum AB’s FitnessPlayer platform delivers music solutions for instructors in the gym industry.',
    roles: [
      {
        role: 'Senior Software Engineer',
        startDate: '2022-01',
        endDate: '2022-09',
        bullets: [
          'Promoted to Senior Software Engineer based on technical performance, ownership, and delivery of key product initiatives.',
          'Mentored team members and contributed to technical decision-making, code reviews, and solution design.',
          'Drove ownership of features and integrations that shaped the evolution of the FitnessPlayer platform.',
        ],
      },
      {
        role: 'Software Engineer',
        startDate: '2021-01',
        endDate: '2021-12',
        bullets: [
          'Integrated gym companies with third-party services such as Fortnox, a Swedish invoicing platform that calculates local government taxes.',
          'Built and maintained background worker processes in IIS as part of the agile development of the admin platform.',
          'Integrated the end-user music service with Nano Cosmos, a live-streaming module connecting gym administrators with end users for training sessions.',
        ],
      },
    ],
  },
  {
    company: 'Unique Group of Institutions',
    location: 'Lahore',
    summary:
      'Electronic School Management System for UGI, managing employee data (payroll, attendance) and student records.',
    roles: [
      {
        role: 'Software Developer',
        startDate: '2019-10',
        endDate: '2020-12',
        bullets: [
          'Built student scholarship slabs and a randomized online quiz system, with teacher logins to review quiz results by class.',
          'Built a Learning Management System student portal where students log in with their own credentials to access lectures and quizzes.',
        ],
      },
    ],
  },
]

export const education: EducationEntry[] = [
  {
    school: 'University of Stirling',
    degree: 'Master of Science (MS), Big Data',
    period: 'January 2023 - November 2024',
  },
  {
    school: 'Arid Agriculture University',
    degree: 'BS (Hons), Computer Science',
    period: 'April 2014 - June 2018',
  },
]

export const certifications: string[] = [
  'Judge, Globee® Awards for Technology',
  'International Conference on Collaborative Robotics in Aerospace and Cybersecurity (ICCRAC-26)',
  'AITEX Summit Winter 2026',
]

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['C#', 'TypeScript', 'JavaScript', 'Python', 'C++', 'SQL'],
  },
  {
    label: 'Backend',
    items: ['.NET', 'ASP.NET Core', 'JWT', 'REST APIs'],
  },
  {
    label: 'Frontend',
    items: ['React', 'Angular', 'AngularJS', 'Redux', 'RxJS', 'SolidJS', 'Bootstrap', 'jQuery', 'HTML5', 'CSS3'],
  },
  {
    label: 'Data & Machine Learning',
    items: ['Pandas', 'NumPy', 'PyTorch', 'TensorFlow', 'scikit-learn', 'Keras', 'MLflow', 'Matplotlib', 'SciPy'],
  },
  {
    label: 'Cloud & DevOps',
    items: ['Azure', 'Docker', 'Kubernetes', 'GitHub Actions', 'GitLab CI', 'Octopus Deploy'],
  },
  {
    label: 'Databases',
    items: ['SQL Server', 'PostgreSQL', 'MySQL'],
  },
  {
    label: 'Tools & Practice',
    items: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'Jira', 'Postman', 'Figma'],
  },
]
