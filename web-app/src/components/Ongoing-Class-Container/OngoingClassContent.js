import OngoingClassCard from "./OngoingClassCard";
import RecentClassCard from "./RecentClassCard";

export const OngoingClassContent = () => {
  return (
    <div className="Parent-ongoing-class-content">
      {/* <OngoingClassCard></OngoingClassCard>
      <OngoingClassCard></OngoingClassCard>
      <OngoingClassCard></OngoingClassCard>
      <OngoingClassCard></OngoingClassCard> */}
      <h1>Ongoing class</h1>
      <OngoingClassCard></OngoingClassCard>
      <h1>Recent class</h1>
      <RecentClassCard></RecentClassCard>
      <h1>Upcoming classes</h1>
      <div className="Parent-upcoming-class">
      <OngoingClassCard></OngoingClassCard>
      <OngoingClassCard></OngoingClassCard>
      <OngoingClassCard></OngoingClassCard>
      </div>
    </div>
  );
};
export default OngoingClassContent;
