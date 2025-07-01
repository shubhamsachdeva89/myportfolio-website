import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Auth helper functions
export const auth = {
  signIn: async (email: string, password: string) => {
    return await supabase.auth.signInWithPassword({ email, password });
  },
  signOut: async () => {
    return await supabase.auth.signOut();
  },
  getUser: async () => {
    return await supabase.auth.getUser();
  }
};

// Database helper functions
export const db = {
  // Personal Info
  getPersonalInfo: async () => {
    return await supabase.from('personal_info').select('*').single();
  },
  updatePersonalInfo: async (data: any) => {
    return await supabase.from('personal_info').upsert(data);
  },

  // Work Experience
  getWorkExperience: async () => {
    return await supabase.from('work_experience').select('*').order('start_date', { ascending: false });
  },
  addWorkExperience: async (data: any) => {
    return await supabase.from('work_experience').insert(data);
  },
  updateWorkExperience: async (id: string, data: any) => {
    return await supabase.from('work_experience').update(data).eq('id', id);
  },
  deleteWorkExperience: async (id: string) => {
    return await supabase.from('work_experience').delete().eq('id', id);
  },

  // Skills
  getSkills: async () => {
    return await supabase.from('skills').select('*').order('category', { ascending: true });
  },
  addSkill: async (data: any) => {
    return await supabase.from('skills').insert(data);
  },
  updateSkill: async (id: string, data: any) => {
    return await supabase.from('skills').update(data).eq('id', id);
  },
  deleteSkill: async (id: string) => {
    return await supabase.from('skills').delete().eq('id', id);
  },

  // Education
  getEducation: async () => {
    return await supabase.from('education').select('*').order('start_date', { ascending: false });
  },
  addEducation: async (data: any) => {
    return await supabase.from('education').insert(data);
  },
  updateEducation: async (id: string, data: any) => {
    return await supabase.from('education').update(data).eq('id', id);
  },
  deleteEducation: async (id: string) => {
    return await supabase.from('education').delete().eq('id', id);
  },

  // Projects
  getProjects: async () => {
    return await supabase.from('projects').select('*').order('completed_date', { ascending: false });
  },
  addProject: async (data: any) => {
    return await supabase.from('projects').insert(data);
  },
  updateProject: async (id: string, data: any) => {
    return await supabase.from('projects').update(data).eq('id', id);
  },
  deleteProject: async (id: string) => {
    return await supabase.from('projects').delete().eq('id', id);
  },

  // Contact Messages
  submitContactMessage: async (data: any) => {
    return await supabase.from('contact_messages').insert(data);
  },
  getContactMessages: async () => {
    return await supabase.from('contact_messages').select('*').order('created_at', { ascending: false });
  },
  markMessageAsRead: async (id: string) => {
    return await supabase.from('contact_messages').update({ read: true }).eq('id', id);
  }
};