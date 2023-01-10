import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Navbar from "../components/shared/Navbar";
import "../styles/globals.css";

const AppWrapper = ({ children }) => {
  return (
    <div className="mx-auto w-full sm:w-[50vw] max-w-[450px] max-h-[900px] bg-neutral-900 h-full relative flex flex-col text-white">
      <main className="h-[91vh] overflow-y-scroll px-[4%] py-[4%]">{children}</main>
      <Navbar className="h-[9vh]" />
    </div>
  );
};

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AppWrapper>
      <AnimatePresence wait={true} initial={false}>
        <motion.div
          key={router.pathname}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 0.5,
          }}
          variants={{
            initialState: { opacity: 0 },
            animateState: { opacity: 1 },
            // exitState: { opacity: 0 },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </AppWrapper>
  );
}
