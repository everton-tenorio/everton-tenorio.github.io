<!-- components/TechSkillsShowcase.vue -->
<template>
  <div class="relative bg-black py-20 px-4 mb-[-90px] overflow-hidden">
    <!-- Matrix-style background -->
    <div class="absolute inset-0 opacity-5">
      <div 
        class="absolute inset-0" 
        style="background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 0, 0.03) 2px, rgba(0, 255, 0, 0.03) 4px)"
      />
    </div>

    <div class="max-w-6xl mx-auto relative">
      <!-- System Status Header 
      <div class="mb-12 font-mono">
        <div class="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-2 md:gap-0 mb-6 text-green-400 text-xs md:text-sm">
          <div class="flex items-center gap-4">
            <span class="animate-pulse">█</span>
            <span>SYSTEM_STATUS: <span class="text-white">OPERATIONAL</span></span>
          </div>
          <div class="flex items-center gap-4">
            <span>UPTIME: <span class="text-white">{{ uptime }}</span></span>
            <span class="flex items-center gap-2">
              <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              ONLINE
            </span>
          </div>
        </div>
        
        <div class="text-1xl md:text-3xl lg:text-3xl text-white font-bold mb-2 tracking-tight">
          <span class="text-green-400">&gt;</span> evttenorio@outlook.com
        </div>
        <div class="text-gray-500 text-sm">
          [PROFILE: CREATIVE_PROBLEM_SOLVER]
        </div>
      </div>-->

      <!-- Skills Matrix --
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
        <=!-- Terminal 1: Core Stack --
        <div class="bg-[#0e0e0e] border border-gray-800 rounded-lg overflow-hidden shadow-2xl">
          <div class="bg-black px-4 py-2 flex items-center gap-2 border-b border-gray-700">
            <div class="flex gap-1.5">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span class="text-gray-400 text-xs font-mono ml-2">core_stack.sh</span>
          </div>
          <div class="p-4 font-mono text-sm">
            <div v-for="(skill, index) in coreStack" :key="skill.name" class="mb-3">
              <div class="text-gray-500 text-xs mb-1"># {{ skill.name }}</div>
              <div class="flex items-center gap-2">
                <span class="text-green-400">$</span>
                <span class="text-gray-300">{{ skill.command }}</span>
              </div>
              <div class="flex items-center gap-2 mt-1">
                <div class="flex-1 bg-gray-800 rounded-full h-1.5 overflow-hidden">
                  <div 
                    class="h-full bg-gradient-to-r from-green-500 to-emerald-400 transition-all duration-1000"
                    :style="{ width: isVisible ? `${skill.level}%` : '0%' }"
                  ></div>
                </div>
                <span class="text-green-400 text-xs">{{ skill.level }}%</span>
              </div>
            </div>
          </div>
        </div>

        <!=-- Terminal 2: Infrastructure --
        <div class="bg-[#0e0e0e] border border-gray-800 rounded-lg overflow-hidden shadow-2xl">
          <div class="bg-black px-4 py-2 flex items-center gap-2 border-b border-gray-700">
            <div class="flex gap-1.5">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span class="text-gray-400 text-xs font-mono ml-2">infrastructure.sh</span>
          </div>
          <div class="p-4 font-mono text-sm">
            <div v-for="(skill, index) in infrastructure" :key="skill.name" class="mb-3">
              <div class="text-gray-500 text-xs mb-1"># {{ skill.name }}</div>
              <div class="flex items-center gap-2">
                <span class="text-blue-400">$</span>
                <span class="text-gray-300">{{ skill.command }}</span>
              </div>
              <div class="flex items-center gap-2 mt-1">
                <div class="flex-1 bg-gray-800 rounded-full h-1.5 overflow-hidden">
                  <div 
                    class="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-1000"
                    :style="{ width: isVisible ? `${skill.level}%` : '0%' }"
                  ></div>
                </div>
                <span class="text-blue-400 text-xs">{{ skill.level }}%</span>
              </div>
            </div>
          </div>
        </div>
      </div> -->

      <!-- System Logs / About -->
      <div class="bg-[#0e0e0e] border border-gray-800 rounded-lg overflow-hidden shadow-2xl">
        <div class="bg-black px-4 py-2 flex items-center gap-2 border-b border-gray-700">
          <div class="flex gap-1.5">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span class="text-gray-400 text-xs font-mono ml-2">system_profile.log</span>
        </div>
        <div class="p-4 md:p-6 font-mono text-xs md:text-sm">
          <div class="space-y-2">
            <div class="flex items-start gap-3">
              <span class="text-gray-600 text-xs mt-0.5">{{ formatTime(0) }}</span>
              <div class="flex-1">
                <span class="text-green-400">[INFO]</span>
                <span class="text-[#01fa23] ml-2">Building scalable web applications with modern frameworks</span>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-gray-600 text-xs mt-0.5">{{ formatTime(1) }}</span>
              <div class="flex-1">
                <span class="text-blue-400">[DEVOPS]</span>
                <span class="text-[#01fa23] ml-2">Automating deployment pipelines and infrastructure as code</span>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-gray-600 text-xs mt-0.5">{{ formatTime(2) }}</span>
              <div class="flex-1">
                <span class="text-yellow-400">[SECURITY]</span>
                <span class="text-[#01fa23] ml-2">Some notion is necessary</span>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-gray-600 text-xs mt-0.5">{{ formatTime(3) }}</span>
              <div class="flex-1">
                <span class="text-white">[CREATIVE]</span>
                <span class="text-[#01fa23] ml-2">Breaking conventional solutions with innovative approaches</span>
              </div>
            </div>
            <div class="flex items-start gap-3 mt-4">
              <span class="text-gray-600 text-xs mt-0.5">{{ formatTime(4) }}</span>
              <div class="flex-1">
                <span class="text-green-400">[STATUS]</span>
                <span class="text-[#01fa23] ml-2 font-bold">Ready for production environments</span>
                <span class="text-green-400 animate-pulse ml-2">▊</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Footer 
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 font-mono text-xs">
        <div class="bg-gray-900 border border-gray-800 rounded p-4">
          <div class="text-gray-500 mb-1">PROJECTS_DEPLOYED</div>
          <div class="text-2xl text-green-400 font-bold">{{ stats.projects }}+</div>
        </div>
        <div class="bg-gray-900 border border-gray-800 rounded p-4">
          <div class="text-gray-500 mb-1">CODE_COMMITS</div>
          <div class="text-2xl text-blue-400 font-bold">{{ stats.commits }}+</div>
        </div>
        <div class="bg-gray-900 border border-gray-800 rounded p-4">
          <div class="text-gray-500 mb-1">COFFEE_CONSUMED</div>
          <div class="text-2xl text-yellow-400 font-bold">{{ stats.coffee }}L</div>
        </div>
        <div class="bg-gray-900 border border-gray-800 rounded p-4">
          <div class="text-gray-500 mb-1">BUGS_FIXED</div>
          <div class="text-2xl text-purple-400 font-bold">{{ stats.bugs }}+</div>
        </div>
      </div>-->
    </div>

    <!-- Scanline effect -->
    <div class="absolute inset-0 pointer-events-none opacity-5">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-green-500 to-transparent animate-scan"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const uptime = ref('00:00:00')
let interval: NodeJS.Timeout | null = null

const coreStack = [
  { name: 'Vue.js & Nuxt', command: 'npm run build --production', level: 75 },
  { name: 'Python', command: 'python3 manage.py runserver', level: 85 },
  { name: 'JavaScript/TypeScript', command: 'tsc --strict --noEmit', level: 50 }
]

const infrastructure = [
  { name: 'Linux System Administration', command: 'systemctl status nginx', level: 85 },
  { name: 'Docker & Containerization', command: 'docker-compose up -d --scale', level: 85 },
  { name: 'CI/CD Pipelines', command: 'gh workflow run deploy.yml', level: 75 },
  { name: 'AWS Cloud Services', command: 'aws cloudformation deploy', level: 75 },
  { name: 'Security', command: 'nmap -sS -sV --script vuln', level: 51 }
]

const stats = ref({
  projects: 50,
  commits: 1000,
  coffee: 9999,
  bugs: 500
})

const formatTime = (offset: number) => {
  const now = new Date()
  now.setSeconds(now.getSeconds() + offset)
  return now.toTimeString().split(' ')[0]
}

const updateUptime = () => {
  const start = new Date()
  start.setHours(9, 0, 0)
  const now = new Date()
  const diff = Math.abs(now.getTime() - start.getTime())
  const hours = Math.floor(diff / 3600000)
  const minutes = Math.floor((diff % 3600000) / 60000)
  const seconds = Math.floor((diff % 60000) / 1000)
  uptime.value = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
  
  updateUptime()
  interval = setInterval(updateUptime, 1000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<style scoped>
@keyframes scan {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}

.animate-scan {
  animation: scan 8s linear infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>