import { Helmet } from "react-helmet-async";
import BibleVerses from "../components/BibleVerses";

function SoulWinning() {
  return (
    <>
      <Helmet>
        <title>How to Evangelize - Hope in Christ City Church</title>
        <meta name="description" content="Learn the path to salvation through God's Word. Discover the steps to evangelism at Hope in Christ City Church." />
      </Helmet>
      <BibleVerses />
    </>
  );
}

export default SoulWinning;
