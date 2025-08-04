import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import config from '../config/api'
import { 
  FaServer, 
  FaMemory, 
  FaHdd, 
  FaThermometerHalf, 
  FaDesktop,
  FaNetworkWired,
  FaClock,
  FaTasks
} from 'react-icons/fa'

const SystemMonitor = () => {
  const [systemData, setSystemData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchSystemData = async () => {
      try {
        const response = await fetch(config.getApiUrl(config.endpoints.system))
        if (!response.ok) {
          throw new Error('Failed to fetch system data')
        }
        const data = await response.json()
        setSystemData(data)
        setError(null)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    // Fetch immediately
    fetchSystemData()

    // Set up interval to refresh every 5 seconds
    const interval = setInterval(fetchSystemData, 5000)

    return () => clearInterval(interval)
  }, [])

  const formatBytes = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const getStatusColor = (percent) => {
    if (percent < 50) return 'text-green-400'
    if (percent < 80) return 'text-yellow-400'
    return 'text-red-400'
  }

  const getProgressBarColor = (percent) => {
    if (percent < 50) return 'bg-green-500'
    if (percent < 80) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  if (loading) {
    return (
      <div className="bg-slate-600 rounded-xl p-6 border border-slate-500">
        <div className="flex items-center justify-center h-40">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-gray-300">Loading system data...</span>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-slate-600 rounded-xl p-6 border border-red-500">
        <div className="text-center">
          <FaServer className="mx-auto text-red-400 text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-red-400 mb-2">System Monitor Offline</h3>
          <p className="text-gray-300 text-sm">
            Backend server is not running. Start the Python backend to see real-time system stats.
          </p>
          <p className="text-gray-400 text-xs mt-2">Error: {error}</p>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-slate-600 rounded-xl p-6 border border-slate-500"
    >
      <div className="flex items-center mb-6">
        <FaServer className="text-blue-400 text-2xl mr-3" />
        <h3 className="text-xl font-semibold text-white">Live System Monitor</h3>
        <div className="ml-auto flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs text-gray-400">Live</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* CPU Usage */}
        <div className="bg-slate-700 rounded-lg p-4 border border-slate-600">
          <div className="flex items-center justify-between mb-2">
            <FaDesktop className="text-blue-400" />
            <span className={`text-sm font-medium ${getStatusColor(systemData.cpu_percent)}`}>
              {systemData.cpu_percent.toFixed(1)}%
            </span>
          </div>
          <p className="text-xs text-gray-400 mb-2">CPU Usage</p>
          <div className="w-full bg-slate-600 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-300 ${getProgressBarColor(systemData.cpu_percent)}`}
              style={{ width: `${systemData.cpu_percent}%` }}
            ></div>
          </div>
        </div>

        {/* Memory Usage */}
        <div className="bg-slate-700 rounded-lg p-4 border border-slate-600">
          <div className="flex items-center justify-between mb-2">
            <FaMemory className="text-purple-400" />
            <span className={`text-sm font-medium ${getStatusColor(systemData.memory_percent)}`}>
              {systemData.memory_percent.toFixed(1)}%
            </span>
          </div>
          <p className="text-xs text-gray-400 mb-2">Memory Usage</p>
          <div className="w-full bg-slate-600 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-300 ${getProgressBarColor(systemData.memory_percent)}`}
              style={{ width: `${systemData.memory_percent}%` }}
            ></div>
          </div>
        </div>

        {/* Disk Usage */}
        <div className="bg-slate-700 rounded-lg p-4 border border-slate-600">
          <div className="flex items-center justify-between mb-2">
            <FaHdd className="text-orange-400" />
            <span className={`text-sm font-medium ${getStatusColor(systemData.disk_percent)}`}>
              {systemData.disk_percent.toFixed(1)}%
            </span>
          </div>
          <p className="text-xs text-gray-400 mb-2">Disk Usage</p>
          <div className="w-full bg-slate-600 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-300 ${getProgressBarColor(systemData.disk_percent)}`}
              style={{ width: `${systemData.disk_percent}%` }}
            ></div>
          </div>
        </div>

        {/* Process Count */}
        <div className="bg-slate-700 rounded-lg p-4 border border-slate-600">
          <div className="flex items-center justify-between mb-2">
            <FaTasks className="text-green-400" />
            <span className="text-sm font-medium text-white">
              {systemData.process_count}
            </span>
          </div>
          <p className="text-xs text-gray-400 mb-2">Processes</p>
          <div className="w-full bg-slate-600 rounded-full h-2">
            <div 
              className="h-2 rounded-full bg-green-500 transition-all duration-300"
              style={{ width: '100%' }}
            ></div>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-700 rounded-lg p-4 border border-slate-600">
          <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
            <FaClock className="mr-2 text-blue-400" />
            System Info
          </h4>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-400">Uptime:</span>
              <span className="text-white">{systemData.uptime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">OS:</span>
              <span className="text-white">{systemData.platform_info.system}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Architecture:</span>
              <span className="text-white">{systemData.platform_info.machine}</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-700 rounded-lg p-4 border border-slate-600">
          <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
            <FaNetworkWired className="mr-2 text-green-400" />
            Network Stats
          </h4>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-400">Sent:</span>
              <span className="text-white">{formatBytes(systemData.network_stats.bytes_sent)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Received:</span>
              <span className="text-white">{formatBytes(systemData.network_stats.bytes_recv)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Packets:</span>
              <span className="text-white">{systemData.network_stats.packets_sent + systemData.network_stats.packets_recv}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default SystemMonitor
