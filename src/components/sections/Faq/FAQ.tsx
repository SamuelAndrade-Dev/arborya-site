import { Container } from "@/components/Ui/Container/Container";
import { faqItems } from "@/data/faq";

export function FAQ() {
  return (
    <section>
      <Container>
        <span>FAQ</span>

        <h2>Perguntas frequentes</h2>

        <div>
          {faqItems.map((item) => (
            <div key={item.question}>
              <h3>{item.question} </h3>

              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
