"use client";

import {
    useState,
    useRef,
    useEffect
} from "react";
import {
    motion,
    useMotionValue
} from "framer-motion";
import {
    XIcon
} from "lucide-react";
import clsx from "clsx";

const DRAG_BUFFER = 50;
const AUTO_DELAY = 10000;

type SwipeSliderProps = {
  src: string[];
  startIndex?: number;
  isClosed: boolean;
  setToClosed: (type: boolean) => void;
  className?: string;
};

const SwipeSlider = ({
    src,
    startIndex = 0,
    isClosed,
    setToClosed,
    className,
} : SwipeSliderProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(startIndex);
  const dragX = useMotionValue<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);

  // Aktualizace šířky slidu při mountu + resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setSlideWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Automatický posun (jen když není taženo)
  useEffect(() => {
    const timer = setInterval(() => {
      if (Math.abs(dragX.get()) < 10) {
        setActiveIndex((prev) => (prev + 1) % src.length);
      }
    }, AUTO_DELAY);

    return () => clearInterval(timer);
  }, [src.length]);

  const onDragEnd = () => {
    const currentX = dragX.get();
    const threshold = slideWidth * 0.25; // 25 % šířky slidu

    if (currentX < -threshold) {
      setActiveIndex((prev) => (prev + 1) % src.length);
    } else if (currentX > threshold) {
      setActiveIndex((prev) => (prev - 1 + src.length) % src.length);
    }

    // plynulé vrácení na 0 (snap)
    dragX.set(0);
  };

  return (
    <div
      ref={containerRef}
      className={clsx(
        className,
        "fixed inset-0 z-[100] bg-black/90 flex justify-center items-center overflow-hidden"
      )}
    >
      <div className="relative w-screen max-w-7xl h-[85vh] md:h-[90vh] mx-auto">
        <motion.div
          className="flex items-center h-full"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.25}
          style={{ x: dragX }}
          animate={{ x: -activeIndex * slideWidth }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 35,
            mass: 2,
          }}
          onDragEnd={onDragEnd}
        >
          {src.map((url, idx) => (
            <motion.div
              key={url}
              className="shrink-0 h-full w-full flex justify-center items-center"
              style={{ width: slideWidth || "100vw" }}
              animate={{
                scale: idx === activeIndex ? 1 : 0.92,
                opacity: idx === activeIndex ? 1 : 0.75,
              }}
              transition={{

              }}
            >
                <div
                className="w-full h-full bg-cover bg-center rounded-xl shadow-2xl cursor-grab active:cursor-grabbing"
                style={{ backgroundImage: `url(${url})` }}/>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigační tečky + zavřít */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center gap-3 z-[30]">
          {src.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={clsx(
                "w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ease-in-out",
                i === activeIndex
                  ? "bg-[#270c86] scale-125 shadow-lg"
                  : "bg-[#c72026] hover:bg-white/70"
              )}
            />
          ))}
        </div>
        <button
          onClick={() => setToClosed(true)} // nebo zavolat prop onClose
          className="border-none bg-transparent absolute top-6 right-6 text-white text-4xl font-light z-[50] cursor-pointer transition-colors duration-300 ease-in-out"
        >
          <XIcon />
        </button>
      </div>
    </div>
  );
};

export default SwipeSlider;