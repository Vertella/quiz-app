import { QuestionProvider } from "@/context/QuizContext";
import "@/styles/globals.css";
import Navbar from "../components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <QuestionProvider>
      <Navbar />
      <Component {...pageProps} />
    </QuestionProvider>
  );
}
