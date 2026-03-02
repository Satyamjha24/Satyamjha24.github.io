import { useEffect, useRef, useState } from "react";

const useScrollSpy = (sectionIds = []) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || "");
  const [visibleSections, setVisibleSections] = useState({});
  const refs = useRef({});

  const setRef = (id) => (el) => {
    refs.current[id] = el;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.15 }
    );

    Object.values(refs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    refs.current[id]?.scrollIntoView({ behavior: "smooth" });
  };

  return { activeSection, visibleSections, setRef, scrollToSection };
};

export default useScrollSpy;
