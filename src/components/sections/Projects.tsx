import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Star } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    {
      title: 'LLM-Powered Data Analysis Application',
      description: 'Developed a sophisticated large language model application using Langchain, Langgraph and Ollama to analyze database data, generating insightful visualizations and data-driven insights.',
      technologies: ['Python', 'Langchain', 'Langgraph', 'Ollama', 'SQL', 'Machine Learning'],
      featured: true,
      liveUrl: '#',
      githubUrl: '#',
      imageUrl: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800',
      completedDate: '2025'
    },
    {
      title: 'BigQuery to Hadoop Data Pipeline',
      description: 'Built a robust data pipeline that fetches data from BigQuery daily and stores it in Hadoop, enabling seamless integration with Data Analyst LLM application for enhanced data analysis.',
      technologies: ['Python', 'BigQuery', 'Hadoop', 'HDFS', 'PySpark', 'Airflow'],
      featured: true,
      liveUrl: '#',
      githubUrl: '#',
      imageUrl: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800',
      completedDate: '2025'
    },
    {
      title: 'Customer Behavioral Analysis ML Model',
      description: 'Developed a sophisticated machine learning model for behavioral analysis, successfully predicting potential customer acceptance of offers based on their past interactions on the Visa website.',
      technologies: ['Python', 'Machine Learning', 'PySpark', 'SQL', 'Behavioral Analytics'],
      featured: false,
      liveUrl: '#',
      githubUrl: '#',
      imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      completedDate: '2024'
    },
    {
      title: 'Market Penetration & ROI Analytics Framework',
      description: 'Spearheaded the design and implementation of data framework to accurately calculate and analyze market penetration rate and ROI across multiple countries for Visa.',
      technologies: ['Python', 'SQL', 'PySpark', 'Airflow', 'HIVE', 'Data Analytics'],
      featured: false,
      liveUrl: '#',
      githubUrl: '#',
      imageUrl: 'https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg?auto=compress&cs=tinysrgb&w=800',
      completedDate: '2023'
    },
    {
      title: 'Covid Resources Rasa Chatbot',
      description: 'Led the deployment of a highly accurate and user-friendly Covid Resources Rasa Chatbot on Google Cloud, delivering reliable resources for those affected by the pandemic.',
      technologies: ['Python', 'Rasa', 'Google Cloud', 'Docker', 'NLP', 'Chatbot'],
      featured: false,
      liveUrl: '#',
      githubUrl: '#',
      imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      completedDate: '2021'
    },
    {
      title: 'Finance Data Lake with 99% Availability',
      description: 'Led data ingestion model achieving 99% availability for Finance Data Lake at GE, designed and built comprehensive data processing pipelines using Hadoop ecosystem.',
      technologies: ['Python', 'Spark', 'Hadoop', 'HIVE', 'Flask', 'Tableau', 'ETL'],
      featured: false,
      liveUrl: '#',
      githubUrl: '#',
      imageUrl: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      completedDate: '2020'
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-accent-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-600 dark:bg-accent-600 text-white text-xs font-medium rounded-full flex items-center">
                    <Star size={12} className="mr-1" />
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary-100 dark:bg-accent-900/30 text-primary-800 dark:text-accent-400 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Completed: {project.completedDate}
                  </span>
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-accent-400 transition-colors"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-accent-400 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Other Notable Projects
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  {project.description.substring(0, 100)}...
                </p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-gray-500 dark:text-gray-400 text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {project.completedDate}
                  </span>
                  <div className="flex space-x-2">
                    <a
                      href={project.githubUrl}
                      className="p-1 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-accent-400 transition-colors"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="p-1 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-accent-400 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;