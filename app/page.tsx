"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Cpu,
  Fish,
  FlaskConical,
  Sparkles,
  Waves,
  type LucideIcon,
} from "lucide-react";

import logo from "../assets/Logo_PelletQ-AI_Putih_NoText.png";
import instagramLogo from "../assets/instagram-logo-colored.jpg";
import tiktokLogo from "../assets/logo-tiktok.jpg";
import logoKemdik from "../assets/Logo Kemdiktisaintek RI Warna.png";
import logoDikti from "../assets/Logo Diktisaintek Berdampak_Horizontal Logo.png";
import logoUGM from "../assets/Lambang UGM-hitam (2).png";
import logoSimbelmawa from "../assets/SImbelmawa.png";
import logoPKM from "../assets/Kumpulan Logoo - 12.png";
import logoBelmawa from "../assets/Copy of Blue Minimal Idea Free Education Logo - Logo BS Warna.png"

type SocialLink = {
  label: string;
  href: string;
  active: boolean;
  description: string;
  type: "instagram" | "tiktok" | "website" | "youtube" | "linkedin" | "github" | "email" | "whatsapp" | "portfolio";
};

type ResearchFocus = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/pkmpiugm_pelletq.ai",
    active: true,
    description: "Project updates & documentation",
    type: "instagram",
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@pkmpi.ugm.pelletq.ai",
    active: true,
    description: "Short videos & progress clips",
    type: "tiktok",
  },
];

const partnerLogos = [
  { src: logoKemdik, alt: "Kemdiktisaintek RI", label: "Kemdiktisaintek" },
  { src: logoDikti, alt: "Diktisaintek Berdampak", label: "Diktisaintek" },
  { src: logoUGM, alt: "UGM", label: "UGM" },
  { src: logoSimbelmawa, alt: "Simbelmawa", label: "Simbelmawa" },
  { src: logoPKM, alt: "PKM", label: "PKM" },
  { src: logoBelmawa, alt: "Belmawa", label: "Bbelmawa" },

  
];

const researchFocusCards: ResearchFocus[] = [
  {
    title: "AI Integration",
    description: "Exploring data-driven support for pellet production",
    icon: Cpu,
  },
  {
    title: "Feed Quality",
    description: "Supporting better formulation and production consistency",
    icon: FlaskConical,
  },
  {
    title: "Aquaculture Innovation",
    description: "Designed for smarter and more sustainable fish farming",
    icon: Fish,
  },
];

const activeSocialLinks = socialLinks.filter((link) => link.active);

const containerAnimation: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
};

const itemAnimation: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function LogoPlaceholder() {
  return (
    <div
      className="relative mx-auto grid size-24 place-items-center rounded-3xl bg-gradient-to-br from-[#7700FF] via-white to-[#00FF77] p-[2px] shadow-[0_18px_45px_rgba(119,0,255,0.18)]"
      aria-label="PelletQ-AI logo"
    >
      <div className="grid size-full place-items-center rounded-[1.35rem] bg-white">
        {/* <div className="relative grid size-16 place-items-center rounded-2xl bg-[#FAFAFF] ring-1 ring-[#7700FF]/10"> */}
          <Image
            src={logo}
            alt="PelletQ-AI logo"
            className="size-20 rounded-2xl object-contain"
            width={380}
            height={380}
          />
        {/* </div> */}
      </div>
    </div>
  );
}

function Badge({ children, icon: Icon }: { children: React.ReactNode; icon?: LucideIcon }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#7700FF]/12 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm shadow-[#7700FF]/5 backdrop-blur">
      {Icon ? <Icon className="size-3.5 text-[#00A850]" aria-hidden="true" /> : null}
      {children}
    </span>
  );
}

function SocialIcon({ type }: { type: SocialLink["type"] }) {
  const label = type === "instagram" ? "IG" : type === "tiktok" ? "TT" : "PQ";
  if (type === "instagram") {
    return (
      <div className="relative size-11 shrink-0 overflow-hidden rounded-2xl">
        <Image
          src={instagramLogo}
          alt="Instagram"
          fill
          className="object-cover object-center"
          sizes="28px"
        />
      </div>
    );
  }

  if (type === "tiktok") {
    return (
      <div className="relative size-11 shrink-0 overflow-hidden rounded-2xl">
        <Image
          src={tiktokLogo}
          alt="TikTok"
          fill
          className="object-cover object-center"
          sizes="28px"
        />
      </div>
    );
  }

  return (
    <span className="grid size-11 shrink-0 place-items-center rounded-2xl border border-[#7700FF]/10 bg-gradient-to-br from-[#7700FF]/10 to-[#00FF77]/20 text-sm font-bold text-[#7700FF] shadow-inner">
      {label}
    </span>
  );
}

function SocialLinkButton({ link, index }: { link: SocialLink; index: number }) {
  return (
    <motion.a
      variants={itemAnimation}
      custom={index}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open PelletQ-AI ${link.label}`}
      whileHover={{ y: -3, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className="group flex w-full items-center gap-4 rounded-3xl border border-slate-200/80 bg-white/90 p-4 text-left shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition duration-300 hover:border-[#7700FF]/30 hover:shadow-[0_22px_55px_rgba(119,0,255,0.15)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#00A850]"
    >
      <SocialIcon type={link.type} />
      <span className="min-w-0 flex-1">
        <span className="block text-base font-semibold text-slate-950">{link.label}</span>
        {/* <span className="mt-0.5 block text-sm leading-5 text-slate-500">{link.description}</span> */}
      </span>
      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#FAFAFF] text-[#7700FF] transition duration-300 group-hover:bg-[#7700FF] group-hover:text-white">
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </span>
    </motion.a>
  );
}

function ResearchFocusCard({ card }: { card: ResearchFocus }) {
  const Icon = card.icon;

  return (
    <motion.article
      variants={itemAnimation}
      className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 text-left shadow-[0_12px_32px_rgba(15,23,42,0.06)] backdrop-blur"
    >
      <div className="mb-3 grid size-9 place-items-center rounded-2xl bg-[#00FF77]/15 text-[#007A3A] ring-1 ring-[#00FF77]/25">
        <Icon className="size-4.5" aria-hidden="true" />
      </div>
      <h2 className="text-sm font-semibold text-slate-950">{card.title}</h2>
      <p className="mt-1.5 text-xs leading-5 text-slate-500">{card.description}</p>
    </motion.article>
  );
}

function Footer() {
  return (
    <footer className="pt-3 text-center text-xs leading-5 text-slate-500">
      <p>PelletQ-AI © 2026</p>
      <p>Academic research project for PKM Indonesia</p>
    </footer>
  );
}

function BackgroundMotifs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-24 top-[-7rem] size-72 rounded-full bg-[#7700FF]/12 blur-3xl" />
      <div className="absolute -right-20 top-36 size-64 rounded-full bg-[#00FF77]/18 blur-3xl" />
      <div className="absolute bottom-[-8rem] left-1/2 size-72 -translate-x-1/2 rounded-full bg-[#7700FF]/8 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(119,0,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,119,0.045)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div className="absolute left-[12%] top-[18%] size-2 rounded-full bg-[#00A850]/30" />
      <div className="absolute right-[18%] top-[28%] size-3 rounded-full border border-[#7700FF]/20" />
      <div className="absolute left-[18%] bottom-[22%] size-4 rounded-full border border-[#00A850]/20" />
      <Waves className="absolute right-[8%] bottom-[18%] size-12 text-[#7700FF]/10" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FAFAFF] px-5 py-8 text-slate-950 sm:px-6">
      <BackgroundMotifs />
      <motion.section
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-[460px] flex-col justify-center gap-7"
      >
        <motion.header variants={itemAnimation} className="text-center">
          <LogoPlaceholder />
          {/* <div className="mt-6">
            <Badge icon={BadgeCheck}>PKM Research Project</Badge>
          </div> */}
          <h1 className="mt-4 text-4xl font-bold tracking-normal text-slate-950">
            <span className="bg-gradient-to-r from-[#7700FF] to-[#00FF77] bg-clip-text text-transparent">PelletQ-AI</span>
          </h1>
          <p className="mt-2 text-base font-medium text-slate-600">AI-integrated fish pellet production</p>
          <div className="mt-3 mx-auto mb-[-20px]  flex flex-auto  flex-wrap justify-items-center justify-center-safe ">
            {partnerLogos.map((partner) => (
              <div key={partner.label} className="relative m-2 min-w-[50px] overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-3 shadow-sm">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  height={100}
                  width={100}
                  className="h-7 w-fit object-contain"
                />
              </div>
            ))}
          </div>
        </motion.header>
        <motion.p variants={itemAnimation} className="mx-auto max-w-md text-center text-sm leading-6 text-slate-600">
          PelletQ-AI is a student research initiative focused on integrating artificial intelligence into fish pellet production
          to support smarter formulation, quality monitoring, and aquaculture innovation.
        </motion.p>

        <motion.div variants={containerAnimation} className="grid gap-3" aria-label="PelletQ-AI social links">
          {activeSocialLinks.map((link, index) => (
            <SocialLinkButton key={link.label} link={link} index={index} />
          ))}
        </motion.div>

        {/* <motion.section variants={containerAnimation} className="grid gap-3 sm:grid-cols-3" aria-label="Research focus">
          {researchFocusCards.map((card) => (
            <ResearchFocusCard key={card.title} card={card} />
          ))}
        </motion.section> */}

        <motion.div variants={itemAnimation}>
          <Footer />
        </motion.div>
      </motion.section>
    </main>
  );
}
