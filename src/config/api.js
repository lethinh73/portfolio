// API Configuration
const config = {
  // Get API base URL from environment variables
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
  
  // Environment
  NODE_ENV: import.meta.env.VITE_NODE_ENV || 'development',
  
  // API Endpoints
  endpoints: {
    system: '/system',
    systemCpu: '/system/cpu',
    systemMemory: '/system/memory',
    systemDisk: '/system/disk',
    contact: '/contact',
  },
  
  // Get full API URL
  getApiUrl: (endpoint) => {
    return `${config.API_BASE_URL}${endpoint}`
  },
  
  // Development mode check
  isDev: () => {
    return config.NODE_ENV === 'development'
  },
  
  // Production mode check
  isProd: () => {
    return config.NODE_ENV === 'production'
  }
}

export default config
