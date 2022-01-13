function Footer() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-200 text-gray-800">
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">ABOUT</h5>
          <p className="cursor-pointer">How Hoster works</p>
          <p className="cursor-pointer">Newsroom</p>
          <p className="cursor-pointer">Investors</p>
          <p className="cursor-pointer">Hoster Plus</p>
          <p className="cursor-pointer">Hoster Luxe</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">COMMUNITY</h5>
          <p className="cursor-pointer">Disaster relief housing</p>
          <p className="cursor-pointer">Support Afghan refugees</p>
          <p className="cursor-pointer">Celebrating diversity & belonging</p>
          <p className="cursor-pointer">Combating discrimination</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">HOSTING</h5>
          <p className="cursor-pointer">Try hosting</p>
          <p className="cursor-pointer">AirCover: protection for Hosts</p>
          <p className="cursor-pointer">Explore hosting resources</p>
          <p className="cursor-pointer">Visit our community forum</p>
          <p className="cursor-pointer">How to host responsibly</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">SUPPORT</h5>
          <p className="cursor-pointer">Help Center</p>
          <p className="cursor-pointer">Trust & Safety</p>
          <p className="cursor-pointer">Safety information</p>
          <p className="cursor-pointer">Our COVID-19 Response</p>
          <p className="cursor-pointer">Supporting people with disabilities</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
