import "./JobOffer.css";

export default function JobOffer({ offer }) {

  const tag = (content, index) => <div key={index} className="tag">{content}</div>;

  const styles = {
    borderLeft: offer.new && offer.featured ? "5px solid hsl(180, 29%, 50%)" : "none"
  };

  return (
    <div className="offer" style={styles}>
      <img src={offer.logo} alt={`${offer.company} logo`} />
      <div className="info">
        <div className="company">
          <div className="company-name">{offer.company}</div> 
          &nbsp;{offer.new && <div className="badge new-badge">new!</div>} 
          &nbsp;{offer.featured && <div className="badge featured-badge">featured</div>}
        </div>
        <div className="position">
          {offer.position}
        </div>
        <div className="additional-info">
          {offer.postedAt} &nbsp; <strong>&#183;</strong> &nbsp; {offer.contract} &nbsp; <strong>&#183;</strong> &nbsp; {offer.location}
        </div>
      </div>
      <div className="tags">
          {tag(offer.role)}
          {tag(offer.level)}
          {offer.languages.map((language, index) => tag(language, index))}
          {offer.tools.map((tool, index) => tag(tool, index))}
      </div>
    </div>
  );
}
