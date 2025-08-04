from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import psutil
import platform
import datetime
from typing import Dict, Any
import json
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = FastAPI(
    title="Portfolio System Monitor API",
    description="Real-time system monitoring API for Thinh Le's Portfolio",
    version="1.0.0"
)

# Get CORS origins from environment
cors_origins = os.getenv("CORS_ORIGINS", "http://localhost:5173,http://localhost:5174").split(",")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models
class SystemInfo(BaseModel):
    cpu_percent: float
    memory_percent: float
    disk_percent: float
    temperature: Dict[str, Any] | None
    uptime: str
    platform_info: Dict[str, str]
    network_stats: Dict[str, Any]
    process_count: int

class ContactMessage(BaseModel):
    name: str
    email: str
    subject: str
    message: str

@app.get("/")
async def root():
    """Root endpoint with API information"""
    return {
        "message": "Portfolio System Monitor API",
        "version": "1.0.0",
        "developer": "Thinh Le",
        "endpoints": {
            "/system": "Get real-time system information",
            "/system/cpu": "Get CPU usage",
            "/system/memory": "Get memory usage",
            "/system/disk": "Get disk usage",
            "/contact": "Submit contact form (POST)"
        }
    }

@app.get("/system", response_model=SystemInfo)
async def get_system_info():
    """Get comprehensive system information"""
    try:
        # CPU usage
        cpu_percent = psutil.cpu_percent(interval=1)
        
        # Memory usage
        memory = psutil.virtual_memory()
        memory_percent = memory.percent
        
        # Disk usage
        disk = psutil.disk_usage('/')
        disk_percent = (disk.used / disk.total) * 100
        
        # Temperature (might not work on all systems)
        temperature = None
        try:
            temp_sensors = psutil.sensors_temperatures()
            if temp_sensors:
                temperature = {}
                for name, entries in temp_sensors.items():
                    if entries:
                        temperature[name] = [
                            {"label": entry.label or f"Sensor {i}", "current": entry.current}
                            for i, entry in enumerate(entries)
                        ]
        except (AttributeError, OSError):
            temperature = {"note": "Temperature sensors not available on this system"}
        
        # System uptime
        boot_time = psutil.boot_time()
        uptime_seconds = datetime.datetime.now().timestamp() - boot_time
        uptime_hours = uptime_seconds / 3600
        uptime = f"{uptime_hours:.1f} hours"
        
        # Platform information
        platform_info = {
            "system": platform.system(),
            "release": platform.release(),
            "version": platform.version(),
            "machine": platform.machine(),
            "processor": platform.processor(),
            "python_version": platform.python_version()
        }
        
        # Network statistics
        network = psutil.net_io_counters()
        network_stats = {
            "bytes_sent": network.bytes_sent,
            "bytes_recv": network.bytes_recv,
            "packets_sent": network.packets_sent,
            "packets_recv": network.packets_recv
        }
        
        # Process count
        process_count = len(psutil.pids())
        
        return SystemInfo(
            cpu_percent=cpu_percent,
            memory_percent=memory_percent,
            disk_percent=disk_percent,
            temperature=temperature,
            uptime=uptime,
            platform_info=platform_info,
            network_stats=network_stats,
            process_count=process_count
        )
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error getting system info: {str(e)}")

@app.get("/system/cpu")
async def get_cpu_info():
    """Get detailed CPU information"""
    try:
        cpu_percent = psutil.cpu_percent(interval=1, percpu=True)
        cpu_count = psutil.cpu_count()
        cpu_freq = psutil.cpu_freq()
        
        return {
            "cpu_percent_total": sum(cpu_percent) / len(cpu_percent),
            "cpu_percent_per_core": cpu_percent,
            "cpu_count": cpu_count,
            "cpu_frequency": {
                "current": cpu_freq.current if cpu_freq else None,
                "min": cpu_freq.min if cpu_freq else None,
                "max": cpu_freq.max if cpu_freq else None
            }
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error getting CPU info: {str(e)}")

@app.get("/system/memory")
async def get_memory_info():
    """Get detailed memory information"""
    try:
        memory = psutil.virtual_memory()
        swap = psutil.swap_memory()
        
        return {
            "virtual_memory": {
                "total": memory.total,
                "available": memory.available,
                "used": memory.used,
                "percent": memory.percent
            },
            "swap_memory": {
                "total": swap.total,
                "used": swap.used,
                "free": swap.free,
                "percent": swap.percent
            }
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error getting memory info: {str(e)}")

@app.get("/system/disk")
async def get_disk_info():
    """Get detailed disk information"""
    try:
        disk_usage = psutil.disk_usage('/')
        disk_io = psutil.disk_io_counters()
        
        return {
            "disk_usage": {
                "total": disk_usage.total,
                "used": disk_usage.used,
                "free": disk_usage.free,
                "percent": (disk_usage.used / disk_usage.total) * 100
            },
            "disk_io": {
                "read_count": disk_io.read_count,
                "write_count": disk_io.write_count,
                "read_bytes": disk_io.read_bytes,
                "write_bytes": disk_io.write_bytes
            } if disk_io else None
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error getting disk info: {str(e)}")

@app.post("/contact")
async def submit_contact(message: ContactMessage):
    """Handle contact form submissions"""
    try:
        # For now, we'll just log it and return success
        print(f"Contact form submission:")
        print(f"Name: {message.name}")
        print(f"Email: {message.email}")
        print(f"Subject: {message.subject}")
        print(f"Message: {message.message}")
        print(f"Timestamp: {datetime.datetime.now()}")
        print("-" * 50)
        
        return {
            "status": "success",
            "message": "Thank you for your message! I'll get back to you soon.",
            "timestamp": datetime.datetime.now().isoformat()
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error submitting contact form: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    
    # Get configuration from environment
    host = os.getenv("HOST", "0.0.0.0")
    port = int(os.getenv("PORT", 8000))
    debug = os.getenv("DEBUG", "True").lower() == "true"
    
    uvicorn.run(app, host=host, port=port, reload=debug)
