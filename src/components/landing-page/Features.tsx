import FeatureCard from "./FeatureCard"

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-10">
          ¿Por qué usar ChatFlow?
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard title="⚡ Rápido" description="Mensajes en tiempo real sin retrasos." />
          <FeatureCard title="🔒 Seguro" description="Protección y privacidad garantizadas." />
          <FeatureCard title="🤖 Inteligente" description="Automatización inteligente." />
        </div>
      </div>
    </section>
  )
}