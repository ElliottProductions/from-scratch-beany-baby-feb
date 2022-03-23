const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqZGlkdWZ4emlzZnV2ZGZvYXdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc1NTM0MzMsImV4cCI6MTk2MzEyOTQzM30.7x68WymKgxiG9t23XJ2axQIdjNViOFe6hF7MjD-qeQ8';

const SUPABASE_URL = 'https://ajdidufxzisfuvdfoawq.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getCryptids(){

    const response = await client
        .from('cryptiddetails')
        .select('*');
        
    return response.body;
}

export async function getCryptid(id){
    console.log(id);
    const response = await client
        .from('cryptiddetails')
        .select('*')
        .match({ id: id })
        .single();

    return response.body;
}