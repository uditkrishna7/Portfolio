"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { profile } from '@/content/profile';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Container';
import { AssetImage } from '@/components/ui/AssetImage';
import { backgroundTexture, gradientBlobsTexture, heroIllustration, noiseTexture, particlesTexture, profileImage } from '@/config/assets';
import { getResumeHref } from '@/utils/resume';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -30]);
  const opacity = useTransform(scrollY, [0, 220], [1, 0.6]);

  return (
    <section className="relative overflow-hidden border-b border-white/10 py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-70" style={{ backgroundImage: `url(${backgroundTexture})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url(${noiseTexture})`, backgroundSize: '140px 140px', mixBlendMode: 'soft-light' }} />
        <div className="absolute inset-0 opacity-70" style={{ backgroundImage: `url(${particlesTexture})`, backgroundSize: '220px 220px', backgroundPosition: 'top right' }} />
        <div className="absolute left-[-10%] top-[-10%] h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-[-8%] h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.13),transparent_32%)]" />
        <div className="absolute inset-0 opacity-60" style={{ backgroundImage: `url(${gradientBlobsTexture})`, backgroundSize: 'cover', filter: 'blur(20px)' }} />
      </div>
      <Container className="grid gap-8 sm:gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div style={{ y, opacity }} className="space-y-6 sm:space-y-8">
          <Badge>Digital Headquarters</Badge>
          <div className="space-y-4">
            <h1 className="max-w-3xl bg-gradient-to-r from-slate-50 via-slate-200 to-sky-400 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl lg:text-6xl">
              Building a thoughtful future in operations, automation, and AI.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              {profile.summary}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={getResumeHref()} target="_blank" rel="noreferrer" className="inline-flex">
              <Button>Download Resume</Button>
            </a>
            <a href="#contact" className="inline-flex">
              <Button variant="secondary">Contact</Button>
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <ArrowDown className="h-4 w-4" />
            Scroll to explore
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="rounded-3xl border border-white/10 bg-[#111827]/90 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.45)] backdrop-blur"
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/90">
            <AssetImage
              src={heroIllustration}
              alt="Hero illustration placeholder"
              className="aspect-[4/5]"
              fallbackClassName="aspect-[4/5]"
              fallbackLabel="Hero illustration"
            />
          </div>
          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/70 p-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-full border border-white/10 bg-slate-800">
                <AssetImage
                  src={profileImage}
                  alt="Profile portrait placeholder"
                  className="h-full w-full"
                  fallbackClassName="h-full w-full"
                  fallbackLabel="Profile"
                />
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-400">Current focus</p>
                <p className="text-sm text-slate-300">Operations, automation, and AI</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>• Content Management</li>
              <li>• HTML, CSS, and JavaScript</li>
              <li>• Adobe Experience Manager and WordPress</li>
              <li>• Python, automation, and AI curiosity</li>
            </ul>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
