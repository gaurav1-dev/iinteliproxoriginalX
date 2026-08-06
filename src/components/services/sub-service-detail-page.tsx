import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Calendar, Check, MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FloatingWhatsApp, SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { BLOGS } from "@/lib/blogs";
import { PROJECTS } from "@/lib/portfolio";
import { relatedSubServices, type Service, type SubService } from "@/lib/services-data";
import { SITE, whatsappLink } from "@/lib/site";

export function SubServiceDetailPage({ service, subService }: { service: Service; subService: SubService }) {
  const siblings = relatedSubServices(service.slug, subService.slug);
  const blogs = BLOGS.filter((article) => article.relatedServices.includes(service.slug));
  const projects = PROJECTS.filter((project) =>
    project.subServiceSlugs?.includes(subService.slug) || project.serviceSlugs?.includes(service.slug),
  );
  const quote = `Hello iinteliproX AI, I would like to discuss ${subService.name}.`;

  return (
    <div className="min-h-screen bg-[#050505] text-[#f8fafc]">
      <SiteNav />
      <main>
        <section className="border-b border-[rgba(255,255,255,0.08)] pt-32 pb-16 sm:pt-40 sm:pb-24 bg-grid">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-[#94a3b8]">
              <Link to="/" className="hover:text-white">Home</Link><span>/</span>
              <Link to="/services" className="hover:text-white">Services</Link><span>/</span>
              <Link to="/services/$slug" params={{ slug: service.slug }} className="hover:text-white">{service.name}</Link><span>/</span>
              <span aria-current="page" className="text-white">{subService.name}</span>
            </nav>
            <div className="eyebrow mt-8">Specialised {service.name}</div>
            <h1 className="mt-5 max-w-5xl font-display text-4xl leading-[1.04] tracking-tight sm:text-6xl md:text-7xl">{subService.hero}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-[#94a3b8]">{subService.short}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={SITE.calendly} target="_blank" rel="noreferrer" className="btn-primary"><Calendar className="h-4 w-4" />Book a consultation</a>
              <a href={whatsappLink(quote)} target="_blank" rel="noreferrer" className="btn-ghost"><MessageCircle className="h-4 w-4 text-[#16a34a]" />Request a quote</a>
            </div>
          </div>
        </section>

        <section className="border-b border-[rgba(255,255,255,0.08)] py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3">
            <div><div className="eyebrow">Overview</div><h2 className="mt-4 font-display text-3xl sm:text-4xl">A focused solution, connected to the wider system</h2></div>
            <div className="space-y-10 lg:col-span-2">
              <Content title="What it covers" text={subService.overview} />
              <Content title="The business problem" text={subService.problem} />
              <Content title="Our implementation approach" text={subService.solution} />
              <Content title="Who it is for" text={subService.who} />
            </div>
          </div>
        </section>

        <ListSections subService={subService} />

        <section className="border-b border-[rgba(255,255,255,0.08)] bg-[#0b0f0c] py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="eyebrow">Technology and delivery</div>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl">Practical implementation details</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <Card title="Technologies" items={subService.tech} />
              <Card title="Typical timeline" items={[subService.timeline]} />
              <Card title="Relevant industries" items={subService.industries} />
            </div>
          </div>
        </section>

        <section className="border-b border-[rgba(255,255,255,0.08)] py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="eyebrow">Connected expertise</div>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl">Explore this service cluster</h2>
            <p className="mt-5 max-w-3xl text-[#94a3b8]">Return to the <Link to="/services/$slug" params={{ slug: service.slug }} className="text-[#16a34a] underline">{service.name} service hub</Link>, or compare related specialised solutions below.</p>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {siblings.map((sibling) => <Link key={sibling.slug} to="/services/$slug/$subSlug" params={{ slug: service.slug, subSlug: sibling.slug }} className="card-surface p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16a34a]"><h3 className="font-display text-xl">{sibling.name}</h3><span className="mt-3 inline-flex items-center gap-1 text-sm text-[#16a34a]">Explore service <ArrowUpRight className="h-4 w-4" /></span></Link>)}
            </div>
          </div>
        </section>

        {(blogs.length > 0 || projects.length > 0) && <RelatedContent blogs={blogs} projects={projects} />}

        <section className="border-b border-[rgba(255,255,255,0.08)] py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6"><div className="eyebrow">FAQ</div><h2 className="mt-4 font-display text-3xl sm:text-5xl">Questions about {subService.name}</h2><Accordion type="single" collapsible className="mt-10">{subService.faqs.map((faq, index) => <AccordionItem key={faq.q} value={`faq-${index}`}><AccordionTrigger>{faq.q}</AccordionTrigger><AccordionContent className="leading-relaxed text-[#94a3b8]">{faq.a}</AccordionContent></AccordionItem>)}</Accordion></div>
        </section>

        <section className="py-16 sm:py-24"><div className="mx-auto max-w-5xl px-4 text-center sm:px-6"><div className="card-surface p-8 sm:p-12"><div className="eyebrow">Plan the next step</div><h2 className="mt-4 font-display text-3xl sm:text-5xl">Discuss {subService.name} with our team</h2><p className="mx-auto mt-5 max-w-2xl text-[#94a3b8]">We’ll review your current workflow, dependencies and desired outcome before recommending scope or technology.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Link to="/contact" className="btn-primary">Contact iinteliproX AI</Link><a href={whatsappLink(quote)} target="_blank" rel="noreferrer" className="btn-ghost">WhatsApp quote</a></div></div></div></section>
      </main>
      <SiteFooter /><FloatingWhatsApp />
    </div>
  );
}

function Content({ title, text }: { title: string; text: string }) { return <div><h3 className="font-display text-2xl">{title}</h3><p className="mt-3 leading-relaxed text-[#94a3b8]">{text}</p></div>; }
function Card({ title, items }: { title: string; items: string[] }) { return <div className="card-surface p-6"><h3 className="font-display text-xl">{title}</h3><ul className="mt-5 space-y-3">{items.map((item) => <li key={item} className="flex gap-2 text-sm text-[#94a3b8]"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#16a34a]" />{item}</li>)}</ul></div>; }
function ListSections({ subService }: { subService: SubService }) { const sections = [{ title: "Business benefits", items: subService.benefits }, { title: "Core features", items: subService.features }, { title: "Practical use cases", items: subService.useCases }, { title: "Delivery process", items: subService.process }, { title: "Deliverables", items: subService.deliverables }]; return <section className="border-b border-[rgba(255,255,255,0.08)] py-16 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6"><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{sections.map((section) => <Card key={section.title} {...section} />)}</div></div></section>; }
function RelatedContent({ blogs, projects }: { blogs: typeof BLOGS; projects: typeof PROJECTS }) { return <section className="border-b border-[rgba(255,255,255,0.08)] py-16 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6"><div className="eyebrow">Related resources</div><h2 className="mt-4 font-display text-3xl sm:text-5xl">Learn from relevant insights and work</h2><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{blogs.slice(0, 3).map((blog) => <Link key={blog.slug} to="/blog/$slug" params={{ slug: blog.slug }} className="card-surface p-6"><div className="eyebrow">Guide</div><h3 className="mt-3 font-display text-xl">{blog.title}</h3></Link>)}{projects.slice(0, 3).map((project) => <Link key={project.slug} to="/portfolio/$slug" params={{ slug: project.slug }} className="card-surface p-6"><div className="eyebrow">Project</div><h3 className="mt-3 font-display text-xl">{project.title}</h3></Link>)}</div></div></section>; }
