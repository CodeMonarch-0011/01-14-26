import { Banner } from "../components/home/banner";
import { Biography } from "../components/home/biography";
import { Rise } from "../components/home/rise";
import { FilmWork } from "../components/home/career-highlights.jsx";
import { Philosophy } from "../components/home/philosophy.jsx";
import { Legacy } from "../components/home/legacy";
import { LookingAhead } from "../components/home/looking-ahead";
import { PersonalLife } from "../components/home/personal-life";
import { Evolution } from "../components/home/evolution.jsx";
import { ContactContextFunction } from "../context/contact.jsx";
import { ContactPopup } from "../components/ui/contact-popup.jsx";
import "../styles/home.css";
import { MessageQueue } from "../components/general/message-queue.jsx";
import { SliderContextFunction } from "../context/slider.jsx";
import { Slider } from "../components/general/slider.jsx";
import { CreativeStyle } from "../components/home/creative-style.jsx";

export default function Page() {
  const { isOpen } = ContactContextFunction();
  const { isOpen: sliderOpen } = SliderContextFunction();

  return (
    <section className="home-page">
      <Banner />
      <Biography />
      <Rise />
      <Evolution />
      <CreativeStyle />
      <FilmWork />
      <PersonalLife />
      <Philosophy />
      <Legacy />
      <LookingAhead />

      {isOpen && <ContactPopup />}
      <MessageQueue />
      {sliderOpen && <Slider />}
    </section>
  );
}
