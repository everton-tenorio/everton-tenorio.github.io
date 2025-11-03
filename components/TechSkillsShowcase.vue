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
      <!-- macOS Terminal Window -->
      <div class="bg-[#0f0f0f] border border-[#2d2d2d] rounded-lg overflow-hidden shadow-2xl">
        <!-- macOS Window Controls -->
        <div class="bg-[#2d2d2d] px-4 py-3 flex items-center gap-2 border-b border-[#1a1a1a]">
          <div class="flex gap-2">
            <div class="w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff5f57]/80 transition-colors"></div>
            <div class="w-3 h-3 rounded-full bg-[#febc2e] hover:bg-[#febc2e]/80 transition-colors"></div>
            <div class="w-3 h-3 rounded-full bg-[#28c840] hover:bg-[#28c840]/80 transition-colors"></div>
          </div>
          <span class="text-gray-400 text-xs font-medium ml-2">zsh</span>
        </div>

        <!-- Terminal Content -->
        <div class="p-6 font-mono text-sm min-h-[400px]">
          <!-- Command Line -->
          <div class="mb-4">
            <span class="text-[#5af78e]">everton@techlab</span>
            <span class="text-white">:</span>
            <span class="text-[#57c7ff]">~</span>
            <span class="text-white"> $ </span>
            <span class="text-white">{{ typedCommand }}</span>
            <span v-if="showCursor && !commandExecuted" class="text-white animate-pulse">▊</span>
          </div>

          <!-- Log Output -->
          <div v-if="commandExecuted" class="space-y-1">
            <div 
              v-for="(line, index) in visibleLines" 
              :key="index"
              class="flex items-start gap-3"
            >
              <span class="text-gray-600 text-xs mt-0.5 select-none">{{ line.time }}</span>
              <div class="flex-1">
                <span :class="getLogTypeColor(line.type)">[{{ line.type }}]</span>
                <span class="text-gray-300 ml-2">{{ line.text }}</span>
              </div>
            </div>

            <!-- Cursor after logs -->
            <div v-if="allLinesVisible" class="mt-4">
              <span class="text-[#5af78e]">everton@techlab</span>
              <span class="text-white">:</span>
              <span class="text-[#57c7ff]">~</span>
              <span class="text-white"> $ </span>
              <span class="text-white animate-pulse">▊</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scanline effect -->
    <div class="absolute inset-0 pointer-events-none opacity-5">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-green-500 to-transparent animate-scan"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface LogLine {
  time: string
  type: string
  text: string
}

const typedCommand = ref('')
const commandExecuted = ref(false)
const showCursor = ref(true)
const visibleLines = ref<LogLine[]>([])
const allLinesVisible = ref(false)

const fullCommand = 'cat /var/log/system_profile.log'

const getCurrentTime = () => {
  const now = new Date()
  return now.toTimeString().split(' ')[0] // Returns HH:MM:SS
}

const generateLogLines = (): LogLine[] => {
  const baseTime = new Date()
  return [
    { time: getCurrentTime(), type: 'INFO', text: 'Building scalable web applications with modern frameworks' },
    { time: new Date(baseTime.getTime() + 1000).toTimeString().split(' ')[0], type: 'DEVOPS', text: 'Automating deployment pipelines and infrastructure as code' },
    { time: new Date(baseTime.getTime() + 2000).toTimeString().split(' ')[0], type: 'SECURITY', text: 'Implementing secure authentication and authorization flows' },
    { time: new Date(baseTime.getTime() + 3000).toTimeString().split(' ')[0], type: 'CREATIVE', text: 'Breaking conventional solutions with innovative approaches' },
    { time: new Date(baseTime.getTime() + 4000).toTimeString().split(' ')[0], type: 'STATUS', text: 'Ready for production environments ✓' }
  ]
}

const logLines = generateLogLines()

const getLogTypeColor = (type: string) => {
  const colors: Record<string, string> = {
    INFO: 'text-[#5af78e]',
    DEVOPS: 'text-[#57c7ff]',
    SECURITY: 'text-[#ff6b6b]',
    CREATIVE: 'text-[#ffd866]',
    STATUS: 'text-[#5af78e]'
  }
  return colors[type] || 'text-gray-400'
}

let typingTimeout: NodeJS.Timeout | null = null
let executionTimeout: NodeJS.Timeout | null = null
let lineTimeouts: NodeJS.Timeout[] = []

const typeCommand = () => {
  let currentIndex = 0
  
  const typeNextChar = () => {
    if (currentIndex < fullCommand.length) {
      typedCommand.value += fullCommand[currentIndex]
      currentIndex++
      typingTimeout = setTimeout(typeNextChar, 80 + Math.random() * 40)
    } else {
      // Command typed, wait a bit then execute
      executionTimeout = setTimeout(() => {
        commandExecuted.value = true
        showLogs()
      }, 500)
    }
  }
  
  typeNextChar()
}

const showLogs = () => {
  logLines.forEach((line, index) => {
    const timeout = setTimeout(() => {
      visibleLines.value.push(line)
      
      if (index === logLines.length - 1) {
        allLinesVisible.value = true
      }
    }, index * 400)
    
    lineTimeouts.push(timeout)
  })
}

onMounted(() => {
  // Start typing after a short delay
  typingTimeout = setTimeout(() => {
    typeCommand()
  }, 800)
})

onUnmounted(() => {
  if (typingTimeout) clearTimeout(typingTimeout)
  if (executionTimeout) clearTimeout(executionTimeout)
  lineTimeouts.forEach(timeout => clearTimeout(timeout))
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
  50% { opacity: 0; }
}

.animate-pulse {
  animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Custom scrollbar for terminal feel */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #1e1e1e;
}

::-webkit-scrollbar-thumb {
  background: #3d3d3d;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #4d4d4d;
}
</style>