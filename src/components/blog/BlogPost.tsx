import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Tag, Share2, MessageCircle, ArrowLeft, Heart } from 'lucide-react';
import { BlogPost as BlogPostType } from '../../types/blog';
import { blogService } from '../../services/blogService';

interface BlogPostProps {
  slug: string;
  onBack: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ slug, onBack }) => {
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    loadPost();
  }, [slug]);

  const loadPost = async () => {
    try {
      setLoading(true);
      const blogPost = await blogService.getPostBySlug(slug);
      setPost(blogPost);
      setLikes(Math.floor(Math.random() * 50) + 10); // Mock likes
    } catch (error) {
      console.error('Error loading post:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleShare = () => {
    if (post && navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else if (post) {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const handleLike = () => {
    setLiked(!liked);
    setLikes(prev => liked ? prev - 1 : prev + 1);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 dark:border-accent-400"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Post Not Found</h1>
          <button
            onClick={onBack}
            className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button
            onClick={onBack}
            className="inline-flex items-center text-primary-600 dark:text-accent-400 hover:text-primary-700 dark:hover:text-accent-300 mb-8 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Blog
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-primary-600 dark:bg-accent-600 text-white text-sm font-medium rounded-full">
                {post.category.replace('-', ' ')}
              </span>
              {post.featured && (
                <span className="px-3 py-1 bg-yellow-500 text-white text-sm font-medium rounded-full">
                  Featured
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative h-64 sm:h-80 lg:h-96 overflow-hidden"
      >
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div 
              className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-primary-600 dark:prose-a:text-accent-400 prose-code:text-primary-600 dark:prose-code:text-accent-400 prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                  >
                    <Tag size={12} className="mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-8 space-y-6">
              {/* Share & Like */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Enjoyed this post?
                </h3>
                <div className="space-y-3">
                  <button
                    onClick={handleLike}
                    className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      liked
                        ? 'bg-red-500 text-white'
                        : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
                    }`}
                  >
                    <Heart size={16} className={liked ? 'fill-current' : ''} />
                    {likes} Likes
                  </button>
                  
                  <button
                    onClick={handleShare}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 dark:bg-accent-600 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-accent-700 transition-colors"
                  >
                    <Share2 size={16} />
                    Share
                  </button>
                  
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                    <MessageCircle size={16} />
                    Comment
                  </button>
                </div>
              </div>

              {/* Author Info */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  About the Author
                </h3>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold">
                    SS
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{post.author}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Senior Software Engineer</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Passionate about building scalable applications and sharing knowledge with the developer community.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;