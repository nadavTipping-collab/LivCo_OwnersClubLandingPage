import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Button } from "./components/ui/button";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";
import livLogo from "figma:asset/6a9f2cd944bb8ae3a80be33982e10850dd6d030a.png";
import livUrban from "./assets/Liv_Urban_Hotel.jpg";
import livMackenzie from "./assets/Liv_Mackenzie_Hotel.jpg";
import livSuitesVillas from "./assets/Liv_Suites_Villas_Hotel.jpg";
import livCitySuite from "./assets/liv-the-city-suites-hotel2.jpg";
import carousel1 from "./assets/yogaandfun.jpg";
import carousel2 from "./assets/2F5A7979-2.jpg";
import carousel3 from "./assets/2F5A9556.jpg";
import carousel4 from "./assets/liveurban_photos_0073.jpg";
import carousel5 from "./assets/Carusel5.jpg";
import carousel6 from "./assets/Carusel6.jpg";
import carousel7 from "./assets/Carusel7.jpg";
import foodImage from "./assets/food.jpg";
import carousel8 from "./assets/Carusel8.jpg";
import love from "./assets/fonts/Love-Regular.otf";
import favicon from './assets/favicon/favicon.png';


const FadeInSection = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={
        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
      }
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

const HeroSection = () => {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setTextVisible(true), 500);
  }, []);

  return (
    <div className="relative w-full aspect-video overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center bg-black">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/-8hwjQ19d7c?autoplay=1&mute=1&loop=1&playlist=-8hwjQ19d7c&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          title="Liv Collection Hero Video"
          allow="autoplay; encrypted-media"
          style={{ pointerEvents: "none" }}
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="relative z-10 h-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            textVisible
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 30 }
          }
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-6 sm:top-8 md:top-12 left-4 sm:left-6 md:left-8 lg:left-16 text-white"
        >
          {/* Logo */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <img
              src={livLogo}
              alt="Liv Collection Logo"
              className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const IntroSection = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#F9F6F0]">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInSection>
          <h2
            className="text-4xl md:text-5xl mb-8 text-[#3E617F]"
            style={{ fontWeight: 300 }}
          >
            ברוכים הבאים הביתה
          </h2>
        </FadeInSection>
        <FadeInSection delay={0.2}>
          <div
            className="text-[#3E617F] space-y-6 leading-relaxed"
            dir="rtl"
          >
            <p>
              הגעתם לבית החדש שלכם בעולם האירוח – המקום שבו
              הנופש מתחבר אל הנכס שלכם. כבעלי הדירות של Liv
              Collection, אתם מוזמנים להצטרף לקהילה של אנשים
              שאוהבים לחיות טוב, לנוח ולחוות רגעים שנשארים אתכם
              הרבה אחרי שחוזרים הביתה.
            </p>
            <p>
              כאן תוכלו להזמין חופשות במתחמי הרשת – עם הנחה
              קבועה ובלעדית בכל הזמנה, בכל מלון, בכל זמן.
            </p>
            <p>
              כל חופשה שלכם יכולה להפוך לחוויה מלאה – תוכלו
              להוסיף להזמנה ארוחת בוקר עשירה, להזמין העברות
              נוחות משדה התעופה ואליו, או לשדרג את השהות עם אחת
              החוויות הייחודיות שלנו.
            </p>
            <p>
              אחת מהחוויות המשמעותיות היא סיור חווייתי לבעלי
              הדירות של Liv Collection – סיור שמזמין אתכם להכיר
              מקרוב את קפריסין דרך עיניים מקומיות. הסיור יספק
              היכרות עם האי, עם הצוות, ועם הערכים שמאחורי המותג.
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

const HotelCard = ({
  image,
  title,
  delay,
  link,
}: {
  image: string;
  title: string;
  delay: number;
  link: string;
}) => {
  return (
    <FadeInSection delay={delay}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative overflow-hidden rounded-lg aspect-[4/5] cursor-pointer block"
      >
      <div className="group relative overflow-hidden rounded-lg aspect-[4/5] cursor-pointer">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <div
          className="absolute bottom-0 left-0 right-0 p-6 text-white"
          dir="rtl"
        >
          <h3
            className="text-2xl mb-4"
            style={{ fontWeight: 300 }}
          >
            {title}
          </h3>
          <Button className="bg-[#D46737] hover:bg-[#B85530] text-white transition-all group/btn border-none cursor-pointer">
            <span>להזמנה לחץ כאן</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:-translate-x-1" />
          </Button>
        </div>
      </div>
      </a>
    </FadeInSection>
  );
};

const HotelHighlights = () => {
  const hotels = [
    {
      title: "Liv Urban",
      image: livUrban,
      link: "https://liv.reserve-online.net/property/LIVCOLLECT"
    },
    {
      title: "Liv Mackenzie",
      image: livMackenzie,
      link: "https://liv.reserve-online.net/property/LIVMACKENZ"
    },
    {
      title: "Liv Suites&Villas",
      image: livSuitesVillas,
      link: "https://liv.reserve-online.net/property/LIVCOLTD"
    },
    {
      title: "Liv The City Suites",
      image: livCitySuite,
      link: "https://liv.reserve-online.net/property/LIVTHECITY"
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {hotels.map((hotel, index) => (
            <HotelCard
              key={hotel.title}
              title={hotel.title}
              image={hotel.image}
              link={hotel.link}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <h2
            className="text-4xl md:text-5xl mb-12 text-center text-[#3E617F]"
            style={{ fontWeight: 300 }}
          >
            סיור הכרות – בואו לגלות את לרנקה
          </h2>
        </FadeInSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeInSection delay={0.2}>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1645187160613-0e8c496cb4a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXJuYWNhJTIwY3lwcnVzJTIwY2h1cmNofGVufDF8fHx8MTc2Mjc4MTc1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Larnaca Church"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src={foodImage}
                    alt="Cyprus Coastal City"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection delay={0.3}>
            <div className="text-[#3E617F] space-y-6" dir="rtl">
              <p className="leading-relaxed">
                כחברי קהילת Liv Collection, אתם מוזמינו לסיור
                חווייתי בלרנקה – חוויה בת 3-4 שעות בימי שישי
                (10:00–14:00).
              </p>

              <div className="space-y-4">
                <p className="leading-relaxed">
                  מהלך הסיור תיהנו מ:
                </p>
                <ul dir="rtl" className="mr-6 space-y-3 text-right text-[#3E617F] leading-8">
                  <li>
                    <span className="text-[#D46737] mr-3 inline-block">◆</span>
                     &nbsp;ביקור בפינות הקסומות של לרנקה וטעימה מחיי המקום. 
                  </li>

                  <li>
                    <span className="text-[#D46737] mr-3 inline-block">◆</span>
                   &nbsp;היכרות עם הנכסים ומתחמי האירוח של הרשת, כולל פרויקט The Valley החדש.
                    סוף סוף תוכלו לראות את הנוף מהמרפסת בדירה שלכם.
                  </li>

                  <li>
                    <span className="text-[#D46737] mr-3 inline-block">◆</span>
                    &nbsp;טעימות אוכל ושתייה באווירה חמה ואותנטית.
                  </li>

                  <li>
                    <span className="text-[#D46737] mr-3 inline-block">◆</span>
                    &nbsp;ליווי מקצועי מבית Liv Collection.
                  </li>
                </ul>



              </div>

              <div className="bg-[#F9F6F0] p-6 rounded-lg">
                <p className="mb-4">
                  <span className="text-[#D46737]">מחיר:</span>{" "}
                  €80 לאדם / €160 לזוג
                </p>
                <p className="text-sm opacity-80">
                  ניתן להוסיף את הסיור בעת ההזמנה.
                </p>
              </div>              
              <a
                href="https://liv.reserve-online.net/about"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#D46737] hover:bg-[#B85530] text-white w-full md:w-auto px-8 py-6 cursor-pointer">
                  להזמנת מלון
                </Button>
              </a>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};


const AboutSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    carousel1, carousel2, carousel3, carousel4, carousel5, carousel7, carousel8
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prev) => (prev + 1) % carouselImages.length,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <section className="py-24 px-4 md:px-8 bg-[#F9F6F0]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeInSection>
            <div className="space-y-6 text-[#3E617F]" dir="rtl">
              <h2
                className="text-4xl md:text-5xl mb-8"
                style={{ fontWeight: 300 }}
              >
                אודות Liv Collection
              </h2>
              <p className="leading-relaxed">
                Liv Collection הוקמה מתוך חזון ליצור חוויה אחרת
                של נופש– כזו שמרגישה כמו בית. השם LIV לא נבחר
                במקרה: הוא מגלם את האמונה שלנו שכל רגע הוא
                הזדמנות לחיות, לנשום, להרגיש.
              </p>
              <p className="leading-relaxed">
                בכל שהות אנחנו מבקשים לייצר עבורכם רגעים של נחת,
                כוס קפה מול הים, חיוך מהצוות, או חדר שמעוצב
                ומאובזר בדיוק בשבילכם.
              </p>
              <p className="leading-relaxed">
                ב-Liv Collection אתם לא רק אורחים אתם חלק ממשפחה
                של בעלי דירות ואורחים שחיים את הערכים שלנו.
              </p>
              <p className="leading-relaxed">
                אנו מזמינים אתכם, לגלות ולחוות את האיים הקסומים
                שלנו דרך קהילה אחת חמה שמחברת בין כולם.
              </p>
            </div>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <div className="rounded-lg overflow-hidden aspect-[4/3] relative">
              {carouselImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity:
                      currentImageIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <ImageWithFallback
                    src={image}
                    alt={`Liv Collection ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}

              {/* Carousel dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentImageIndex === index
                        ? "bg-white w-8"
                        : "bg-white/50"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#3E617F] text-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <div
              className="text-2xl mb-2"
              style={{
                fontWeight: 300,
                letterSpacing: "0.1em",
                fontFamily: "Love, sans-serif",
              }}
            >
              LIV COLLECTION
            </div>
            <p className="text-sm opacity-80">Owners Club</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-8 text-sm">
            <a
              href="#"
              className="hover:text-[#D46737] transition-colors"
            >
              Home
            </a>
            <a
              href="https://www.livcollections.com"
              className="hover:text-[#D46737] transition-colors"
            >
              LivCollection.com
            </a>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm opacity-70">
          <p>
            Copyright © {new Date().getFullYear()} Liv
            Collection. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <HeroSection />
      <IntroSection />
      <HotelHighlights />
      <ExperienceSection />
      <AboutSection />
      <Footer />
    </div>
  );
}