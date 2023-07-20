import "../styles/home.css";

export default function Home() {
  return (
    <main className="home">
      <section className="home-hero">
        <img src="src/assets/salon.jpg" alt="salon"/>
        <div className="home-hero-text">
          <h1>Beyond Blessed Salon</h1>
          <h2>Where you are beyond blessed!</h2>
        </div>
      </section>
      <section className="home-about">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, voluptate, quibusdam, quia voluptas quod quos
        </p>
        <a href='/services'><button>My Services</button></a>
      </section>
    </main>
  );
}
