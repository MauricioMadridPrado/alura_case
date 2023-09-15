import Link from "../src/components/Link";
import Head from "next/head";
export async function getServerSideProps() {
  const FAQ_API_URL =
    "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
  const faq = await fetch(FAQ_API_URL).then((respostaDoServidor) => {
    return respostaDoServidor.json().then((json) => {
      return json;
    });
  });
  return {
    props: { faq },
  };
}
export default function FAQPage({ faq }) {
  return (
    <div>
      <Head>
        <title>FAQ - Alura case campanha</title>
      </Head>
      <h1>Alura Cases - FAQ</h1>
      <Link href="/"> Ir para Home </Link>
      <ul>
        {faq.map(({ answer, question }) => {
          return (
            <article key={question}>
              <h1>{question}</h1>
              <p>{answer}</p>
            </article>
          );
        })}
      </ul>
    </div>
  );
}
