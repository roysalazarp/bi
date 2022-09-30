import { createClient } from "@supabase/supabase-js";

function loadSupabaseEnv(): { supabaseUrl: string; supabaseAnonKey: string } {
  if (!process.env.VUE_APP_SUPABASE_URL)
    throw new Error("missing env: VUE_APP_SUPABASE_URL ");
  if (!process.env.VUE_APP_SUPABASE_KEY)
    throw new Error("missing env: VUE_APP_SUPABASE_KEY ");

  return {
    supabaseUrl: process.env.VUE_APP_SUPABASE_URL,
    supabaseAnonKey: process.env.VUE_APP_SUPABASE_KEY,
  };
}

const supabaseEnv = loadSupabaseEnv();

export const supabase = createClient(
  supabaseEnv.supabaseUrl,
  supabaseEnv.supabaseAnonKey
);
