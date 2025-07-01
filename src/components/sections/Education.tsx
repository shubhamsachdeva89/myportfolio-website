import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const education = [
    {
      institution: 'State Technical University',
      degree: 'Bachelor of Engineering',
      field: 'Computer Engineering',
      period: '2013 - 2017',
      location: 'Austin, TX',
      achievements: [
        'Graduated with distinction in Computer Engineering',
        'Active member of Programming and Data Science clubs',
        'Participated in multiple hackathons and coding competitions',
        'Led technical workshops on Big Data and Analytics',
        'Completed final year project on Data Mining and Analytics'
      ],
      coursework: [
        'Data Structures & Algorithms',
        'Database Management Systems',
        'Computer Networks',
        'Operating Systems',
        'Software Engineering',
        'Machine Learning',
        'Data Mining',
        'Statistics and Probability'
      ]
    }
  ];

  const certifications = [
    {
      title: 'Neural Networks and Deep Learning',
      issuer: 'Coursera (Andrew Ng)',
      date: '2020',
      credentialId: 'COURSERA-DL-2020'
    },
    {
      title: 'Introduction to Tensorflow',
      issuer: 'Coursera (Andrew Ng & Lawrence Morley)',
      date: '2020',
      credentialId: 'COURSERA-TF-2020'
    },
    {
      title: 'Convolutional Neural Networks with Tensorflow',
      issuer: 'Coursera (Andrew Ng & Lawrence Morley)',
      date: '2020',
      credentialId: 'COURSERA-CNN-2020'
    }
  ];

  const achievements = [
    {
      title: '5-star Python Badge',
      platform: 'HackerRank',
      link: 'https://www.hackerrank.com/johndoe123',
      description: 'Achieved 5-star rating in Python programming challenges'
    },
    {
      title: '4 Kyu Rating',
      platform: 'Codewars',
      link: 'https://www.codewars.com/users/johndoe',
      description: 'Advanced problem-solving skills in multiple programming languages'
    },
    {
      title: 'Competitive Programming',
      platform: 'CodeChef',
      link: 'https://www.codechef.com/users/jdoe',
      description: 'Active participant in competitive programming contests'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-accent-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-2">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
            >
              <GraduationCap className="mr-3 text-primary-600 dark:text-accent-400" />
              Education
            </motion.h3>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {edu.degree} in {edu.field}
                      </h4>
                      <p className="text-primary-600 dark:text-accent-400 font-semibold mb-2">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {edu.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {edu.location}
                    </div>
                  </div>

                  {edu.achievements && (
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Achievements:
                      </h5>
                      <ul className="grid sm:grid-cols-2 gap-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                            <Award size={12} className="mr-2 mt-1 text-primary-400 dark:text-accent-400 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Relevant Coursework:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Coding Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Coding Achievements
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-primary-600 dark:text-accent-400 text-sm mb-2 font-medium">
                      {achievement.platform}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                      {achievement.description}
                    </p>
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs text-primary-600 dark:text-accent-400 hover:underline"
                    >
                      View Profile
                      <ExternalLink size={12} className="ml-1" />
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
            >
              <Award className="mr-3 text-primary-600 dark:text-accent-400" />
              Certifications
            </motion.h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-primary-600 dark:text-accent-400 text-sm mb-2">
                    {cert.issuer}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {cert.date}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      ID: {cert.credentialId}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-8 p-4 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 rounded-lg"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Continuous Learning
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Currently pursuing advanced certifications in AI/ML and cloud technologies 
                to stay at the forefront of data engineering and artificial intelligence.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;