import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'SQL', level: 92 },
        { name: 'Shell Script', level: 85 },
        { name: 'Scala', level: 75 },
        { name: 'R', level: 70 },
        { name: 'Java', level: 80 }
      ]
    },
    {
      title: 'Big Data & Analytics',
      skills: [
        { name: 'Apache Spark', level: 95 },
        { name: 'Hadoop (HDFS)', level: 90 },
        { name: 'Apache Hive', level: 88 },
        { name: 'Apache Airflow', level: 92 },
        { name: 'Kafka', level: 80 },
        { name: 'Elasticsearch', level: 75 }
      ]
    },
    {
      title: 'Machine Learning & AI',
      skills: [
        { name: 'Machine Learning', level: 90 },
        { name: 'Deep Learning', level: 85 },
        { name: 'LangChain', level: 88 },
        { name: 'LangGraph', level: 85 },
        { name: 'TensorFlow', level: 80 },
        { name: 'Scikit-learn', level: 90 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Google Cloud', level: 82 },
        { name: 'Docker', level: 88 },
        { name: 'Kubernetes', level: 75 },
        { name: 'Jenkins', level: 80 },
        { name: 'Git', level: 95 }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', level: 88 },
        { name: 'BigQuery', level: 90 },
        { name: 'Redshift', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Cassandra', level: 75 },
        { name: 'Redis', level: 78 }
      ]
    },
    {
      title: 'Visualization & Tools',
      skills: [
        { name: 'Tableau', level: 92 },
        { name: 'Power BI', level: 80 },
        { name: 'Kibana', level: 85 },
        { name: 'Jupyter', level: 90 },
        { name: 'Flask', level: 85 },
        { name: 'Streamlit', level: 80 }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'bg-green-500';
    if (level >= 85) return 'bg-primary-500';
    if (level >= 80) return 'bg-accent-500';
    return 'bg-orange-500';
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-accent-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.5 }}
                        className={`h-2 rounded-full ${getSkillColor(skill.level)}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Areas of Interest
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              {['Big Data & Analytics', 'Data Science and Machine Learning', 'Data Visualization', 'Data Structure & Algorithms'].map((interest, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm">
                  <p className="text-gray-700 dark:text-gray-300 font-medium">{interest}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;