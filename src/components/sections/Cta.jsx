import Button from "../interactives/Button";
import content from "../../content/content";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import Paralaxe from "../../assets/imgs/paralaxe/bgParalaxe.webp";

export default function Cta({ colorMode = "default" }) {
  const navigate = useNavigate();

  const bgImageUrl = Paralaxe;
  const bgClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-black",
  };
  const textClass = bgClasses[colorMode] || bgClasses.default;

  return (
    <div
      className="relative bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      {/* Camada opaca */}
      <div className="absolute inset-0 bg-black opacity-50 z-0" />

      {/* Conteúdo */}
      <SectionArea className="relative z-10">
        <SectionWrapper>
          <SectionHeader
            className={`text-center ${textClass}`}
            miniTitle={content.texts.cta.miniTag}
            sectionHeaderTitle={content.texts.cta.title}
            sectionHeaderSubtitle={content.texts.cta.subtitle}
            titleColorSet="text-white"
            subtitleColorSet="text-white"
          />
          <Button
            aria-label={content.texts.hero.ctaButtonAriaLabel}
            label={content.texts.cta.ctaButtonText}
            animation
            icon={<FaWhatsapp size={24} />}
          />
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}
