import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, ArrowRight, Tag, Search, Share2, MessageCircle, User } from 'lucide-react';
import { BlogPost } from '../../types/blog';
import { blogService } from '../../services/blogService';

const Blog: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const postsPerPage = 6;

  const categories = ['all', 'technology', 'web-development', 'career', 'tutorials', 'thoughts'];

  useEffect(() => {
    loadPosts();
  }, []);

  useEffect(() => {
    filterPosts();
  }, [posts, selectedCategory, searchQuery]);

  const loadPosts = async () => {
    try {
      setLoading(true);
      const blogPosts = await blogService.getAllPosts();
      setPosts(blogPosts);
    } catch (error) {
      console.error('Error loading posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterPosts = () => {
    let filtered = posts;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredPosts(filtered);
    setCurrentPage(1);
  };

  const handleShare = (post: BlogPost) => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: `${window.location.origin}/blog/${post.slug}`,
      });
    } else {
      navigator.clipboard.writeText(`${window.location.origin}/blog/${post.slug}`);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCurrentPagePosts = () => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return filteredPosts.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = getCurrentPagePosts().filter(post => !post.featured || currentPage > 1);

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Blog & Insights
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-accent-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Sharing thoughts on technology, development practices, and career insights
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-accent-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-600 dark:bg-accent-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 dark:border-accent-400"></div>
          </div>
        ) : (
          <>
            {/* Featured Post */}
            {featuredPost && currentPage === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-16"
              >
                <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl overflow-hidden shadow-lg">
                  <div className="grid lg:grid-cols-2 gap-8 p-8">
                    <div className="order-2 lg:order-1">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-primary-600 dark:bg-accent-600 text-white text-xs font-medium rounded-full">
                          Featured
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {featuredPost.category.replace('-', ' ')}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        {featuredPost.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-4 mb-6 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          {formatDate(featuredPost.publishedAt)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          {featuredPost.readTime}
                        </div>
                        <div className="flex items-center gap-1">
                          <User size={16} />
                          {featuredPost.author}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <button className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 dark:bg-accent-600 dark:hover:bg-accent-700 text-white font-medium rounded-lg transition-colors">
                          Read More
                          <ArrowRight size={16} className="ml-2" />
                        </button>
                        
                        <button
                          onClick={() => handleShare(featuredPost)}
                          className="p-2 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-accent-400 transition-colors"
                        >
                          <Share2 size={20} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="order-1 lg:order-2">
                      <img
                        src={featuredPost.imageUrl}
                        alt={featuredPost.title}
                        className="w-full h-64 lg:h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Regular Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-2 py-1 bg-white/90 dark:bg-gray-900/90 text-gray-700 dark:text-gray-300 text-xs font-medium rounded">
                        {post.category.replace('-', ' ')}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {formatDate(post.publishedAt)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <button className="text-primary-600 dark:text-accent-400 font-medium hover:underline">
                        Read More
                      </button>
                      
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleShare(post)}
                          className="p-1 text-gray-400 hover:text-primary-600 dark:hover:text-accent-400 transition-colors"
                        >
                          <Share2 size={16} />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-primary-600 dark:hover:text-accent-400 transition-colors">
                          <MessageCircle size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex justify-center items-center gap-2"
              >
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Previous
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      currentPage === page
                        ? 'bg-primary-600 dark:bg-accent-600 text-white'
                        : 'border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Next
                </button>
              </motion.div>
            )}

            {filteredPosts.length === 0 && !loading && (
              <div className="text-center py-20">
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  No posts found matching your criteria.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Blog;