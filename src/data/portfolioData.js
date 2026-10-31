// Edit this file whenever you want to update your portfolio content.
export const portfolio = {
  name: 'Vignesh Sathishkumar',
  headline: 'Business Analyst | Business Operations | Process Improvement',
  location: 'Chennai, India',
  preferredLocations: 'Bengaluru / Chennai',
  email: 'vigneshorca@gmail.com',
  phone: '+91 8667322750',
  linkedin: 'https://www.linkedin.com/in/vignesh-sathishkumar',
  github: 'https://github.com/vignesh-sathishkumar',
  projectGithub: 'https://github.com/vignesh-sathishkumar/revenue-sales-operations-intelligence',
  summary: 'Business operations and technology professional with nearly four years of experience at Infosys supporting enterprise banking and telecom processes. Skilled in business requirements clarification, workflow analysis, reporting automation, SQL-based data validation, incident investigation and cross-functional delivery. MBA graduate with experience coordinating operational activities, improving process controls and translating business needs into practical system enhancements.',
  about: [
    'At Infosys, I worked with business stakeholders, developers and QA teams to clarify functional needs, analyze workflows, validate data and support banking and telecom applications.',
    'I bring an MBA and a technical foundation to business analysis, operations, process improvement and cross-functional delivery. My portfolio includes synthetic-data sales and inventory analytics projects built with Python, Excel and SQL.'
  ],
  experience: [
    { company: 'Infosys Limited', title: 'System Engineer – Business Applications & Operations', dates: 'Feb 2022 – Jan 2026', subtitle: 'Banking and telecom', bullets: [
      'Clarified functional needs and supported enterprise application enhancements with business stakeholders, developers and QA teams.',
      'Supported Core Banking Transformation billing, employee–project mapping, resource extension reminders and automated reporting.',
      'Developed Spring Boot REST APIs and Oracle-backed services; used SQL, API checks and logs to investigate discrepancies and defects.',
      'Implemented product change-request approval workflows, role-based validations and self-approval controls.',
      'Coordinated issue resolution, functional testing, release readiness and Jenkins/Linux deployment activities.'
    ]},
    { company: 'BYJU’S', title: 'Business Development Associate – Team Coordination', dates: 'Jul 2020 – Dec 2020', subtitle: 'Sales operations and team coordination', bullets: [
      'Coordinated daily activities of a six-member sales team, customer follow-ups, performance monitoring and operational updates.',
      'Conducted team training and improved consistency in follow-up processes and reporting.'
    ]},
    { company: 'Ashok Leyland', title: 'Operations & Industrial Intern', dates: 'May 2019', subtitle: 'Manufacturing operations', bullets: [
      'Observed manufacturing workflows and documented operational processes, material movement and potential bottlenecks.'
    ]}
  ],
  skills: [
    { label: 'Business Analysis', items: ['Requirements Analysis','Business Process Mapping','Workflow Optimization','Gap Analysis','Functional Validation','Stakeholder Coordination','Change Support'] },
    { label: 'Business Operations', items: ['Operational Reporting','KPI Tracking','Issue & Incident Management','Root Cause Analysis','Process Standardization','Service Delivery','Risk & Dependency Tracking'] },
    { label: 'Data & Tools', items: ['Oracle SQL','MySQL','Advanced Excel','Power BI','Jira','Confluence','PowerPoint','REST APIs','Postman','Agile/Scrum','Jenkins'] }
  ],
  education: [
    {degree:'Master of Business Administration (MBA)', institution:'Vellore Institute of Technology (VIT), Chennai', dates:'2026'},
    {degree:'B.Tech – Mechanical Engineering', institution:'Amrita School of Engineering, Coimbatore', dates:'2016–2020'}
  ],
  certifications: ['Infosys Certified MySQL Associate','Agile Delivery & Operational Practices (Infosys Internal)','Infosys Certified Spring REST & Microservices','Infosys Certified Java Programmer'],
  inventoryProject: {
    title: 'Inventory & Stockout Intelligence',
    github: 'https://github.com/vignesh-sathishkumar/inventory-stockout-intelligence',
    description: 'An end-to-end inventory operations analytics project using simulated retail data across eight stores and 36 products. Python-generated and validated daily records support SQL analysis of fulfillment, stockouts, estimated lost revenue, and replenishment priorities. Explore the interactive browser dashboard and documented Power BI DAX measures.',
    tools: ['Python', 'SQL', 'Inventory KPIs', 'Interactive HTML Dashboard', 'Power BI DAX'],
    stats: [
      { label: 'Stores', value: '8' },
      { label: 'Products', value: '36' },
      { label: 'Daily records', value: '51,840' }
    ]
  },
  professionalProjects: [
    {name:'Core Banking Transformation – Reporting & Process Automation', description:'Supported billing information workflows, resource tracking and operational report generation; investigated data and process issues using Oracle SQL.'},
    {name:'Brand Product Parametrization – Approval Workflow Improvement', description:'Supported controlled product-change processes through role-based access, approval validations, REST integration and exception handling.'},
    {name:'Enterprise Delivery Operations', description:'Supported release coordination, defect tracking and incident investigation across application and infrastructure teams.'}
  ]
}
