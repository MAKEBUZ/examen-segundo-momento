import { Heart } from "lucide-react"

export default function ProductCard() {
  return (
    <section className="flex items-center justify-center min-h-screen w-85">
      <section className="w-full max-w-sm overflow-hidden rounded-2xl shadow-xl shadow-gray-500/50 bg-white">
        <section className="relative">
          <section className="h-64 bg-gradient-to-l from-purple-300 to-gray-700 rounded-t-2xl">
            <img src="/shoe.png" alt="Nike Running Shoe" className="object-contain w-full h-full p-4" />
            <button className="absolute top-3 right-3 p-2 rounded-full bg-gray-600/40 text-gray-200">
              <Heart className="w-6 h-6" />
            </button>
          </section>

          <section className="p-5 bg-white rounded-t-2xl shadow-lg shadow-gray-700 mt-[-16px] relative z-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-1">Nike Running Shoe</h2>

            <section className="flex gap-2 mb-4">
              <span className="inline-flex items-center px-2 text-xxs font-bold rounded-sm border border-gray-600/90 text-gray-700/70">
                EU38
              </span>
              <span className="inline-flex items-center px-2 text-xxs font-bold rounded-sm border border-gray-600/90 text-gray-700/70">
                BLACK/WHITE
              </span>
            </section>

            <p className="text-gray-600 text-sm mb-6">
              Crossing hardwood comfort with off-court flair. &apos;80s-inspired construction, bold details and
              nothin&apos;-but-net style.
            </p>

            <section className="flex items-center justify-between">
              <section>
                <p className="text-xxs text-gray-600 uppercase font-bold">Price</p>
                <p className="text-xl font-semibold text-gray-800">$69.99</p>
              </section>
              <button className="px-12 py-3 text-sm font-medium text-white btn-custom rounded-md ">
                Add to cart
              </button>
            </section>
          </section>
        </section>
      </section>
    </section>
  )
}