import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bknhrmbhntbtswafhrxx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJrbmhybWJobnRidHN3YWZocnh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk3NDY0ODUsImV4cCI6MjAwNTMyMjQ4NX0.LGXwCe6vqL9bsQFseI4h5raA0ywo-3wNlu5DmvTWPQA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
