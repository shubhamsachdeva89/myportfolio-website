import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Database, Brain, BarChart3, Cpu } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const highlights = [
    {
      icon: Database,
      title: 'Big Data & Analytics',
      description: 'Expert in building comprehensive Data Lake solutions and processing pipelines using Hadoop ecosystem',
    },
    {
      icon: Brain,
      title: 'Data Science & ML',
      description: 'Proficient in developing machine learning models and AI applications using Python and advanced frameworks',
    },
    {
      icon: BarChart3,
      title: 'Data Visualization',
      description: 'Creating insightful dashboards and visualizations using Tableau and modern data visualization tools',
    },
    {
      icon: Cpu,
      title: 'LLM Applications',
      description: 'Developing sophisticated LLM applications using Langchain, Langgraph, and Ollama for data analysis',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-accent-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Staff Data and AI Engineer
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                With over 8 years of IT experience, I specialize in building comprehensive Data Lake solutions 
                for Finance, Healthcare, and FinTech industries. My expertise spans across Big Data technologies, 
                Machine Learning, and cutting-edge AI applications.
              </p>
              <p>
                Currently working as a Staff Data and AI Engineer at Visa, I lead the development of sophisticated 
                data pipelines, machine learning models, and LLM applications. My work involves creating actionable 
                insights from complex business problems using Python, Spark, and advanced analytics frameworks.
              </p>
              <p>
                I'm passionate about leveraging data to drive business decisions and have successfully automated 
                manual processes, leading to significant productivity improvements. My recent focus includes 
                developing LLM applications using Langchain and Langgraph for enhanced data analysis capabilities.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8"
            >
              <button className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 dark:bg-accent-600 dark:hover:bg-accent-700 text-white font-medium rounded-lg transition-colors duration-300">
                Download Resume
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-accent-900/30 rounded-lg flex items-center justify-center mb-4">
                  <highlight.icon className="w-6 h-6 text-primary-600 dark:text-accent-400" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;