import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zlbtbtewbowrppmomijw.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsYnRidGV3Ym93cnBwbW9taWp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI2NjA0NzcsImV4cCI6MjEwODIzNjQ3N30.nYRIM6yJhYntWTAdwdP3pVEHIUq8w424l1Emmg-yz-s'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)