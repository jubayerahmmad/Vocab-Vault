import faq from "../../assets/faq.jpg";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
const FAQs = () => {
  return (
    <div className="mb-12">
      <h1 className="text-3xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h1>
      <div className="lg:flex gap-4 items-center rounded-lg border">
        <div className="p-4 lg:w-1/3">
          <img className="h-[500px] w-full rounded-lg" src={faq} alt="" />
        </div>
        <div className="w-full p-4 lg:w-2/3 font-semibold">
          <Accordion>
            <AccordionItem className="bg-cyan-50">
              <AccordionItemHeading className="text-2xl font-bold">
                <AccordionItemButton>What is Vocab Vault?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="animate__fadeInDown animate__animated">
                  Vocab Vault is an interactive web application designed to help
                  users learns Spanish vocabulary effectively. It offers lessons
                  categorized by difficulty: easy,medium and hard.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="bg-cyan-50">
              <AccordionItemHeading className="text-2xl font-bold">
                <AccordionItemButton>
                  How does Vocab Vault work?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="animate__fadeInDown animate__animated">
                  The app provides Spanish words along with their English
                  meanings, organized into lessons based on difficulty levels.
                  Users can progress through the lessons at their own pace.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="bg-cyan-50">
              <AccordionItemHeading className="text-2xl font-bold">
                <AccordionItemButton>
                  How many words are in each Lesson?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="animate__fadeInDown animate__animated">
                  Each lesson contains a curated set of commonly used Spanish
                  words tailored to its difficulty level.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="bg-cyan-50">
              <AccordionItemHeading className="text-2xl font-bold">
                <AccordionItemButton>
                  Is Vocab Vault free to use?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="animate__fadeInDown animate__animated">
                  Yes, Vocab Vault is completely free to use for all its
                  lessons.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="bg-cyan-50">
              <AccordionItemHeading className="text-2xl font-bold">
                <AccordionItemButton>Who is this app for?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="animate__fadeInDown animate__animated">
                  Vocab Vault is ideal for beginners to intermediate learners
                  looking to expand their Spanish vocabulary systematically
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="bg-cyan-50">
              <AccordionItemHeading className="text-2xl font-bold">
                <AccordionItemButton>
                  Do I need to create Account?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="animate__fadeInDown animate__animated">
                  Yes, you have to create an account to use Vocab Vault.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="bg-cyan-50">
              <AccordionItemHeading className="text-2xl font-bold">
                <AccordionItemButton>
                  How to Create Account?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="animate__fadeInDown animate__animated">
                  To create an account, simply click on the "Sign Up" button on
                  the app's homepage, fill in the required information, and
                  follow the prompts to complete the registration process.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
