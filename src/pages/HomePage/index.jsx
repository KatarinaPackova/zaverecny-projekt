import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
      <div>
        <header>
          <div className="header">
            <div className="names">
              <h1>Han a Katka</h1>
            </div>
            <div className="logo" />
          </div>
        </header>
        <main>
          <div className="article">
            <h2 className="subheading"> O nás </h2>
            <p className="katka--article">
              Katka absolvovala kurz šití a občas si i něco sama pro sebe a
              svoje blízké ušije, nebo upraví. Pracuje jako program manager v
              oblasti vývoje aplikací a ráda by tyto dvě věci spojila dohromady
              na realizaci tohoto užitečného projektu.
            </p>
            <p className="han--article">
              Han studovala oděvní design a má roky zkušeností s klienty, kterým
              se snažila pomoci s výběrem něčeho vhodného, nebo pro ně tvořila
              na míru kousky z jejích kolekcí. Zajímá se také o udržitelnost a
              není fanda masové produkce. Tyto zkušenosti chce propojit a využit
              na tento projekt.
            </p>
          </div>
        </main>
      </div>
      <footer>
        <p>© 2025 Katarina Packova, Han Frišonsová</p>
      </footer>
    </div>
  );
};
