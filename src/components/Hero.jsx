import heroImg from "../assets/image-web-3-mobile.jpg";
import { news } from "../utils";

const Hero = () => {
  return (
    <section className="hero">
      <div className="content--center">
        <article className="home">
          <div className="home__img-container">
            <img src={heroImg} alt="" className="hero__img" />
          </div>
          <div className="home__body">
            <div className="body__header">
              <h3 className="home__title">The bright future of web 3.0?</h3>
            </div>
            <div className="home__info">
              <p className="home__desc">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="btn">read more</button>
            </div>
          </div>
        </article>
        <article className="news">
          <h3 className="news__title">new</h3>
          <div className="news__body">
            {news.map(({ id, title, description }) => {
              return (
                <div key={id} className="news__info">
                  <h5 className="info__title">{title}</h5>
                  <p className="info__desc">{description}</p>
                </div>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Hero;
