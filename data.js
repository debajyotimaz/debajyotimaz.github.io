// ---------------------------------------------------------------------------
// All site content lives here. Edit this file to update the page; no build step.
// Newest items first in every list.
// ---------------------------------------------------------------------------

window.SITE = {
  me: "D. Mazumder",

  // Papers whose theme isn't listed here still appear under "All".
  themes: {
    codemixed:   { label: "Code-mixing",             blurb: "How models handle text that switches between languages mid-sentence: hate, humour and sarcasm detection, and how code-mixed text relates to its parent languages." },
    consistency: { label: "Cross-lingual Knowledge", blurb: "Whether a model that knows a fact in English still reaches it when asked in Hindi, Odia or Hinglish." },
    factcheck:   { label: "Fact Verification",       blurb: "Checking claims against evidence, in text and in speech, and making the reasoning behind a verdict explicit." },
    graphml:     { label: "GraphML",                 blurb: "Link prediction in multiplex networks with attention across graph layers." },
  },

  publications: [
    {
      title: "To Trust or Not to Trust: Retrieval-Augmented Fact Checking in Speech",
      authors: ["D. Mazumder", "Mamta", "A. Subramanyam"],
      venue: "EMNLP 2026", venueFull: "Proceedings of EMNLP 2026", year: 2026,
      theme: "factcheck",
      finding: "Introduces VeriSpeak, 3,879 spoken claims. Audio LLMs show a consistent text-to-speech gap in fact-checking; retrieval alone helps little, retrieval plus explicit reasoning helps substantially.",
      links: { arXiv: "https://arxiv.org/abs/2609.30227" },
    },
    {
      title: "Evaluating Cross-lingual Knowledge Consistency in Code-Mixed vis-à-vis Indian Languages using IndicKLAR",
      authors: ["D. Mazumder", "D. Pathak", "P. Kodali", "A. Joshi", "A. Agarwal", "J. Patro"],
      venue: "Findings of EMNLP 2026", venueFull: "Findings of EMNLP 2026", year: 2026,
      theme: ["codemixed", "consistency"],
      finding: "18 Indian languages, 11 code-mixed pairs, 9 open LLMs. Native-language accuracy trails English by up to ~0.50, while code-mixed queries land within ~0.05. Translate-in-Thought prompting adds +0.15 consistency.",
      links: { arXiv: "https://arxiv.org/abs/2605.29637" },
    },
    {
      title: "Neither Here Nor There: Cross-Lingual Representation Dynamics of Code-Mixed Text in Multilingual Encoders",
      authors: ["D. Mazumder", "D. Pathak", "P. Kodali", "J. Patro"],
      venue: "Findings of EMNLP 2026", venueFull: "Findings of EMNLP 2026", year: 2026,
      theme: "codemixed",
      finding: "Code-mixed text sits loosely between both parent languages and is processed mostly through an English-dominant subspace. An interpretability-motivated alignment objective lifts mBERT's cross-lingual alignment from 14.2 to 51.0.",
      links: { arXiv: "https://arxiv.org/abs/2603.19771" },
    },
    {
      title: "Entailed Opinion Matters: Improving the Fact-Checking Performance of Language Models by Relying on their Entailment Ability",
      authors: ["G. Kumar", "A. Garg", "D. Mazumder", "A. Kishore", "B. Kumar", "J. Patro"],
      venue: "Findings of AACL-IJCNLP 2026", venueFull: "Findings of AACL-IJCNLP 2026", year: 2026,
      theme: "factcheck",
      finding: "LLMs label each piece of evidence as supporting or refuting and justify it; verdict models trained on those justifications improve macro-F1 across seven benchmarks, including multilingual and multimodal ones.",
      links: { arXiv: "https://arxiv.org/abs/2505.15050" },
    },
    {
      title: "On VLMs for Diverse Tasks in Multimodal Meme Classification",
      authors: ["D. Gavit", "G. Kumar", "D. Mazumder", "S. Das", "J. Patro"],
      venue: "DHOW-MiLLA @ WebConf 2026", venueFull: "Companion Proceedings of the ACM Web Conference 2026", year: 2026,
      theme: "other",
      finding: "A broad study of state-of-the-art vision-language models across meme classification tasks.",
      links: { Paper: "https://doi.org/10.1145/3774905.3796487", arXiv: "https://arxiv.org/abs/2505.20937" },
    },
    {
      title: "Mind the Links: Cross-Layer Attention for Link Prediction in Multiplex Networks",
      authors: ["D. Sharma", "A. Kishore", "A. Garg", "D. Mazumder", "D. Mohapatra", "J. Patro"],
      venue: "WSDM 2026", venueFull: "Proceedings of ACM WSDM 2026", year: 2026,
      theme: "graphml",
      finding: "Poses link prediction on partially observed multiplex graphs and solves it with attention across layers.",
      links: { Paper: "https://dl.acm.org/doi/10.1145/3773966.3779365", arXiv: "https://arxiv.org/abs/2509.23409" },
    },
    {
      title: "Revealing the Impact of Synthetic Native Samples and Multi-Tasking Strategies in Hindi-English Code-Mixed Humour and Sarcasm Detection",
      authors: ["D. Mazumder", "A. Kumar", "J. Patro"],
      venue: "Findings of EMNLP 2025", venueFull: "Findings of EMNLP 2025", year: 2025,
      theme: "codemixed",
      finding: "Synthetic native-language samples and a multi-task architecture that shares knowledge across related tasks, compared against state-of-the-art models.",
      links: { Paper: "https://aclanthology.org/2025.findings-emnlp.1308/", Code: "https://github.com/islnlp/code-mix-humor-sarcasm-detection-EMNLP-2025" },
    },
    {
      title: "Improving Code-Mixed Hate Detection by Native Sample Mixing: A Case Study for Hindi-English Code-Mixed Scenario",
      authors: ["D. Mazumder", "A. Kumar", "J. Patro"],
      venue: "ACM TALLIP 2025", venueFull: "ACM Transactions on Asian and Low-Resource Language Information Processing", year: 2025, journal: true,
      theme: "codemixed",
      finding: "Adding native-language hate samples to training improves code-mixed hate detection, and native samples alone transfer useful signal.",
      links: { Paper: "https://dl.acm.org/doi/10.1145/3726866", Code: "https://github.com/islnlp/code-mix-hate-detection-ACM-TALLIP-2025" },
    },
  ],

  // `date` is free text shown as-is. Keep newest first.
  news: [
    { date: "Sep 2026", html: "<i>Entailed Opinion Matters</i> accepted to Findings of <b>AACL-IJCNLP 2026</b>." },
    { date: "Sep 2026", html: "Wrapped up my Research PhD internship at <b>Adobe</b>, building a next-question recommender for CXOs." },
    { date: "Aug 2026", html: "Three papers at <b>EMNLP 2026</b> in Budapest: VeriSpeak (main), IndicKLAR and <i>Neither Here Nor There</i> (Findings). Attending with an ACM/IARCS travel grant and as a D&amp;I student volunteer." },
    { date: "Jun 2026", html: "Selected for the <b>Machine Learning Summer School</b>, MLSS NYC 2026 at Columbia University." },
    { date: "Feb 2026", html: "Presented <i>Mind the Links</i> at <b>WSDM 2026</b> in Boise, supported by a SIGIR Student Travel Grant." },
    { date: "Feb 2026", html: "Invited talk and poster at <b>ACM ARCS 2026</b>, IIT Hyderabad, on code-mixed humour and sarcasm detection." },
    { date: "Sep 2025", html: "Awarded the ANRF International Travel Scheme grant to present at <b>EMNLP 2025</b> in Suzhou, China." },
    { date: "Jul 2025", html: "Joined <b>NielsenIQ</b> as a Research Scientist intern, working on LLM reasoning with RL from verifiable rewards." },
    { date: "Mar 2025", html: "Code-mixed hate detection paper accepted to <b>ACM TALLIP</b>. Selected for the LiveRAG Challenge at SIGIR 2025." },
  ],

  experience: [
    { when: "Jul 2026 – Sep 2026", what: "Research PhD Intern", where: "Adobe", note: "Next-question recommendation for CXOs." },
    { when: "Jul 2025 – Jan 2026", what: "Research Scientist, Sr. Intern", where: "NielsenIQ", note: "LLM reasoning with RLVR (GRPO variants after warm-up SFT) on e-commerce tasks." },
    { when: "Aug 2022 – now", what: "Ph.D., Data Science & Engineering", where: "IISER Bhopal", note: "Advisor: Dr. Akash Anil. CPI 9.00." },
    { when: "2018 – 2020", what: "M.Sc., Mathematics", where: "Zakir Husain Delhi College, University of Delhi", note: "" },
    { when: "2015 – 2018", what: "B.Sc. (Hons.), Mathematics", where: "Deshbandhu College, University of Delhi", note: "" },
  ],

  honors: [
    ["2026", "ACM/IARCS Travel Grant"],
    ["2026", "EMNLP D&I Student Volunteer"],
    ["2026", "MLSS NYC 2026, Columbia University"],
    ["2026", "SIGIR Student Travel Grant, WSDM 2026"],
    ["2026", "ACM Travel Grant, ARCS 2026 (invited talk)"],
    ["2025", "ANRF ITS Travel Grant, EMNLP 2025"],
    ["2025", "LiveRAG Challenge track, SIGIR 2025"],
    ["2023", "2nd place, poster presentation, DSE Day, IISER Bhopal"],
    ["2022–23", "Travel grants, IndoML 2022 & 2023"],
    ["2022", "MHRD Fellowship (GATE 2022)"],
  ],

  teaching: [
    ["Natural Language Processing", "DSE318/401/607", "Spring 2026"],
    ["Introduction to Programming", "ECS102", "Spring 2025"],
    ["Natural Language Processing", "DSE407/607", "Fall 2024"],
    ["Introduction to Programming", "ECS102", "Spring 2024"],
    ["Natural Language Processing", "DSE407/607", "Fall 2023"],
    ["Applied Optimization", "DSE311", "Spring 2023"],
  ],

  service: [
    "Reviewer: The ACM Web Conference 2026, 2027 · ICWSM 2026 · IEEE Transactions on Multimedia · LT-EDI 2026 · DravidianLangTech 2026 · INSTCon 2026",
    "Student volunteer, Diversity & Inclusion, EMNLP 2026",
  ],
};
