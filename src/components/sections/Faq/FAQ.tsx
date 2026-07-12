"use client";

import { Container } from "@/components/ui/Container/Container";
import { faqItems } from "@/data/faq";
import styles from "./FAQ.module.css";
import { useState } from "react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggleFAQ(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className={styles.faqSection}>
      <Container>
        <span className={styles.badge}>FAQ</span>

        <h3>Perguntas Frequentes</h3>

        <div className={styles.faqList}>
          {faqItems.map((faqItems, index) => (
            <div className={styles.faqItem} key={index}>
              <button
                className={styles.question}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faqItems.question}</span>

                <span>{openIndex === index ? "-" : "+"}</span>
              </button>

              {openIndex === index && (
                <div className={styles.answer}>
                  <p>{faqItems.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
2