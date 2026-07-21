import { Flag, FlaskConical, BarChart3, Lock, Zap, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Flag,
    title: 'Feature Flags',
    description: 'Toggle features on and off in real time without redeploying. Target specific users, segments, or percentage rollouts.',
    color: 'group-hover:text-indigo-400',
    border: 'group-hover:border-indigo-500/40',
    glow: 'from-indigo-500/[0.07]',
  },
  {
    icon: FlaskConical,
    title: 'A/B Testing',
    description: 'Run statistically significant experiments with a built-in Z-test engine. Declare winners with confidence.',
    color: 'group-hover:text-violet-400',
    border: 'group-hover:border-violet-500/40',
    glow: 'from-violet-500/[0.07]',
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    description: 'Track flag evaluations and experiment events in real time. Visualize trends with time-series charts.',
    color: 'group-hover:text-blue-400',
    border: 'group-hover:border-blue-500/40',
    glow: 'from-blue-500/[0.07]',
  },
  {
    icon: Lock,
    title: 'Self-Hostable',
    description: 'Deploy on your own infrastructure. Your data never leaves your VPC. Full control over security and compliance.',
    color: 'group-hover:text-emerald-400',
    border: 'group-hover:border-emerald-500/40',
    glow: 'from-emerald-500/[0.07]',
  },
  {
    icon: Zap,
    title: 'Python SDK',
    description: 'Integrate in one line of Python. Thread-safe event buffering with automatic periodic flushing built in.',
    color: 'group-hover:text-yellow-400',
    border: 'group-hover:border-yellow-500/40',
    glow: 'from-yellow-500/[0.07]',
  },
  {
    icon: Globe,
    title: 'Multi-Environment',
    description: 'Manage flags across Local, Dev, Staging, and Production independently. Each environment has its own API keys.',
    color: 'group-hover:text-cyan-400',
    border: 'group-hover:border-cyan-500/40',
    glow: 'from-cyan-500/[0.07]',
  },
]

// Floating dots in background
const dots = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: 4 + Math.random() * 4,
  delay: Math.random() * 3,
  size: Math.random() > 0.5 ? 1.5 : 1,
}))

const Features = () => {
  return (
    <section id="features" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-white/10" />

      {/* Floating dots */}
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-indigo-400/20 pointer-events-none"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: dot.size,
            height: dot.size,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <p className="text-xs font-medium uppercase tracking-widest text-indigo-400 mb-4">
            Everything you need
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Built for developers,<br />
            <span className="text-gray-400">not marketing teams.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: (i % 3) * 0.08,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="bg-[#030712] p-8 transition-colors group relative overflow-hidden cursor-default"
              >
                {/* Per-card colored glow on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br ${feature.glow} to-transparent`} />

                {/* Animated top border on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <motion.div
                  className={`w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-5 transition-colors ${feature.border}`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <Icon className={`w-4 h-4 text-gray-400 transition-colors ${feature.color}`} />
                </motion.div>

                <h3 className="text-sm font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features