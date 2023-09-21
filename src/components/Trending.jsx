import { trends } from "../utils";

const Trending = () => {
  return (
    <section className="trending">
      <div className="content--center">
        {trends.map(({ id, img, header, title, description }) => {
          return (
            <article key={id} className="trend">
              <div className="trend__img-container">
                <img src={img} alt={title} className="trend__img" />
              </div>
              <div className="trend__body">
                <span className="trend__header">{header}</span>
                <h5 className="trend__title">{title}</h5>
                <p className="trend__desc">{description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Trending;
