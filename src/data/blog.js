export const blogPosts = [
  {
    id: 1,
    title: "How I built my first Jetpack Compose app",
    date: "Mar 2025",
    readTime: "4 min read",
    tags: ["Compose", "Architecture", "Kotlin"],
    excerpt:
      "The architecture decisions and UI tradeoffs that helped me ship a maintainable Compose project quickly.",
    content:
      "I started with a small feature slice and built composables around UI state rather than screen hierarchy. Keeping state hoisted and testable made iteration far easier. The key insight: treat every composable as a pure function of its parameters — no side effects, no hidden state. This made previews reliable and testing straightforward. I also leaned into Kotlin's type system to model UI state as sealed classes, which eliminated entire categories of bugs before they reached production.",
  },
  {
    id: 2,
    title: "Jetpack Compose best practices in 2025",
    date: "Feb 2025",
    readTime: "5 min read",
    tags: ["Compose", "Performance", "Best Practices"],
    excerpt:
      "Practical rules for scalable component design, performance tuning, and state management in production apps.",
    content:
      "Consistency in naming, preview coverage, and careful recomposition boundaries are the strongest contributors to long-term Compose velocity. Use `remember` and `derivedStateOf` surgically — over-remembering creates stale closures, under-remembering causes excessive recompositions. Profile with the Layout Inspector's recomposition highlighter before optimising. For large lists, always prefer `LazyColumn` with stable keys and avoid capturing unstable lambdas in item content.",
  },
  {
    id: 3,
    title: "Integrating on-device AI into Android apps",
    date: "Jan 2025",
    readTime: "6 min read",
    tags: ["AI", "ML Kit", "Android"],
    excerpt:
      "A practical guide to adding ML Kit and on-device inference to a production Android app without killing battery life.",
    content:
      "On-device AI is no longer a research project — it's table stakes for modern Android apps. ML Kit provides solid APIs for text recognition, translation, and smart reply with no cloud round-trip. For custom models, TFLite with GPU delegate gives near-instant inference on mid-range devices. The biggest challenge is lifecycle management: run inference on a background dispatcher, cancel jobs on view destruction, and debounce user inputs to avoid redundant inference calls. Battery impact is surprisingly low when you batch predictions and avoid polling.",
  },
  {
    id: 4,
    title: "Building a voice assistant for low-resource languages",
    date: "Dec 2024",
    readTime: "7 min read",
    tags: ["Voice", "NLP", "Accessibility"],
    excerpt:
      "Lessons from building a Burmese-language voice assistant — handling speech recognition gaps and intent parsing for underserved markets.",
    content:
      "Most voice SDKs are optimised for English. Building for Burmese meant rolling a custom intent parser on top of a general speech-to-text engine. The approach: capture phonetic approximations, map them to intent keywords via a weighted trie, then route to action handlers. The biggest win was offline-first design — users in Myanmar often have intermittent connectivity, so every core feature degrades gracefully without a network. This shaped the whole architecture: local-first data, sync-on-connect, and clear offline indicators in the UI.",
  },
];
