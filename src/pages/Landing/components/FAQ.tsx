import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

const faqs = [
  {
    question: 'What is FlagBase?',
    answer: 'FlagBase is an open-source feature flag and A/B testing platform. It lets you toggle features, run experiments, and track analytics — all without redeploying your application.',
  },
  {
    question: 'Is it really free?',
    answer: 'Yes. FlagBase is fully open source and free to self-host. There are no usage limits, no feature gates, and no credit card required. You own your data completely.',
  },
  {
    question: 'What languages does the SDK support?',
    answer: 'Currently FlagBase ships an official Python SDK. Support for JavaScript, Go, and Java SDKs is on the roadmap.',
  },
  {
    question: 'How does the A/B testing work?',
    answer: 'FlagBase uses a Z-test for proportions statistical engine. You define a control and variant, track conversion events via the SDK, and the dashboard shows you statistical significance. Declaring a winner is a deliberate manual step — FlagBase never auto-flips your flags.',
  },
  {
    question: 'Can I use FlagBase in production?',
    answer: 'Yes. FlagBase is built with production use in mind. It includes rate limiting, security headers, API key authentication, and a thread-safe SDK with event buffering.',
  },
  {
    question: 'How is user bucketing handled?',
    answer: 'FlagBase uses MurmurHash3 for consistent user bucketing. The same user always gets the same flag evaluation result, ensuring a stable experience across sessions.',
  },
]

const FAQItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={`border-b border-white/[0.06] ${index === 0 ? 'border-t' : ''}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group outline-none"
      >
        <span className={`text-sm font-medium transition-colors ${open ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className={`flex-shrink-0 ml-4 w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
            open ? 'border-indigo-500/50 bg-indigo-500/10' : 'border-white/[0.08] bg-white/[0.03] group-hover:border-white/20'
          }`}
        >
          <Plus className={`w-3 h-3 transition-colors ${open ? 'text-indigo-400' : 'text-gray-500'}`} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden"
          >
            <p className="text-sm text-gray-500 leading-relaxed pb-5 max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const FAQ = () => {
  return (
    <section id="faq" className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-white/10" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <p className="text-xs font-medium uppercase tracking-widest text-indigo-400 mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Common questions<br />
            <span className="text-gray-400">honest answers.</span>
          </h2>
        </motion.div>

        <div>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ