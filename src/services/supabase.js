import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jzldtroottlpvjkwxusi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6bGR0cm9vdHRscHZqa3d4dXNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3MjA5MjEsImV4cCI6MjA2MDI5NjkyMX0.ORCRr3IJ3bhs6uIvf5L-FND5Q7YyJzzRXTSODpx-qG8';

if (!supabaseUrl || !supabaseKey) {
  console.error('Credenciais do Supabase não configuradas. Verifique o arquivo .env');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;