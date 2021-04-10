import "./JobList.css";
import { data } from "../../data";
import JobOffer from "../JobOffer/JobOffer";

export default function JobList() {

  return (
    <div className="job-list"> 
      {data.map(offer => <JobOffer key={offer.id} offer={offer} />)}
    </div>
  );
}