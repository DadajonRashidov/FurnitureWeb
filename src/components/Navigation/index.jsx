import "./style.scss"
import Nav from "./Nav"
import Footer from "./Footer"
import Content from "./Content"
import PodContent from "./PodContent"
import Onthefooter from "./Onthefooter"
import OntheFooterFooter from "./pp"
import OntheFooterFooter2 from "./pp2"
function Navigation() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <Content />
      <PodContent />
      <OntheFooterFooter />
      < OntheFooterFooter2 />
      <Onthefooter />
      <div className="Footer">
        <Footer />
      </div>
    </>
  );
}

export default Navigation;