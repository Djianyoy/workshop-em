import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Admin</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Menu Kelola Aspek */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Kelola Aspek Penilaian</h2>
          <p className="text-gray-600 mb-4 text-sm">Atur kriteria penilaian untuk BPH dan Staff fungsionaris.</p>
          <Link href="/admin/aspek" className="text-blue-600 text-sm font-medium hover:underline">
            Kelola Aspek &rarr;
          </Link>
        </div>

        {/* Menu Input Raport */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Input Raport Baru</h2>
          <p className="text-gray-600 mb-4 text-sm">Mulai proses penilaian evaluasi untuk fungsionaris.</p>
          <Link href="/admin/raport/create" className="text-blue-600 text-sm font-medium hover:underline">
            Input Nilai &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}