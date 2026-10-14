import rodrigoImg from "@/assets/rodrigo-testimonial.webp";
import julianaImg from "@/assets/juliana-testimonial.webp";
import diegoImg from "@/assets/diego-testimonial.webp";
import carlaImg from "@/assets/carla-testimonial.webp";
import brunoImg from "@/assets/bruno-testimonial.webp";
import marinaImg from "@/assets/marina-testimonial.webp";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Check, Clock3, Gift, LockKeyhole, ShieldCheck, Sparkles, X } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import heroDesktop from "@/assets/site-images/hero-neon-gym.webp";
import heroMobile from "@/assets/site-images/hero-neon-gym-mobile.webp";
import logo from "@/assets/site-images/alonga-logo.webp";
const activation = "/media/ativacao-nova.webp";
const challenge = "/media/desafios-nova.webp";
const mobility = "/media/mobilidade-nova.webp";
const instructor = "/media/gabriela-mello.webp";
import guarantee from "@/assets/site-images/garantia-selo.webp";
import foodCover from "@/assets/site-images/alimentos-capa.webp";
import recoveryCover from "@/assets/site-images/recuperacao-capa.webp";
import avatarRafael from "@/assets/hero-avatars/rafael.webp";
import avatarJuliana from "@/assets/hero-avatars/juliana.webp";
import avatarCarla from "@/assets/hero-avatars/carla.webp";
import avatarThiago from "@/assets/hero-avatars/thiago.webp";
import printRafael from "@/assets/site-images/wpp-rafael.webp";
import printMariana from "@/assets/site-images/wpp-mariana.webp";
import printLucas from "@/assets/site-images/wpp-lucas.webp";
import printJuliana from "@/assets/site-images/wpp-juliana.webp";
import printRenata from "@/assets/site-images/wpp-renata.webp";
import printDiego from "@/assets/site-images/wpp-diego.webp";

// The uploaded page has one legacy checkout. New plan URLs must be confirmed
// independently: sending both products to that checkout can charge the wrong price.
const CHECKOUTS: Record<string, string | null> = { essencial: "https://pay.kiwify.com.br/x2jt0v6", completo: "https://pay.kiwify.com.br/Km9T9Sz", especial: "https://pay.kiwify.com.br/ZqYS7Pr" };
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alonga+ | Seu corpo com mais liberdade" },
      { name: "description", content: "Mobilidade e flexibilidade com rotinas de 10 a 15 minutos. Conheça o Método Alonga+, os planos Essencial e Completo e os 2 bônus exclusivos." },
      { property: "og:title", content: "Alonga+ | Seu corpo com mais liberdade" },
      { property: "og:description", content: "Conheça o Método Alonga+ e encontre a rotina de mobilidade e flexibilidade para você." },
      { property: "og:image", content: "https://quick-sell-designs.lovable.app/og-image.png" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://alonga-modelo.nexofit.chatgpt.site/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://quick-sell-designs.lovable.app/og-image.png" },
    ],
    links: [
      { rel: "preload", as: "image", href: heroMobile, media: "(max-width: 767px)", type: "image/webp", fetchPriority: "high" },
      { rel: "preload", as: "image", href: heroDesktop, media: "(min-width: 768px)", type: "image/webp", fetchPriority: "high" },
    ],
  }),
  component: LandingPage,
});

const testimonials = [
  { src: printRafael, name: "Rafael T." }, { src: printMariana, name: "Mariana Souza" },
  { src: printLucas, name: "Lucas Ferreira" }, { src: printJuliana, name: "Juliana M." },
  { src: printRenata, name: "Renata Albuquerque" }, { src: printDiego, name: "Diego Nascimento" },
];
const modules = [
  { id: "03", title: "Alongamento e Mobilidade", label: "GANHE LIBERDADE", img: mobility, alt: "Do jeito certo — alongamento e mobilidade", text: "Alongamento e mobilidade da cervical aos tornozelos, passando por ombros, coluna, quadril e joelhos. Mais de 70 variações distribuídas no método completo.", tags: ["Flexibilidade", "Amplitude"] },
  { id: "01", title: "Ativação", label: "PREPARE SEU CORPO", img: activation, alt: "Ative — preparação do corpo", text: "Módulos de ativação para o corpo todo. Prepare o movimento antes do alongamento e avance a partir do seu nível atual.", tags: ["Preparação", "Corpo inteiro"] },
  { id: "02", title: "Desafios", label: "EVOLUA NO SEU RITMO", img: challenge, alt: "Supere seus limites — desafios de alongamento", text: "Sequências progressivas para acompanhar sua evolução, criar consistência e levar a mobilidade para os movimentos do dia a dia e do treino.", tags: ["Progressão", "Consistência"] },
];
const depoimentos = [
  {
    nome: "Rodrigo M. - 38 anos",
    texto:
      "Em 3 semanas consegui finalmente fazer o agachamento profundo sem dor no quadril. Parece que destravou um nó que eu tinha há anos.",
    foto: rodrigoImg,
  },
  {
    nome: "Juliana C. - 32 anos",
    texto:
      "Minhas dores no joelho sumiram. Consigo brincar com meus filhos no chão sem gemer pra levantar. O método é direto ao ponto, sem enrolação.",
    foto: julianaImg,
  },
  {
    nome: "Diego A. - 27 anos",
    texto:
      "Passo o dia sentado no computador e vivia com o pescoço travado. Melhor investimento de R$69,90 que já fiz.",
    foto: diegoImg,
  },
  {
    nome: "Carla R. - 45 anos",
    texto:
      "Achei que na minha idade não ia mais melhorar. Em 4 semanas voltei a agachar pra pegar coisa no chão sem apoiar no joelho.",
    foto: carlaImg,
  },
  {
    nome: "Bruno T. - 36 anos",
    texto:
      "Tinha rigidez horrível ao acordar. Hoje levanto da cama e o corpo já responde. Os vídeos são curtos e práticos.",
    foto: brunoImg,
  },
  {
    nome: "Marina L. - 41 anos",
    texto:
      "Achei que sabia alongar. Estava muito enganada. Ganhei amplitude que não tinha nem na adolescência.",
    foto: marinaImg,
  },
];


const faqs = [
  { q: "Preciso ser flexível para começar?", a: "Não. O Alonga+ é para quem sente o corpo rígido e quer começar a se mover melhor. As rotinas partem do seu nível atual. Nos dois planos, você encontra o curso Alonga+ com progressões do iniciante ao avançado." },
  { q: "Qual é a diferença entre o Essencial e o Completo?", a: "Os dois planos incluem o curso completo Alonga+, com 15 módulos, mais de 70 exercícios e acesso à nossa comunidade no WhatsApp. O Completo inclui também 2 bônus: Alimentos que Melhoram a Flexibilidade e Recuperação Pós-Alongamento Pesado. A diferença entre os planos é de R$ 30,00." },
  { q: "Quanto tempo por dia preciso dedicar?", a: "As rotinas duram de 10 a 15 minutos e podem entrar na sua rotina em casa ou junto dos seus treinos. A proposta é uma prática progressiva e consistente, respeitando os seus limites." },
  { q: "Serve para quem treina ou passa o dia sentado?", a: "Você pode usar as rotinas para desenvolver a mobilidade para o dia a dia e para atividades como musculação, corrida, CrossFit e lutas. Não precisa ser atleta para começar." },
  { q: "Como recebo e acesso as aulas?", a: "Depois da confirmação da compra, o acesso é enviado ao e-mail usado no pagamento. As aulas ficam na área de membros da Cakto e podem ser acessadas pelo navegador no celular ou no computador. Confira também as pastas de spam e promoções." },
  { q: "E se eu perceber que não é para mim?", a: "Você tem 7 dias de garantia para solicitar o reembolso de 100% do valor pago. A página também mantém a garantia adicional apresentada abaixo, condicionada à comprovação da prática." },
];

function Countdown() {
  const [seconds, setSeconds] = useState(900);
  useEffect(() => {
    const deadline = Date.now() + 900000;
    const tick = () => setSeconds(Math.max(0, Math.ceil((deadline - Date.now()) / 1000)));
    tick();
    const timer = window.setInterval(tick, 1000);
    return () => window.clearInterval(timer);
  }, []);
  return <div className="announcement">
    <span className="announcement-copy">{seconds > 0 ? "OFERTA EXPIRA EM" : "CONHEÇA OS PLANOS ALONGA+"}</span>
    {<div className="countdown-boxes" aria-label={`${Math.floor(seconds / 60)} minutos e ${seconds % 60} segundos`}><div><b>{String(Math.floor(seconds / 60)).padStart(2, "0")}</b><span>MIN</span></div><strong aria-hidden="true">:</strong><div><b>{String(seconds % 60).padStart(2, "0")}</b><span>SEG</span></div></div>}
  </div>;
}

function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0, last = 0, position = el.scrollLeft, pauseUntil = 0, visible = false;
    const animate = (time: number) => {
      const delta = last ? Math.min(time - last, 60) : 0;
      last = time;
      const first = el.children[0] as HTMLElement | undefined;
      const duplicate = el.children[testimonials.length] as HTMLElement | undefined;
      const length = first && duplicate ? duplicate.offsetLeft - first.offsetLeft : 0;
      if (Math.abs(position - el.scrollLeft) > 2) position = el.scrollLeft;
      if (time > pauseUntil && !el.matches(":hover, :focus-within") && length > 0) {
        position += delta * 0.027;
        if (position >= length) position -= length;
        el.scrollLeft = position;
      }
      if (visible) frame = requestAnimationFrame(animate);
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) { last = 0; cancelAnimationFrame(frame); frame = requestAnimationFrame(animate); }
      else cancelAnimationFrame(frame);
    }, {rootMargin: "150px 0px"});
    observer.observe(el);
    const pause = () => { pauseUntil = performance.now() + 3500; };
    const events = ["pointerdown", "touchstart", "touchmove", "wheel", "keydown"] as const;
    events.forEach(event => el.addEventListener(event, pause, {passive:true}));
    return () => { observer.disconnect(); cancelAnimationFrame(frame); events.forEach(event => el.removeEventListener(event, pause)); };
  }, []);
  return <section className="section shade testimonials" id="resultados">
    <div className="container section-heading"><span className="eyebrow">QUEM JÁ COMEÇOU</span><h2>Veja o que estão dizendo<br/>sobre o <span className="underline-lime">Alonga+.</span></h2><p>Histórias de quem colocou o movimento na rotina.</p></div>
    <div className="testimonial-track" ref={ref} tabIndex={0} role="region" aria-label="Depoimentos de alunos. Use as setas do teclado ou deslize para navegar.">
      {[...testimonials, ...testimonials].map((item, index) => <figure className="testimonial" key={`${item.name}-${index}`} aria-hidden={index >= testimonials.length}>
        <img src={item.src} alt={index >= testimonials.length ? "" : `Mensagem de ${item.name} sobre o Alonga+`} loading="lazy" decoding="async" width="620" height="1101"/>
        <figcaption><span>{item.name}</span><span className="testimonial-check"><Check size={14}/>Aluno Alonga+</span></figcaption>
      </figure>)}
    </div>
    <p className="results-note">Experiências individuais. A evolução depende da prática e das condições de cada pessoa.</p>
  </section>;
}

function LandingPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [specialOpen, setSpecialOpen] = useState(false);
  const checkout = (plan: string) => {
    const url = CHECKOUTS[plan];
    if (url) window.location.assign(url);
    else setSelectedPlan(plan);
  };
  const choose = (plan: string) => {
    if (plan === "essencial") setSpecialOpen(true);
    else checkout(plan);
  };
  return <>
    <a href="#conteudo" className="skip-link">Ir para o conteúdo</a>
    <Countdown/>
    <main id="conteudo">
      <header className="hero">
        <picture className="hero-art"><source media="(max-width:767px)" srcSet={heroMobile}/><img src={heroDesktop} width="1983" height="793" alt="Alonga+: prática de alongamento com abertura de pernas" fetchPriority="high" loading="eager"/></picture>
        <div className="container hero-copy">
          <span className="eyebrow">SEU CORPO TEM MAIS PARA VIVER</span>
          <h1>MAIS FLEXIBILIDADE E MOBILIDADE EM <span className="highlight">10 A 15 MINUTOS</span> POR DIA</h1>
          <p>Destrave seu corpo com o <strong>Método Alonga+</strong>: ativação, alongamento e mobilidade na sequência certa, mesmo que você se sinta travado hoje.</p>
          <a className="button button-lime hero-cta" href="#oferta">QUERO DESTRAVAR MEU CORPO</a>
          <div className="hero-proof"><div className="avatars">{[avatarRafael,avatarJuliana,avatarCarla,avatarThiago].map((src,i)=><img key={src} src={src} width="36" height="36" alt=""/>)}</div><div><span className="stars" aria-label="Cinco estrelas">★★★★★</span><span>Uma comunidade em movimento</span></div></div>
          <div className="hero-assurances"><span><Clock3/>Rotinas curtas</span><span><ShieldCheck/>7 dias de garantia</span></div>
        </div>
      </header>
      <Testimonials/>
      <section className="section" id="modulos">
        <div className="container">
          <div className="section-heading"><span className="eyebrow">POR DENTRO DO MÉTODO</span><h2>Tudo que você vai receber<br/>para melhorar sua <span className="underline-lime">flexibilidade.</span></h2></div>
          <div className="course-numbers"><div><strong>15</strong><span>Módulos completos</span></div><div><strong>+70</strong><span>Variações de exercícios</span></div><div><strong>10 a 15</strong><span>Minutos por dia</span></div><div><strong>Todos</strong><span>Do iniciante ao avançado</span></div></div>
          <h3 className="modules-heading">MÓDULOS DE:</h3>
          <div className="module-grid">{modules.map(m=><article className="module-card" key={m.id}>
            <div className="module-cover"><img src={m.img} alt={m.alt} width="1254" height="1254" loading="lazy" decoding="async"/></div>
            <div className="module-body"><h3>{m.title}</h3><Accordion type="single" collapsible><AccordionItem value={m.id} className="module-accordion"><AccordionTrigger>O que você vai praticar</AccordionTrigger><AccordionContent><p>{m.text}</p><div className="tags">{m.tags.map(tag=><span key={tag}>{tag}</span>)}</div></AccordionContent></AccordionItem></Accordion></div>
          </article>)}</div>
        </div>
      </section>
      <section className="section shade" id="bonus"><div className="container">
        <div className="section-heading bonus-intro"><h2>O Método <span className="highlight">ALONGA+</span> já te entrega tudo o que você precisa pra melhorar sua flexibilidade.</h2><svg className="bonus-intro-arrow" viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M12 3v18m-7-7 7 7 7-7"/></svg><p>Mas se você quiser <strong className="underline-lime">TURBINAR seus resultados</strong>, no plano completo do ALONGA+ você recebe como bônus:</p><span className="bonus-count">2 BÔNUS EXCLUSIVOS NO COMPLETO</span></div>
        <div className="bonus-grid">
          <article className="bonus-card premium-bonus"><div className="bonus-ribbon"><Gift/>BÔNUS 1 · EXCLUSIVO DO COMPLETO</div><div className="bonus-cover bonus-food"><img src={foodCover} alt="Alimentos que melhoram a flexibilidade — capa do material" width="1254" height="1254" loading="lazy" decoding="async"/></div><div className="bonus-body"><span className="bonus-label">UM PRESENTE PARA SUA EVOLUÇÃO</span><h3>Alimentos que melhoram a flexibilidade</h3><p>Material complementar sobre alimentação para acompanhar sua rotina de movimento.</p><span className="included">Você ganha no Alonga+ Completo</span></div></article>
          <article className="bonus-card premium-bonus"><div className="bonus-ribbon"><Gift/>BÔNUS 2 · EXCLUSIVO DO COMPLETO</div><div className="bonus-cover bonus-recovery"><img src={recoveryCover} alt="Recuperação pós-alongamento pesado — capa do material" width="1254" height="1254" loading="lazy" decoding="async"/></div><div className="bonus-body"><span className="bonus-label">UM PRESENTE PARA SUA EVOLUÇÃO</span><h3>Recuperação pós-alongamento pesado</h3><p>Um material dedicado ao cuidado e à recuperação depois das práticas mais intensas.</p><span className="included">Você ganha no Alonga+ Completo</span></div></article>
        </div>
      </div></section>
      <section className="section instructor-section" id="sobre"><div className="container instructor-grid">
        <div className="section-heading instructor-heading"><span className="eyebrow">SUA GUIA NESSA JORNADA</span><h2>Quem criou<br/>o <span className="underline-lime">método Alonga+.</span></h2></div>
        <div className="instructor-portrait"><div className="instructor-image"><img src={instructor} width="1080" height="1920" alt="Gabriela Mello em sua trajetória no taekwondo e na fisioterapia" loading="lazy" decoding="async"/><div className="instructor-caption"><strong>11 anos</strong><span>no alto rendimento</span></div></div><h3 className="instructor-name">Dra. Gabriela Mello</h3></div>
        <div className="instructor-copy"><p className="credentials">Fisioterapeuta, quiropraxista e ex-atleta profissional de taekwondo.</p><p>Foram 11 anos no alto rendimento, representando a seleção brasileira em Pan-Americano, Mundial Universitário e competições em vários países.</p><p>“Eu sei o que é cobrar o corpo no limite, travar, sentir dor e precisar voltar a confiar no próprio corpo.”</p><div className="instructor-promise">Rotinas certas. Progressão na medida.<br/><strong>Mais liberdade para o seu corpo.</strong></div></div>
      </div></section>
      <section className="section recap-section" aria-labelledby="recap-title"><div className="container recap-container">
        <div className="section-heading"><span className="eyebrow">DENTRO DO ALONGA+ COMPLETO</span><h2 id="recap-title">Recapitulando tudo<br/>o que você <span className="underline-lime">vai receber.</span></h2></div>
        <div className="recap-table-heading"><span>Conteúdo incluído</span><span>Valor estimado</span></div>
        <div className="recap-list">
          {[["Curso Alonga+ completo", "15 módulos e mais de 70 exercícios", "197,00"], ["Bônus 1 — Alimentos que melhoram a flexibilidade", "Material complementar de alimentação", "47,00"], ["Bônus 2 — Recuperação pós-alongamento pesado", "Material complementar de recuperação", "47,00"]].map(([title, detail, value]) => <div className="recap-row" key={title}><Check/><div><strong>{title}</strong><span>{detail}</span></div><s>R$ {value}</s></div>)}
        </div>
        <div className="recap-extras"><span><Check/>Comunidade no WhatsApp</span></div>
        <div className="recap-total"><strong>Valor estimado dos conteúdos</strong><s>R$ 291,00</s></div>
        <a className="recap-price recap-offer-link" href="#oferta"><strong>Mas HOJE você recebe uma oferta especial</strong><svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 4v16m-6-6 6 6 6-6"/></svg></a>
      </div></section>
      <section className="section offer-section" id="oferta"><div className="container">
        <div className="section-heading"><span className="eyebrow">QUAL É SEU PRÓXIMO PASSO?</span><h2>O curso Alonga+ ou<br/>a <span className="underline-lime">experiência completa?</span></h2><p>Escolha a opção que faz sentido para o seu objetivo.</p></div>
        <div className="plans">
          <article className="plan plan-basic"><div className="plan-heading"><span className="plan-category">O CURSO ALONGA+ COMPLETO</span><h3>Alonga+ Essencial</h3><p>O método completo para evoluir com o corpo inteiro.</p></div><span className="you-get">Você recebe:</span><ul className="feature-list"><li><Check/><span><strong>Curso Alonga+ completo</strong><small>15 módulos e mais de 70 exercícios</small></span></li><li><Check/>Progressões do iniciante ao avançado</li><li><Check/>Rotinas de 10 a 15 minutos</li><li><Check/>Comunidade no WhatsApp</li><li><Check/>Garantia de 7 dias</li></ul><ul className="feature-list exclusions"><li><X/>Bônus de materiais complementares</li></ul><div className="plan-bottom"><p className="estimated-price">Valor estimado dos conteúdos <s>R$ 197,00</s></p><span className="price-now">Hoje por</span><div className="price"><span className="currency">R$</span><strong>49<span>,90</span></strong></div><p className="payment-note">à vista · pagamento único</p><button className="button button-dark" onClick={()=>choose("essencial")}>ESCOLHER ESSENCIAL</button><span className="secure"><LockKeyhole/>Garantia de 7 dias</span></div></article>
          <article className="plan plan-complete"><div className="recommended"><Sparkles size={16}/>A EXPERIÊNCIA COMPLETA</div><div className="plan-heading"><span className="plan-category">DO INICIANTE AO AVANÇADO</span><h3>Alonga+ Completo</h3><p>O curso Alonga+ completo e 2 bônus exclusivos para sua evolução.</p></div><span className="you-get">Você recebe:</span><ul className="feature-list complete-products"><li><Check/><span><strong>Curso Alonga+ completo</strong><small>15 módulos e mais de 70 exercícios</small></span></li><li><Check/><span><strong><span className="offer-bonus-label">BÔNUS 1</span>🎁 Alimentos que melhoram a flexibilidade</strong><small>Material complementar de alimentação</small></span></li><li><Check/><span><strong><span className="offer-bonus-label">BÔNUS 2</span>🎁 Recuperação pós-alongamento pesado</strong><small>Material complementar de recuperação</small></span></li></ul><ul className="feature-list"><li><Check/>Rotinas de 10 a 15 minutos</li><li><Check/>Progressões do iniciante ao avançado</li><li><Check/>Atualizações gratuitas</li><li><Check/>Comunidade no WhatsApp</li><li><Check/>Garantia de 7 dias</li></ul><div className="plan-bottom"><p className="estimated-price">Valor estimado dos conteúdos <s>R$ 291,00</s></p><span className="price-now">Hoje por</span><div className="price"><span className="currency">R$</span><strong>79<span>,90</span></strong></div><p className="payment-note">à vista · pagamento único</p><div className="price-difference">Toda essa evolução por <strong>R$ 30 a mais.</strong></div><a className="button button-lime" href={CHECKOUTS.completo!}>QUERO O ALONGA+ COMPLETO</a><span className="secure"><LockKeyhole/>Garantia de 7 dias</span></div></article>
        </div>
      </div></section>
      <section className="section shade original-reviews" aria-labelledby="original-reviews-title"><div className="container">
        <div className="section-heading"><h2 id="original-reviews-title">RESULTADOS DE VERDADE</h2><div className="hero-proof"><div className="avatars">{depoimentos.slice(0,5).map(d=><img key={d.nome} src={d.foto} width="36" height="36" alt="" loading="lazy"/>)}</div><div><span className="stars" aria-label="Cinco estrelas">★★★★★</span><span>4,9/5 · +5 MIL ALUNOS</span></div></div></div>
        <div className="original-reviews-grid">{depoimentos.map(d=><figure className="original-review" key={d.nome}><div className="stars" aria-label="Cinco estrelas">★★★★★</div><blockquote>“{d.texto}”</blockquote><figcaption><img src={d.foto} width="52" height="52" alt={d.nome} loading="lazy" decoding="async"/><strong>{d.nome}</strong></figcaption></figure>)}</div>
        <p className="results-note">Experiências individuais. A evolução depende da prática e das condições de cada pessoa.</p>
      </div></section>
      <section className="section shade guarantee-section" id="garantia"><div className="container guarantee-layout"><img src={guarantee} width="500" height="500" alt="7 dias de garantia: satisfação ou seu dinheiro de volta" loading="eager" decoding="async"/><div><span className="eyebrow">EXPERIMENTE COM TRANQUILIDADE</span><h2>7 dias de garantia.<br/><span className="underline-lime">A decisão é sua.</span></h2><p>Conheça as aulas e experimente a rotina. Se perceber que não é para você, solicite o reembolso em até 7 dias e receba <strong>100% do valor pago de volta.</strong></p><Accordion type="single" collapsible><AccordionItem value="extra" className="extra-guarantee"><AccordionTrigger>Conheça também a garantia adicional</AccordionTrigger><AccordionContent><p>Se você fizer as aulas por pelo menos 6 semanas, de 3 a 4 vezes por semana, e não perceber nenhuma melhora, a garantia adicional prevê a devolução do valor. É necessário comprovar que realizou as aulas conforme essas condições.</p></AccordionContent></AccordionItem></Accordion></div></div></section>
      <section className="section offer-reminder" aria-labelledby="reminder-title"><div className="container"><div className="section-heading"><span className="eyebrow">SEU PRÓXIMO PASSO</span><h2 id="reminder-title">Escolha seu acesso.<br/><span className="underline-lime">Comece no seu ritmo.</span></h2><p>Pagamento único e comunidade no WhatsApp nos dois planos.</p></div><div className="reminder-grid"><article className="reminder-card"><span className="plan-category">ALONGA+ ESSENCIAL</span><h3>O curso completo para você começar.</h3><p>15 módulos e mais de 70 exercícios de ativação, alongamento e mobilidade.</p><strong className="reminder-price">R$ 49,90</strong><span className="payment-note">à vista · pagamento único</span><button className="button button-dark" onClick={()=>choose("essencial")}>QUERO O ESSENCIAL</button></article><article className="reminder-card reminder-complete"><span className="plan-category">ALONGA+ COMPLETO</span><h3>Todos os conteúdos em um só acesso.</h3><p>Curso Alonga+ completo.<br/><strong>🎁 Bônus 1:</strong> Alimentos que melhoram a flexibilidade.<br/><strong>🎁 Bônus 2:</strong> Recuperação pós-alongamento pesado.</p><strong className="reminder-price">R$ 79,90</strong><span className="payment-note">à vista · pagamento único</span><a className="button button-lime" href={CHECKOUTS.completo!}>QUERO O COMPLETO</a></article></div></div></section>
      <section className="section faq-section" id="faq"><div className="container faq-container"><div className="section-heading"><span className="eyebrow">ANTES DE DAR O PRIMEIRO PASSO</span><h2>Perguntas frequentes.</h2></div><Accordion type="single" collapsible className="faq-list">{faqs.map((f,i)=><AccordionItem key={f.q} value={String(i)}><AccordionTrigger>{f.q}</AccordionTrigger><AccordionContent><p>{f.a}</p></AccordionContent></AccordionItem>)}</Accordion><div className="faq-cta"><p>Seu próximo movimento começa aqui.</p><a href="#oferta" className="button button-lime">ESCOLHER MEU PLANO</a></div></div></section>
    </main>
    <footer className="footer"><div className="container footer-inner"><img src={logo} width="344" height="64" alt="Alonga+"/><p>© 2026 Alonga+. Todos os direitos reservados.</p><a href="#conteudo">Voltar ao início</a></div></footer>
    <Dialog open={specialOpen} onOpenChange={setSpecialOpen}><DialogContent className="special-offer-dialog">
      <span className="special-offer-badge"><Gift size={18}/>UM PRESENTE PARA VOCÊ</span>
      <DialogTitle className="special-offer-title">Espere! Leve a experiência <span className="highlight">completa.</span></DialogTitle>
      <DialogDescription className="special-offer-description">Já que você escolheu o Essencial, aqui vai um presente: uma condição especial para levar o Alonga+ Completo com os dois bônus.</DialogDescription>
      <ul className="special-offer-products">
        <li><Check/><span><strong>Curso Alonga+ completo</strong><small>15 módulos e mais de 70 variações de exercícios</small></span></li>
        <li><Gift/><span><b>BÔNUS 1</b><strong>Alimentos que melhoram a flexibilidade</strong></span></li>
        <li><Gift/><span><b>BÔNUS 2</b><strong>Recuperação pós-alongamento pesado</strong></span></li>
      </ul>
      <p className="special-offer-benefits">Rotinas de 10 a 15 minutos · Do iniciante ao avançado · Atualizações gratuitas · Comunidade no WhatsApp · Garantia de 7 dias</p>
      <div className="special-offer-price"><span>De <s>R$ 79,90</s> por apenas</span><strong>R$ 67,90</strong><small>à vista · pagamento único · economize R$ 12</small></div>
      <a className="button button-lime" href={CHECKOUTS.especial!}>QUERO A OFERTA ESPECIAL</a>
      <a className="simple-offer-button" href={CHECKOUTS.essencial!}>Quero a oferta simples mesmo — R$ 49,90</a>
    </DialogContent></Dialog>
    <Dialog open={selectedPlan !== null} onOpenChange={open=>{if(!open)setSelectedPlan(null);}}><DialogContent className="purchase-dialog"><span className="eyebrow">ALONGA+ {selectedPlan === "essencial" ? "ESSENCIAL" : "COMPLETO"}</span><DialogTitle>Compra ainda indisponível nesta prévia</DialogTitle><DialogDescription>O link de pagamento deste plano ainda não foi configurado. Nenhuma cobrança foi realizada.</DialogDescription><button className="button button-lime" onClick={()=>setSelectedPlan(null)}>VOLTAR AOS PLANOS</button></DialogContent></Dialog>
  </>;
}
