import { Helmet } from "react-helmet-async";
import "./Foundation.css";
import { GradientText } from "../../components/premium";
import RevealOnScroll from "../../components/RevealOnScroll";

const articles = [
  {
    title: "GOD",
    body: "We worship and serve the only One True God, who revealed Himself in the Bible as three persons in the mystery of the Trinity: God the Father, God the Son, and God the Holy Spirit.",
    ref: "(Deuteronomy 6:4, Matthew 28:19-20)",
  },
  {
    title: "JESUS",
    body: "Jesus Christ is the Son of God, being fully God and fully man. He was conceived of the Holy Spirit, born of the virgin Mary, lived a sinless life but suffered and died in the place of sinful man, was buried and resurrected, ascended bodily into heaven, and is preparing to return bodily in glory to earth a second time.",
    ref: "(John 1:1-14, John 14:1-3, 1 Corinthians 15:3-6, Philippians 2:5-11)",
  },
  {
    title: "HOLY SPIRIT",
    body: "The Holy Spirit is God, who is actively at work in the world. He dwells permanently in every believer, helps us to pray, equips and empowers us to serve God, strengthens and molds us to be more like Christ, and protects us to guarantee our eternal life.",
    ref: "(Acts 5:34, Romans 8:14-16, 26)",
    extra: [
      {
        body: "We believe that the sign gifts, especially speaking in tongues and miracle healing, were given to authenticate the Apostles' message and establish the early church.",
        ref: "(2 Corinthians 12:12, 1 Corinthians 13:10-11)",
      },
      {
        body: "God is Sovereign and may allow a miraculous sign, such as tongues, healing, or special revelation, particularly where the gospel is forbidden or unavailable. However, these would be counted as miracles, not the norm, and we do not expect or promote such signs.",
        ref: "(1 Corinthians 14:21-22, 2 Corinthians 5:7)",
      },
    ],
  },
  {
    title: "THE BIBLE",
    body: "The Bible is the inspired, inerrant, infallible Word of God, so it is our only sure source of knowledge about God and His plans and is the final authority and our absolute guide for doctrinal teaching and godly living.",
    ref: "(2 Timothy 3:16-17, 2 Peter 1:20-21)",
  },
  {
    title: "ANGELS",
    body: "Angels are the innumerable and unseen creatures who serve the causes of God and His people. Satan and demons are fallen angels who promote wickedness and oppose God's purposes, doomed and awaiting their final judgment.",
    ref: "(Isaiah 14:12-17, Hebrews 1:6-14)",
  },
  {
    title: "MAN",
    body: "God created man, male and female, in His image. Man was originally sinless, but through Adam, all mankind sinned, became condemned, separated from God, and was rendered totally unable to gain God's favor of forgiveness and eternal life.",
    ref: "(Genesis 1:26-27, Romans 5:12-14)",
  },
  {
    title: "SALVATION",
    body: "Salvation is God's act of forgiving sins, reconciling people to Himself, and giving a new nature and eternal life to those who put their trust in the finished work of Jesus Christ. Salvation is not a reward for good works but a free gift of God received by grace through faith in Christ alone and secured eternally by the indwelling presence of the Holy Spirit.",
    ref: "(Ephesians 1:13-14, Ephesians 2:1-10, 1 John 5:11-13)",
  },
  {
    title: "THE CHURCH",
    body: "The Church is the universal Body of Christ, consisting of all born-again Christians united by the indwelling Holy Spirit. A member of a local church must have undergone baptism by immersion, participate in Communion, and help fulfill the church mission to make disciples of all nations.",
    ref: "(Matthew 28:18-20, Acts 2:41, 1 Corinthians 11:17-34, 1 Corinthians 12:13)",
  },
  {
    title: "THE END TIMES",
    body: "Jesus Christ will come again to reign on earth, to reward God's people with life with Him forever in the new heaven and earth, and to judge unbelievers with eternal separation from God and suffering in hell.",
    ref: "(Revelation 20:1-4, Revelation 21:6-8)",
  },
  {
    title: "THE BIBLE AS THE FINAL AUTHORITY",
    body: "This Doctrinal Statement does not exhaust the extent of our beliefs. The Bible itself, as the inspired and infallible Word of God that speaks with final authority concerning truth, morality, and the proper conduct of mankind, is the sole and final source of all that we believe.",
    ref: "",
  },
];

function StatementOfFaith() {
  return (
    <>
      <Helmet>
        <title>Statement of Faith - Hope in Christ City Church</title>
        <meta name="description" content="Read our Statement of Faith covering our beliefs about God, Jesus, the Holy Spirit, the Bible, salvation, the church, and the end times." />
      </Helmet>

      <div className="foundation-page">
        <div className="foundation-page-overlay" />

        <div className="foundation-page-inner foundation-page-inner--wide">
          {/* Title */}
          <RevealOnScroll variant="fade-down">
            <div className="foundation-eyebrow">CHURCH FOUNDATION</div>
            <h1 className="foundation-title foundation-title--wide">
              <GradientText animate={true}>STATEMENT OF FAITH</GradientText>
            </h1>
            <hr className="foundation-divider" />
          </RevealOnScroll>

          {/* Articles grid */}
          <div className="foundation-grid">
            {articles.map((article, i) => (
              <RevealOnScroll key={article.title} variant="fade-up" delay={(i % 3) * 0.1}>
                <div className="foundation-grid-card">
                  <h2>{article.title}</h2>
                  <p>
                    {article.body}{" "}
                    {article.ref && (
                      <span className="foundation-ref">{article.ref}</span>
                    )}
                  </p>
                  {article.extra?.map((ex, j) => (
                    <p key={j}>
                      {ex.body}{" "}
                      <span className="foundation-ref">{ex.ref}</span>
                    </p>
                  ))}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default StatementOfFaith;
