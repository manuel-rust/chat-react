type FeatureCardProps = {
  title: string
  description: string
}

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="p-6 rounded-2xl shadow hover:shadow-lg transition">
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}