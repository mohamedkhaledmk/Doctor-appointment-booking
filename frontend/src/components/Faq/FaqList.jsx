import { faqs } from "../../assets/data/faqs";
import FaqItem from "./FaqItem";
const FaqList = () => {
  return (
    <div>
      {faqs.map((faq) => (
        <FaqItem key={faq.id} faq={faq} />
      ))}
    </div>
  );
};

export default FaqList;
