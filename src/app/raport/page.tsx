export default function RaportPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900">Raport Evaluasi Anda</h1>
          <p className="text-sm text-gray-500 mt-1">Periode Penilaian: Semester 1</p>
        </div>
        
        <div className="p-6">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aspek Penilaian</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nilai (0-100)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Kedisiplinan</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">85</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Tanggung Jawab Program Kerja</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">92</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}