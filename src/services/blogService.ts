import { BlogPost, BlogCategory, BlogComment, BlogStats } from '../types/blog';

// Mock data for demonstration - updated with data engineering content
const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable Data Pipelines with Apache Spark and Airflow',
    slug: 'building-scalable-data-pipelines-spark-airflow',
    excerpt: 'Learn how to architect and deploy robust data pipelines that can handle petabytes of data while maintaining reliability and performance.',
    content: `# Building Scalable Data Pipelines with Apache Spark and Airflow

In the world of big data, building scalable and reliable data pipelines is crucial for any data-driven organization. This post explores best practices for creating robust data processing workflows.

## Why Apache Spark?

Apache Spark offers several advantages for big data processing:
- **In-memory computing** - Significantly faster than traditional MapReduce
- **Unified analytics** - Batch processing, streaming, ML, and graph processing
- **Fault tolerance** - Automatic recovery from node failures
- **Scalability** - Can scale from single machines to thousands of nodes

## Apache Airflow for Orchestration

Airflow provides powerful workflow management:

\`\`\`python
from airflow import DAG
from airflow.operators.python_operator import PythonOperator
from datetime import datetime, timedelta

default_args = {
    'owner': 'data-team',
    'depends_on_past': False,
    'start_date': datetime(2024, 1, 1),
    'retries': 1,
    'retry_delay': timedelta(minutes=5)
}

dag = DAG(
    'data_pipeline',
    default_args=default_args,
    description='Daily data processing pipeline',
    schedule_interval='@daily'
)
\`\`\`

## Best Practices

1. **Design for failure** - Implement proper error handling and retries
2. **Monitor everything** - Use comprehensive logging and alerting
3. **Optimize for performance** - Partition data appropriately
4. **Test thoroughly** - Unit tests and integration tests are essential
5. **Document workflows** - Clear documentation for maintenance

Building effective data pipelines requires careful planning and consideration of various factors including data volume, processing requirements, and business needs.`,
    imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'technology',
    tags: ['Apache Spark', 'Airflow', 'Data Engineering', 'Big Data'],
    author: 'John Doe',
    publishedAt: '2024-01-15T10:00:00Z',
    readTime: '8 min read',
    featured: true,
    published: true,
    metaDescription: 'Learn how to build scalable data pipelines using Apache Spark and Airflow with best practices and real-world examples.',
    metaKeywords: ['apache spark', 'airflow', 'data pipelines', 'big data', 'data engineering']
  },
  {
    id: '2',
    title: 'Machine Learning in Production: From Model to Deployment',
    slug: 'machine-learning-production-model-deployment',
    excerpt: 'Explore the challenges and solutions for deploying machine learning models in production environments at scale.',
    content: `# Machine Learning in Production: From Model to Deployment

Deploying machine learning models in production is often more challenging than building them. This post covers the essential considerations for ML deployment.

## The ML Production Pipeline

A typical ML production pipeline includes:

### Data Pipeline
- Data ingestion and validation
- Feature engineering and transformation
- Data quality monitoring

### Model Pipeline
- Model training and validation
- Model versioning and registry
- A/B testing framework

### Serving Pipeline
- Model serving infrastructure
- Real-time and batch prediction
- Performance monitoring

## Key Challenges

### Scalability
\`\`\`python
# Example: Scalable feature engineering with Spark
from pyspark.sql import SparkSession
from pyspark.ml.feature import VectorAssembler

spark = SparkSession.builder.appName("FeatureEngineering").getOrCreate()

# Load data
df = spark.read.parquet("s3://data-lake/raw-data/")

# Feature engineering
assembler = VectorAssembler(
    inputCols=["feature1", "feature2", "feature3"],
    outputCol="features"
)

feature_df = assembler.transform(df)
\`\`\`

### Model Monitoring
- Data drift detection
- Model performance tracking
- Automated retraining triggers

## Best Practices

1. **Version everything** - Data, code, models, and configurations
2. **Automate testing** - Unit tests, integration tests, and model validation
3. **Monitor continuously** - Track model performance and data quality
4. **Plan for rollback** - Always have a fallback strategy
5. **Document thoroughly** - Model cards and deployment guides

Successfully deploying ML models requires a robust infrastructure and careful attention to monitoring and maintenance.`,
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'machine-learning',
    tags: ['Machine Learning', 'MLOps', 'Production', 'Deployment'],
    author: 'John Doe',
    publishedAt: '2024-01-10T14:30:00Z',
    readTime: '10 min read',
    featured: false,
    published: true,
    metaDescription: 'Complete guide to deploying machine learning models in production with best practices and real-world examples.',
    metaKeywords: ['machine learning', 'mlops', 'model deployment', 'production', 'data science']
  },
  {
    id: '3',
    title: 'Building LLM Applications with LangChain and LangGraph',
    slug: 'building-llm-applications-langchain-langgraph',
    excerpt: 'Discover how to build sophisticated AI applications using LangChain and LangGraph for enhanced data analysis and insights.',
    content: `# Building LLM Applications with LangChain and LangGraph

Large Language Models (LLMs) are revolutionizing how we interact with data. This post explores building production-ready LLM applications.

## Introduction to LangChain

LangChain provides a framework for developing applications powered by language models:

\`\`\`python
from langchain.llms import Ollama
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate

# Initialize the LLM
llm = Ollama(model="llama2")

# Create a prompt template
prompt = PromptTemplate(
    input_variables=["data_summary"],
    template="Analyze the following data and provide insights: {data_summary}"
)

# Create the chain
chain = LLMChain(llm=llm, prompt=prompt)

# Run the chain
result = chain.run(data_summary="Sales increased 25% in Q4...")
\`\`\`

## LangGraph for Complex Workflows

LangGraph enables building stateful, multi-actor applications:

\`\`\`python
from langgraph.graph import StateGraph
from typing import TypedDict

class AgentState(TypedDict):
    query: str
    analysis: str
    recommendations: str

def analyze_data(state: AgentState):
    # Data analysis logic
    return {"analysis": "Data shows upward trend..."}

def generate_recommendations(state: AgentState):
    # Recommendation logic
    return {"recommendations": "Consider expanding..."}

# Build the graph
workflow = StateGraph(AgentState)
workflow.add_node("analyze", analyze_data)
workflow.add_node("recommend", generate_recommendations)
workflow.add_edge("analyze", "recommend")
\`\`\`

## Real-World Applications

### Database Query Assistant
- Natural language to SQL conversion
- Query optimization suggestions
- Result interpretation

### Data Visualization Generator
- Automatic chart recommendations
- Insight extraction from visualizations
- Interactive dashboard creation

## Best Practices

1. **Prompt engineering** - Craft effective prompts for consistent results
2. **Context management** - Handle long conversations and context windows
3. **Error handling** - Graceful degradation when LLMs fail
4. **Cost optimization** - Monitor token usage and optimize calls
5. **Security** - Implement proper input validation and output filtering

LLM applications are transforming how we interact with data, making complex analysis accessible to non-technical users.`,
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'artificial-intelligence',
    tags: ['LLM', 'LangChain', 'LangGraph', 'AI', 'Data Analysis'],
    author: 'John Doe',
    publishedAt: '2024-01-05T09:15:00Z',
    readTime: '12 min read',
    featured: true,
    published: true,
    metaDescription: 'Learn how to build sophisticated LLM applications using LangChain and LangGraph for data analysis and insights.',
    metaKeywords: ['langchain', 'langgraph', 'llm', 'ai applications', 'data analysis']
  }
];

class BlogService {
  private posts: BlogPost[] = mockPosts;

  async getAllPosts(): Promise<BlogPost[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return this.posts.filter(post => post.published).sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }

  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return this.posts.find(post => post.slug === slug && post.published) || null;
  }

  async getPostsByCategory(category: string): Promise<BlogPost[]> {
    await new Promise(resolve => setTimeout(resolve, 400));
    return this.posts.filter(post => post.category === category && post.published);
  }

  async searchPosts(query: string): Promise<BlogPost[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    const lowercaseQuery = query.toLowerCase();
    return this.posts.filter(post => 
      post.published && (
        post.title.toLowerCase().includes(lowercaseQuery) ||
        post.excerpt.toLowerCase().includes(lowercaseQuery) ||
        post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
      )
    );
  }

  async getFeaturedPosts(): Promise<BlogPost[]> {
    await new Promise(resolve => setTimeout(resolve, 200));
    return this.posts.filter(post => post.featured && post.published);
  }

  async getCategories(): Promise<BlogCategory[]> {
    await new Promise(resolve => setTimeout(resolve, 200));
    const categories = new Map<string, number>();
    
    this.posts.filter(post => post.published).forEach(post => {
      categories.set(post.category, (categories.get(post.category) || 0) + 1);
    });

    return Array.from(categories.entries()).map(([category, count]) => ({
      id: category,
      name: category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' '),
      slug: category,
      postCount: count
    }));
  }

  async getBlogStats(): Promise<BlogStats> {
    await new Promise(resolve => setTimeout(resolve, 300));
    const publishedPosts = this.posts.filter(post => post.published);
    
    return {
      totalPosts: publishedPosts.length,
      totalViews: publishedPosts.length * 250, // Mock data
      totalComments: publishedPosts.length * 8, // Mock data
      popularPosts: publishedPosts.slice(0, 3)
    };
  }

  // Admin methods
  async createPost(post: Omit<BlogPost, 'id'>): Promise<BlogPost> {
    await new Promise(resolve => setTimeout(resolve, 500));
    const newPost: BlogPost = {
      ...post,
      id: Date.now().toString(),
    };
    this.posts.unshift(newPost);
    return newPost;
  }

  async updatePost(id: string, updates: Partial<BlogPost>): Promise<BlogPost | null> {
    await new Promise(resolve => setTimeout(resolve, 500));
    const index = this.posts.findIndex(post => post.id === id);
    if (index === -1) return null;
    
    this.posts[index] = { ...this.posts[index], ...updates, updatedAt: new Date().toISOString() };
    return this.posts[index];
  }

  async deletePost(id: string): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 300));
    const index = this.posts.findIndex(post => post.id === id);
    if (index === -1) return false;
    
    this.posts.splice(index, 1);
    return true;
  }

  generateRSSFeed(): string {
    const publishedPosts = this.posts.filter(post => post.published);
    const baseUrl = window.location.origin;
    
    const rssItems = publishedPosts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt}]]></description>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid>${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <author>john.doe@example.com (${post.author})</author>
      <category>${post.category}</category>
    </item>`).join('');

    return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>John Doe - Data Engineering & AI Blog</title>
    <description>Insights on Big Data, Machine Learning, and AI from a Staff Data Engineer</description>
    <link>${baseUrl}/blog</link>
    <atom:link href="${baseUrl}/blog/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${rssItems}
  </channel>
</rss>`;
  }
}

export const blogService = new BlogService();