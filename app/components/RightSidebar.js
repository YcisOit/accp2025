"use client";

export default function RightSidebar() {
  return (
    <div className="bg-white p-2">
      <aside className="w-72 space-y-6">
        {/* Box 1 */}
        <div className="border-2 border-blue-900">
          <h4 className="bg-[#0D2B4F] text-white text-center font-bold py-2 text-sm tracking-wide">
            ANNOUNCEMENTS
          </h4>
          <div className="p-4 h-42 text-center text-sm text-gray-800">
            {/* Content goes here */}
          </div>
        </div>

        {/* Box 2 */}
        <div className="border-2 border-blue-900">
          <h4 className="bg-[#0D2B4F] text-white text-center font-bold py-2 text-sm tracking-wide">
            NEWS & EVENTS
          </h4>
          <div className="p-4 h-42 text-center text-sm text-gray-800">
            {/* Content goes here */}
          </div>
        </div>

        {/* Box 3 */}
        <div className="border-2 border-blue-900">
          <h4 className="bg-[#0D2B4F] text-white text-center font-bold py-2 text-sm tracking-wide">
            ACHIEVEMENTS/ AWARDS
          </h4>
          <div className="p-4 h-42 text-center text-sm text-gray-800">
            {/* Content goes here */}
          </div>
        </div>
      </aside>
    </div>
  );
}
