import { createFileRoute } from "@tanstack/react-router";
import swirl from "@/assets/swirl.jpg";
import acid from "@/assets/acid.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kovi — Customer 360 & Cross-Sell Engine" },
      {
        name: "description",
        content:
          "Kovi stitches customer identities across Equity, Mutual Funds, Insurance, Loans and Wealth into one golden record — with explainable match confidence and cross-sell opportunities.",
      },
      { property: "og:title", content: "Kovi — Customer 360 & Cross-Sell Engine" },
      {
        property: "og:description",
        content:
          "One golden record across five siloed financial systems. Explainable identity resolution, conflict review and next-best-opportunity scoring.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const PILLS = ["1. INGEST", "2. STANDARDIZE", "3. MATCH", "4. GOLDEN RECORD", "5. OPPORTUNITIES"];

const MODULES = [
  {
    n: "01",
    name: "Data Standardization",
    copy: "Normalizes PAN-like IDs, mobiles, emails and names across five source systems before a single comparison runs.",
  },
  {
    n: "02",
    name: "Deterministic Matching",
    copy: "Exact strong-identifier joins on verified PAN and source IDs create the high-confidence backbone of every cluster.",
  },
  {
    n: "03",
    name: "Probabilistic Resolution",
    copy: "Fuzzy name, DOB band and city signals combine into a weighted score instead of a blind merge.",
  },
  {
    n: "04",
    name: "Conflict Management",
    copy: "Disagreeing attributes keep full provenance, resolve by source precedence or land in the review queue.",
  },
  {
    n: "05",
    name: "Golden Customer ID",
    copy: "One unified identity links every source record while original system IDs stay intact and auditable.",
  },
  {
    n: "06",
    name: "Opportunity Engine",
    copy: "Configurable eligibility rules and score weights surface missing products with an explanation attached.",
  },
];

const ROLES = [
  { row: "Customer 360", access: [true, true, true] },
  { row: "Confidence Waterfall", access: [true, true, true] },
  { row: "Conflict Review Queue", access: [false, true, true] },
  { row: "Rule Configuration", access: [false, false, true] },
  { row: "What-If Simulator", access: [false, false, true] },
  { row: "Audit & Lineage Export", access: [false, true, true] },
];

function Landing() {
  return (
    <main className="bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-foreground bg-background px-5 py-3 md:px-8">
        <span className="display text-xl tracking-tight md:text-2xl">Kovi</span>
        <div className="flex items-center gap-3">
          <span className="hidden rounded-full border border-foreground px-3 py-1 text-[11px] font-medium uppercase tracking-widest md:inline">
            Live Demo
          </span>
          <span className="text-[11px] font-medium uppercase tracking-widest">Menu</span>
        </div>
      </header>

      {/* Hero */}
      <section className="grid items-center gap-10 px-5 pt-24 pb-20 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:pt-40 md:pb-28">
        <div>
          <h1 className="display text-[15vw] leading-[0.74] tracking-tight md:text-[7vw]">
            Introducing
            <br />
            Kovi
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#modules"
              className="rounded-full bg-primary px-6 py-3 text-xs font-bold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-85"
            >
              Request a Demo
            </a>
            <a
              href="#pipeline"
              className="rounded-full border border-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-accent"
            >
              View Architecture
            </a>
          </div>
          <div className="rule-y mt-10 flex flex-wrap items-center justify-between gap-2 py-2 text-[11px] font-medium uppercase tracking-widest">
            <span>Unify 245,842 records</span>
            <span className="text-muted-foreground">Powered by explainable AI</span>
            <span className="text-muted-foreground">PS-04 / Skill-Issue</span>
          </div>
        </div>

        {/* Golden record diagram */}
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={swirl}
            alt="Abstract dark swirl representing siloed data converging"
            width={1200}
            height={1200}
            className="h-[42vh] w-full object-cover md:h-[70vh]"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative aspect-square w-[82%] max-w-[440px]">
              <Bubble label="Golden Record" className="left-1/2 top-0 -translate-x-1/2" big />
              <Bubble label="Equity" className="left-0 top-[36%]" />
              <Bubble label="Wealth" className="right-0 top-[36%]" />
              <Bubble label="Mutual Funds" className="left-1/2 top-[38%] -translate-x-1/2" />
              <Bubble label="Insurance" className="left-[6%] top-[64%]" />
              <Bubble label="Loans" className="right-[6%] top-[64%]" />
              <Bubble label="Golden ID" className="left-1/2 top-[80%] -translate-x-1/2" />
            </div>
          </div>
        </div>
      </section>

      {/* Three identities */}
      <section className="grid gap-8 px-5 py-16 md:grid-cols-[1.1fr_1fr_1fr] md:px-8 md:py-24">
        <h2 className="display text-4xl md:text-5xl">
          Same customer.
          <br />
          Three identities.
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Rajesh K Sharma in Equity. R.K. Sharma in Mutual Funds. Rajesh Kumar Sharma in Insurance.
          A missing PAN here, a different email there — and three RMs calling the same person.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Kovi resolves the cluster, computes a match confidence with a visible waterfall,
          and reports one total relationship value of ₹5.2L instead of three partial truths.
        </p>
      </section>

      {/* Pipeline */}
      <section id="pipeline" className="mx-5 rounded-2xl bg-primary p-5 md:mx-8 md:p-8">
        <p className="display text-3xl text-primary-foreground md:text-5xl">
          The magic of one true customer
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {PILLS.map((p) => (
            <span
              key={p}
              className="rounded-full bg-accent px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-accent-foreground"
            >
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* Acid band */}
      <section className="relative mx-5 mt-5 overflow-hidden rounded-2xl md:mx-8">
        <img
          src={acid}
          alt="Acid green abstract gradient"
          loading="lazy"
          width={1600}
          height={700}
          className="h-64 w-full object-cover md:h-80"
        />
        <p className="display absolute inset-0 flex items-center px-6 text-4xl text-cream md:px-12 md:text-6xl">
          More intelligence for explainable cross-sell.
        </p>
      </section>

      {/* Modules */}
      <section id="modules" className="px-5 py-16 md:px-8 md:py-24">
        <h2 className="display text-4xl md:text-6xl">The stack</h2>
        <ul className="mt-8">
          {MODULES.map((m) => (
            <li
              key={m.n}
              className="grid grid-cols-[auto_1fr] items-start gap-4 border-t border-border py-5 md:grid-cols-[6rem_1fr_auto] md:items-center"
            >
              <span className="display text-3xl md:text-5xl">{m.n}</span>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest">{m.name}</h3>
                <p className="mt-1 max-w-xl text-sm text-muted-foreground">{m.copy}</p>
              </div>
              <span className="col-span-2 justify-self-start rounded-full border border-foreground px-4 py-2 text-[11px] font-bold uppercase tracking-widest md:col-span-1 md:justify-self-end">
                Show module
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Role access */}
      <section className="px-5 pb-16 md:px-8 md:pb-24">
        <h2 className="display text-4xl md:text-6xl">Role access</h2>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead>
              <tr className="border-b border-foreground text-[11px] font-bold uppercase tracking-widest">
                <th className="py-3" />
                <th className="py-3 text-center">RM</th>
                <th className="py-3 text-center">Manager</th>
                <th className="py-3 text-center">Admin</th>
              </tr>
            </thead>
            <tbody>
              {ROLES.map((r) => (
                <tr key={r.row} className="border-b border-border">
                  <td className="py-3 font-medium">{r.row}</td>
                  {r.access.map((a, i) => (
                    <td key={i} className="py-3 text-center">
                      <span
                        aria-label={a ? "included" : "not included"}
                        className={`inline-block h-3 w-3 rounded-full border border-foreground ${a ? "bg-foreground" : ""}`}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent px-5 py-20 text-accent-foreground md:px-8 md:py-28">
        <h2 className="display text-5xl md:text-7xl">
          Begin your
          <br />
          identity resolution
        </h2>
        <a
          href="#modules"
          className="mt-8 inline-block rounded-full bg-primary px-7 py-3 text-xs font-bold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-85"
        >
          Request a Demo
        </a>
      </section>

      <footer className="px-5 py-16 md:px-8">
        <p className="display text-5xl leading-[0.9] md:text-8xl">
          Match
          <br />
          Unify
          <br />
          Explain
          <br />
          Recommend
        </p>
        <p className="mt-10 border-t border-border pt-4 text-[11px] uppercase tracking-widest text-muted-foreground">
          Kovi v3.0 — Financial Customer 360
        </p>
      </footer>
    </main>
  );
}

function Bubble({
  label,
  className,
  big = false,
}: {
  label: string;
  className?: string;
  big?: boolean;
}) {
  return (
    <span
      className={`absolute flex items-center justify-center rounded-full bg-accent text-center font-bold uppercase leading-tight tracking-tight text-accent-foreground ${
        big ? "h-[30%] w-[36%] text-[11px] md:text-sm" : "h-[24%] w-[28%] text-[9px] md:text-xs"
      } ${className ?? ""}`}
    >
      {label}
    </span>
  );
}
