import { useState } from "react";
import "./JobList.css";
import { data } from "../../data";
import JobOffer from "./JobOffer";

export default function JobList() {

  const [jobOffers] = useState(data);
  return (
    <div className="job-list"> 
      {jobOffers.map(offer => <JobOffer key={offer.id} offer={offer} />)}
    </div>
  );
}