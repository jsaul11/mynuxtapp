import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig()
  const supabaseUrl = config.public.supabaseUrl
  const supabaseKey = config.public.supabaseKey
  
  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase URL and Key must be provided')
  }

  const supabase = createClient(supabaseUrl, supabaseKey)
  nuxtApp.provide('supabase', supabase)
})
