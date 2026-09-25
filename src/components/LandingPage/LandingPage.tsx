import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function LandingPage() {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLHeadingElement>(null);
    
    useGSAP(
        () => {
            gsap.fromTo(titleRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 2.5, ease: "power3.out" }
            );
        }
    ) 

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <div className="text-center">
        <h1 ref={titleRef} className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
          Sistem Raport Evaluasi
          <span className="block text-blue-600">Fungsionaris Organisasi</span>
        </h1>
        <p ref={subtitleRef} className="mt-4 text-lg leading-8 text-gray-600 mb-8 max-w-2xl mx-auto">
          Platform terpadu untuk mengevaluasi kinerja, mengelola aspek penilaian, dan memonitor perkembangan fungsionaris secara transparan.
        </p>
        <Link 
          href="/login" 
          className="rounded-md bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all"
        >
          Login
        </Link>
      </div>
    </main>
  )
}