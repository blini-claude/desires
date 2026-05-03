export type JournalEntry = {
  slug: string;
  title: string;
  date: string;
  read: string;
  excerpt: string;
  body: string[];
};

export const ENTRIES: JournalEntry[] = [
  {
    slug: "drop-01-notes",
    title: "Drop 01 — How It Was Cut",
    date: "Apr 28, 2026",
    read: "4 min",
    excerpt: "Twenty pieces. One cutting room. Eight months. A short note on what we made and why.",
    body: [
      "Drop 01 started in a notebook in late summer — twenty pieces, one cutting room, two patternmakers and the loose idea that the only thing we wanted to make was clothes that you reach for on the same day twice. No more, no fewer. We built each piece against that test and threw out anything that failed it.",
      "The Atlas Work Jacket is the drop's anchor. Mid-weight cotton, brushed inside, garment-washed for the broken-in drape. We cut three rounds of patterns before we got the shoulder right and we still might tweak it for Drop 02. The Rope Cargo Pant came together faster — the fabric did most of the work.",
      "We don't restock. When the run is gone the run is gone. Twenty pieces means a hundred-and-something total units across sizes. Some pieces will sell out the week we ship. That is the deal.",
      "Cut once. Sewn slow. Wear loud.",
    ],
  },
  {
    slug: "the-pattern-room",
    title: "Inside the Pattern Room",
    date: "Apr 12, 2026",
    read: "6 min",
    excerpt: "What actually happens between sketch and sample.",
    body: [
      "Most brands skip the pattern room. We don't. Every piece in Drop 01 went through three rounds of paper-pattern revision before a single yard of fabric got cut. That sounds slow because it is.",
      "The reason is simple: a fit problem at sample stage costs you a week. The same problem caught in production costs you a season. We'd rather waste paper than waste fabric.",
      "Our patternmaker Joana spent twelve years at a Lisbon shop that does small runs for Margiela and Lemaire. She is the reason the Atlas shoulder sits the way it does and the reason the Rope Cargo doesn't bunch at the knee.",
      "Patterns also tell you when an idea is bad. Three pieces from the original Drop 01 lineup never made it past pattern review. That is the system working.",
    ],
  },
  {
    slug: "what-we-wear",
    title: "What We Wear When We Make It",
    date: "Mar 30, 2026",
    read: "3 min",
    excerpt: "The honest answer is mostly the same five things.",
    body: [
      "We get asked what we wear in the studio. The honest answer is mostly the same five things.",
      "An Atlas Work Jacket — usually the rust prototype that didn't ship. A Loop Knit Cardigan in moss. A pair of Drift Jeans we've had for years. The Halo Beanie when it's cold. A pocket tee.",
      "Nothing fancy. Nothing branded. We don't wear our own samples for marketing. We wear them because if we like them after a week we know they're worth shipping.",
    ],
  },
  {
    slug: "fabric-notes-01",
    title: "Fabric Notes · Mid-Weight Cotton",
    date: "Mar 14, 2026",
    read: "5 min",
    excerpt: "Why we keep coming back to mid-weight Portuguese cotton for almost everything.",
    body: [
      "Drop 01 leans heavy on a single fabric: a 320 g/m² mid-weight cotton woven in northern Portugal by a mill that's been at it since 1923. We chose it after testing eleven other options.",
      "What it does well: takes a garment-wash beautifully, holds shape after fifty cycles, breaks in but doesn't break down, and doesn't pill in the underarm seam — which is where most cottons give up first.",
      "The Atlas Jacket, the Rope Cargo, and the Ash Overshirt are all cut from variations of this fabric. The hand-feel changes with the wash and the brushing — same yarn, different finish.",
      "We'll publish the mill's name when we're allowed to. They prefer to stay anonymous.",
    ],
  },
  {
    slug: "field-test",
    title: "A Year in the Atlas Jacket",
    date: "Feb 22, 2026",
    read: "7 min",
    excerpt: "What a year of daily wear looks like on a Drop 01 sample.",
    body: [
      "We've been wearing the Atlas prototype for a year. Here is what it looks like now.",
      "The collar has softened. The cuffs have gone slightly fuzzy on the inside where they hit the wrist. The chest pocket lining shows wear at the top edge. The hem has a faint salt line from a bike commute through a winter that wouldn't quit.",
      "Nothing has failed. No seams have torn. The hardware on the chest pocket still works. The thread that holds the embroidered Desires mark is right where it was on day one.",
      "This is the clothes-as-clothes test. If a piece doesn't pass it after twelve months of daily wear we don't ship it. The Atlas passed. So did the Loop, the Drift and the Ember. The other sixteen pieces in Drop 01 are all built to the same bar.",
    ],
  },
];

export function getEntry(slug: string) {
  return ENTRIES.find((e) => e.slug === slug);
}
