export default function Footer() {
  return (
    <footer className="bg-[#0D2B4F] text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Contacts */}
        <div>
          <h4 className="text-lg font-semibold mb-1">Contacts</h4>
          <div className="flex items-center mb-2">
            <span className="text-xs mr-2">•••</span>
            <hr className="border-white border-t w-16" />
          </div>
          <p><strong>Arts and Commerce College, Pusegaon</strong></p>
          <p>Tal Khatav, Dist Satara</p>
          <p><strong>Phone No:</strong></p>
          <p><strong>Email:</strong></p>
        </div>

        {/* Favourites */}
        <div>
          <h4 className="text-lg font-semibold mb-1">Favourites</h4>
          <div className="flex items-center mb-2">
            <span className="text-xs mr-2">•••</span>
            <hr className="border-white border-t w-16" />
          </div>
          <ul className="space-y-1">
            <li>College Website</li>
            <li>University Portal</li>
            <li>Scholarship Form</li>
            <li>NAAC Report</li>
          </ul>
        </div>

        {/* Timing */}
        <div>
          <h4 className="text-lg font-semibold mb-1">Timing</h4>
          <div className="flex items-center mb-2">
            <span className="text-xs mr-2">•••</span>
            <hr className="border-white border-t w-16" />
          </div>
          <p><strong>College Timings</strong></p>
          <p><strong>Arts:</strong> 7:30 AM – 12:30 PM</p>
          <p><strong>Commerce:</strong> 11:00 AM – 4:00 PM</p>
          <p><strong>Office Timing:</strong> 10:00 AM – 5:00 PM</p>
        </div>

        {/* Site Visitors */}
        <div>
          <h4 className="text-lg font-semibold mb-1">Site Visitors</h4>
          <div className="flex items-center mb-2">
            <span className="text-xs mr-2">•••</span>
            <hr className="border-white border-t w-16" />
          </div>
          <p>Total Visitors: 123456</p>
          <p>Today: 34</p>
          <p>This Week: 245</p>
        </div>

      </div>
    </footer>
  );
}
