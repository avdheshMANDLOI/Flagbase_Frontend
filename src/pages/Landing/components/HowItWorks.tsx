import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Deploy FlagBase',
    description: 'Clone the repo and run docker compose up. Your FlagBase instance is live in under 2 minutes. No external dependencies.',
    code: 'docker compose up -d',
  },
  {
    number: '02',
    title: 'Install the SDK',
    description: 'Install the Python SDK from PyPI. One import, one client initialization, and you are ready to evaluate flags.',
    code: 'pip install flagbase-sdk',
  },
  {
    number: '03',
    title: 'Evaluate flags in your code',
    description: 'Wrap any feature in a flag check. Roll out to a percentage of users, target specific IDs, or toggle instantly from the dashboard.',
    code: 'client.is_enabled("new-checkout", user_id)',
  },
]

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-white/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <p className="text-xs font-medium uppercase tracking-widest text-indigo-400 mb-4">
            Get started in minutes
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Up and running<br />
            <span className="text-gray-400">in three steps.</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line connecting steps */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-white/[0.06] to-transparent" />

          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  i % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Step number bubble */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#030712] border border-indigo-500/50 flex items-center justify-center">
                    <span className="text-xs font-mono font-bold text-indigo-400">{step.number}</span>
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 md:max-w-[calc(50%-3rem)]">
                  <div className="rounded-xl border border-white/[0.06] bg-[#0d1117] p-6 hover:border-white/[0.10] transition-colors">
                    <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{step.description}</p>
                    {/* Code snippet */}
                    <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-black/40 border border-white/[0.04]">
                      <span className="text-indigo-400 font-mono text-xs">$</span>
                      <code className="text-gray-300 font-mono text-xs">{step.code}</code>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1 md:max-w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks