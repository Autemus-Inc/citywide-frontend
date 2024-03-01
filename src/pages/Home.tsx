
const Home = () => {
  return (
    <main>
    <div className="relative bg-cover bg-top-center bg-[#111] mix-blend-overlay h-[70vh]" style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/side-view-man-traveling-by-train_23-2150578050.jpg?w=1800&t=st=1709326742~exp=1709327342~hmac=3ddc2b753e3c3320aa6a571a21cac16dd8e483656a6622557fba7ae1316793bd")' }}>
    <div className="absolute bg-[#3248A3] h-[70vh] mix-blend-overlay">

    {/* <div className="bg-gradient-to-r from-[#3248A3] to-gray-200 mix-blend-overlay h-[70vh] z-10"></div> */}
    {/* <div className="relative z-10 p-8 text-white"> */}
      <h1 className="text-4xl font-bold mb-4">Plan Your Trip Without Queueing</h1>
      <p className="text-lg">Plan Your Trip Without Queueing.</p>
    </div>
    </div>

    </main>
  )
}

export default Home