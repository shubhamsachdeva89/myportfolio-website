import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    {
      company: 'TechCorp Inc.',
      position: 'Staff Data and AI Engineer',
      location: 'New York, NY',
      period: 'Jan 2025 - Present',
      current: true,
      description: 'Leading AI and machine learning initiatives, developing sophisticated LLM applications for data analysis.',
      achievements: [
        'Developed large language model application using Langchain, Langgraph and Ollama for database analysis',
        'Built robust data pipeline fetching data from BigQuery daily and storing in Hadoop',
        'Conducted multiple POCs with various LLM frameworks and local models using Ollama',
        'Developed machine learning model for behavioral analysis predicting customer offer acceptance'
      ],
      technologies: ['Python', 'SQL', 'HDFS', 'HIVE', 'PySpark', 'Airflow', 'Machine Learning', 'Langchain', 'Langgraph', 'LLMs']
    },
    {
      company: 'TechCorp Inc.',
      position: 'Senior Data Engineer',
      location: 'New York, NY',
      period: 'Nov 2021 - Dec 2024',
      current: false,
      description: 'Spearheaded design and implementation of data frameworks for market analysis and business intelligence.',
      achievements: [
        'Designed data framework to calculate market penetration rate and ROI across multiple countries',
        'Developed efficient data processing pipeline for Inbound, Outbound and Contactless payments',
        'Led development of comprehensive data pipeline using IPSOS and Brandscape surveys',
        'Designed DAG in Airflow for precise backfilling of historical data',
        'Established robust data validation framework ensuring data accuracy and reliability',
        'Successfully automated manual processes reducing man-hours and increasing productivity'
      ],
      technologies: ['Python', 'SQL', 'HDFS', 'HIVE', 'PySpark', 'Airflow', 'Machine Learning', 'Data Analytics']
    },
    {
      company: 'HealthTech Solutions',
      position: 'Data Engineer II',
      location: 'New York, NY',
      period: 'Apr 2021 - Nov 2021',
      current: false,
      description: 'Migrated complex ETL pipelines and deployed AI-powered solutions on cloud platforms.',
      achievements: [
        'Successfully migrated complex ETL pipelines to Airflow for streamlined data processing',
        'Led deployment of Covid Resources Rasa Chatbot on Google Cloud',
        'Spearheaded setup of Dockerized Airflow Cluster with multi-node architecture',
        'Provided scalable and fault-tolerant data processing capabilities'
      ],
      technologies: ['Python', 'Airflow', 'S3', 'Redshift', 'Vault', 'Docker', 'Google Cloud', 'Rasa']
    },
    {
      company: 'DataFlow Systems',
      position: 'Data Engineer',
      location: 'New York, NY',
      period: 'Oct 2018 - Apr 2021',
      current: false,
      description: 'Led data ingestion and built comprehensive data processing pipelines for Finance Data Lake.',
      achievements: [
        'Led data ingestion model achieving 99% availability for Finance Data Lake',
        'Designed and built data processing pipelines using Hadoop ecosystem',
        'Developed ETL framework with PySpark and Flask for data analytics',
        'Created data quality framework using Python and SQL',
        'Built engines for topic identification, PII detection, and report recommendation',
        'Designed and tuned key metrics in Tableau for continuous improvement'
      ],
      technologies: ['Python', 'Spark', 'Flask', 'SQL', 'Shell Script', 'Tableau', 'HIVE', 'Kibana', 'Tez', 'YARN', 'Ambari']
    },
    {
      company: 'CloudTech Analytics',
      position: 'Data Engineering Specialist',
      location: 'New York, NY',
      period: 'Jun 2017 - Oct 2018',
      current: false,
      description: 'Optimized real-time data ingestion and implemented ETL pipelines for structured data automation.',
      achievements: [
        'Tuned real-time data ingestion for ~2 TB ERP data into Finance Data Lake',
        'Implemented ETL pipelines for structured data automation',
        'Optimized GP queries for efficient data integration',
        'Developed dashboards in Tableau to visualize DB health and data flow metrics'
      ],
      technologies: ['HVR', 'Talend', 'Postgres', 'Tableau', 'ETL', 'Data Integration']
    },
    {
      company: 'CloudTech Analytics',
      position: 'Digital IT Intern',
      location: 'New York, NY',
      period: 'Jan 2017 - Jun 2017',
      current: false,
      description: 'Developed data ingestion pipelines and workflows for legacy data migration.',
      achievements: [
        'Developed data ingestion pipelines from Legacy data to Staging DB using HVR',
        'Developed workflows using Oozie to schedule Hadoop jobs',
        'Ingested data from GP to HIVE for consumption'
      ],
      technologies: ['HVR', 'Oozie', 'Hadoop', 'HIVE', 'Data Migration']
    }
  ];

  const awards = [
    'Impact Award – Awarded by VP – GE Data & Analytics',
    'Avengers Data & Analytics Awards 2018 – Awarded by VP - GE Data & Analytics',
    'Above and Beyond Uplifts – Visa',
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-accent-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Award className="mr-3 text-primary-600 dark:text-accent-400" />
              Awards & Recognition
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {awards.map((award, index) => (
                <div key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-primary-400 dark:bg-accent-400 rounded-full mr-3"></span>
                  <span className="text-gray-700 dark:text-gray-300">{award}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-accent-700"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 dark:bg-accent-400 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.position}
                      </h3>
                      <p className="text-primary-600 dark:text-accent-400 font-semibold mb-2">
                        {exp.company}
                      </p>
                    </div>
                    {exp.current && (
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs font-medium rounded-full">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {exp.location}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary-400 dark:bg-accent-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;