import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vcixfhqjhcxioubvomhx.supabase.co';
const supabaseAnonKey = 'sb_publishable_21Yppg00zyvzws5MZ9I_GA_8BCcuW2M';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
