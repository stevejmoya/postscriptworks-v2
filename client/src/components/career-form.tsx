export function CareerForm() {
  return (
    <form
      action="https://formspree.io/f/xojyeqoa"
      method="POST"
      className="bg-[#07131f] text-white rounded-2xl p-8 md:p-10 shadow-xl space-y-8"
    >
      <input
        type="hidden"
        name="_subject"
        value="New Careers Application – Postscriptworks"
      />

      <div className="flex flex-wrap items-center gap-x-3 gap-y-5 text-xl md:text-2xl leading-relaxed">
        <span>Hi, my name is</span>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="h-12 px-4 rounded-xl bg-[#08111d] border border-[#22c55e] text-white placeholder:text-gray-500 outline-none min-w-[220px] flex-1"
        />

        <span>and I&apos;m based in</span>
        <input
          type="text"
          name="location"
          placeholder="City, State"
          required
          className="h-12 px-4 rounded-xl bg-[#08111d] border border-[#22c55e] text-white placeholder:text-gray-500 outline-none min-w-[220px] flex-1"
        />
        <span>.</span>

        <span>I am a</span>
        <input
          type="text"
          name="role"
          placeholder="Designer/Marketing/etc."
          required
          className="h-12 px-4 rounded-xl bg-[#08111d] border border-[#22c55e] text-white placeholder:text-gray-500 outline-none min-w-[260px] flex-1"
        />

        <span>with</span>
        <input
          type="number"
          name="experience"
          placeholder="0"
          min="0"
          required
          className="h-12 px-4 rounded-xl bg-[#08111d] border border-[#22c55e] text-white placeholder:text-gray-500 outline-none w-24"
        />

        <span>years of experience. My hourly rate is $</span>
        <input
          type="number"
          name="rate"
          placeholder="Rate"
          min="0"
          step="1"
          required
          className="h-12 px-4 rounded-xl bg-[#08111d] border border-[#22c55e] text-white placeholder:text-gray-500 outline-none w-28"
        />

        <span>and I&apos;m currently available to devote an avg. of</span>
        <input
          type="number"
          name="availability"
          placeholder="Hours"
          min="0"
          required
          className="h-12 px-4 rounded-xl bg-[#08111d] border border-[#22c55e] text-white placeholder:text-gray-500 outline-none w-28"
        />

        <span>hours per week on projects. My email is</span>
        <input
          type="email"
          name="email"
          placeholder="email@example.com"
          required
          className="h-12 px-4 rounded-xl bg-[#08111d] border border-[#22c55e] text-white placeholder:text-gray-500 outline-none min-w-[260px] flex-1"
        />

        <span>and my website / portfolio site is</span>
        <input
          type="url"
          name="portfolio"
          placeholder="https://your-site.com"
          className="h-12 px-4 rounded-xl bg-[#08111d] border border-[#22c55e] text-white placeholder:text-gray-500 outline-none min-w-[280px] flex-1"
        />
        <span>.</span>

        <span>A fun fact about me is that</span>
        <input
          type="text"
          name="fun_fact"
          placeholder="Something interesting about you"
          className="h-12 px-4 rounded-xl bg-[#08111d] border border-[#22c55e] text-white placeholder:text-gray-500 outline-none min-w-[320px] flex-1"
        />
        <span>.</span>
      </div>

      <div className="flex flex-wrap gap-4 pt-2">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-xl bg-[#4ade80] hover:bg-[#22c55e] text-white font-medium px-6 py-3 transition-colors"
        >
          Rock and Roll →
        </button>
      </div>
    </form>
  );
}
