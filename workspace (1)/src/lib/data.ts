export const NAV = [
  { id: "manifeste", label: "Manifeste" },
  { id: "architecture", label: "Architecture" },
  { id: "cerveau", label: "Cerveau" },
  { id: "univers", label: "Univers" },
  { id: "moteurs", label: "Moteurs" },
  { id: "confiance", label: "Confiance" },
  { id: "modele", label: "Modèle" },
  { id: "roadmap", label: "Roadmap" },
];

export const TICKER: string[] = [
  "SLA 99,999 % — 5 régions actives",
  "Latence médiane mondiale : 62 ms",
  "12 842 polices émises aujourd'hui",
  "Module #47 « Nomade Digital » — en production",
  "NAICOM · conformité validée automatiquement",
  "3 412 sinistres réglés en 24 h",
  "FX temps réel — 38 devises",
  "Chaos test réussi · région us-east",
  "Smart contract paramétrique déclenché — sécheresse Sahel",
  "0 intrusion · 1 204 jours sans brèche",
  "Réassurance : 214 M$ cédés cette semaine",
  "IA explicable — audit de biais Q3 validé",
];

export type FeedItem = { tag: string; text: string; tone: "teal" | "amber" | "coral" | "sky" };

export const FEED_POOL: FeedItem[] = [
  { tag: "SENSE", text: "Pic de requêtes « télétravail Bali » détecté — Jakarta +340 %", tone: "teal" },
  { tag: "ACT", text: "Module « Flotte VTC Lagos » déployé en 41 h", tone: "amber" },
  { tag: "SINISTRE", text: "Indemnisation paramétrique versée — inondation Valence, 3,2 s", tone: "sky" },
  { tag: "FRAUDE", text: "Réseau de fausses factures auto bloqué — score 0.97", tone: "coral" },
  { tag: "FRAUDE", text: "Pattern #A-218 appris : usurpation RIB en santé collective", tone: "coral" },
  { tag: "CONFORMITÉ", text: "DORA : 12 produits re-validés — 0 non-conformité", tone: "teal" },
  { tag: "BRAIN", text: "Sandbox : 10 M de scénarios simulés — module « Héritage Digital »", tone: "amber" },
  { tag: "MARCHÉ", text: "Cession réassurance 12,4 M$ — traité cat' Asie du Sud-Est", tone: "sky" },
  { tag: "SENSE", text: "Usage WhatsApp +212 % — canal conversationnel activé (Lingala)", tone: "teal" },
  { tag: "TARIF", text: "Prime auto recalculée — télémétrie : -18 % (conducteur #88 412)", tone: "sky" },
  { tag: "ACT", text: "T&C générés en vietnamien — produit cargo fluvial", tone: "amber" },
  { tag: "SAT", text: "Indice NDVI < seuil — pré-alerte récolte (Sahel, zone 4)", tone: "coral" },
  { tag: "BRAIN", text: "A/B : parcours sinistre v2 +11 pts NPS — généralisé", tone: "amber" },
  { tag: "KYC", text: "Réassureur Munich onboardé — due diligence 4 h 12", tone: "sky" },
];

export const MANIFESTO = [
  { from: "Un SaaS vertical santé", to: "Un OS horizontal de l'assurance", hi: "OS horizontal" },
  { from: "Une cible RDC / CIMA", to: "200+ pays, toutes lignes d'assurance", hi: "200+ pays" },
  { from: "Des modules codés en dur", to: "Des modules générés par IA selon l'usage", hi: "générés par IA" },
  { from: "Une plateforme statique", to: "Un organisme auto-évolutif", hi: "auto-évolutif" },
  {
    from: "Un outil pour assureurs",
    to: "Une marketplace mondiale : assureurs, réassureurs, courtiers, assurés, régulateurs",
    hi: "marketplace mondiale",
  },
];

export type Layer = {
  n: number;
  code: string;
  name: string;
  sub: string;
  items: string[];
  stats: { k: string; v: string }[];
};

export const LAYERS: Layer[] = [
  {
    n: 5,
    code: "COUCHE 5",
    name: "Interface universelle",
    sub: "Portails adaptatifs — voix, AR, chat, API, IoT",
    items: ["5 portails (Entreprise, Prestataire, Assuré, Assureur, Régulateur)", "UX auto-reformulée selon le profil", "100+ langues, zones faible bande"],
    stats: [
      { k: "Portails", v: "5" },
      { k: "Langues", v: "100+" },
    ],
  },
  {
    n: 4,
    code: "COUCHE 4",
    name: "Moteur d'évolution — XANO Brain",
    sub: "IA générative de modules · détection de patterns · A/B continu",
    items: ["LLM fine-tuné sur 50 ans de données actuarielles", "Agents orchestrateurs (création de modules)", "Sandbox : 10 M de scénarios par module", "Kill-switch humain sur les modules critiques"],
    stats: [
      { k: "Produit complet", v: "48 h" },
      { k: "Scénarios test", v: "10 M" },
    ],
  },
  {
    n: 3,
    code: "COUCHE 3",
    name: "Marché mondial",
    sub: "Multi-devises FX · multi-régulateurs · réassurance",
    items: ["FX temps réel — 38 devises", "Marketplace de réassurance intelligente", "6 zones régulatoires natives"],
    stats: [
      { k: "Devises", v: "38" },
      { k: "Fee plateforme", v: "0,15–0,5 %" },
    ],
  },
  {
    n: 2,
    code: "COUCHE 2",
    name: "Noyau assurantiel",
    sub: "Souscription · sinistres · clearing · tarification",
    items: ["Schéma de données universel (santé → cyber → paramétrique)", "Tarification dynamique temps réel", "Clearing multi-parties instantané"],
    stats: [
      { k: "Latence p95", v: "< 100 ms" },
      { k: "Familles", v: "12" },
    ],
  },
  {
    n: 1,
    code: "COUCHE 1",
    name: "Fondation confiance",
    sub: "Zero-trust · post-quantique · blockchain · audit",
    items: ["Passkeys FIDO2 + biométrie continue", "Chiffrement ML-KEM (Kyber) + homomorphique", "Preuves cryptographiques sur blockchain L2", "Data residency automatique par pays"],
    stats: [
      { k: "SLA", v: "99,999 %" },
      { k: "RPO", v: "0" },
    ],
  },
];

export type Signal = {
  id: string;
  chip: string;
  sense: string;
  think: string;
  module: string;
  famille: string;
  act: string;
  learn: string;
  tone: "teal" | "amber" | "coral" | "sky";
};

export const SIGNALS: Signal[] = [
  {
    id: "nomade",
    chip: "500 demandes « télétravail à l'étranger »",
    sense: "500 assurés demandent une couverture télétravail à l'étranger sur 3 marchés",
    think: "Pattern confirmé : gap de couverture santé + RC + équipement, 78 % < 35 ans",
    module: "Assurance Nomade Digital",
    famille: "Santé × Mobilité",
    act: "Barème, T&C multilingues et souscription générés — sandbox 10 M de scénarios OK",
    learn: "Feedback : conversion 3,1× le benchmark — module généralisé à 14 pays",
    tone: "teal",
  },
  {
    id: "cyber",
    chip: "Pic de sinistres cyber — secteur logistique",
    sense: "Pic de sinistres cyber détecté sur le secteur logistique (rançongiciels +240 %)",
    think: "Corrélation : fournisseurs SaaS communs — exposition systémique modélisée",
    module: "Paramétrique Cyber Logistique",
    famille: "Cyber × Paramétrique",
    act: "Produit paramétrique créé, déclenchement automatique via smart contract",
    learn: "Délai d'indemnisation : 22 jours → 4 minutes — prime ajustée au secteur",
    tone: "coral",
  },
  {
    id: "naicom",
    chip: "Nouveau régulateur — NAICOM (Nigeria 2027)",
    sense: "Veille réglementaire : NAICOM publie un nouveau cadre micro-assurance (2027)",
    think: "Impact : 6 produits existants, reporting NGN requis, hébergement local obligatoire",
    module: "Conformité NAICOM 2027",
    famille: "Régulatoire",
    act: "Module de conformité déployé : reporting Naira, T&C anglais, datacenter Lagos",
    learn: "Audit régulateur passé sans réserve — modèle réutilisé pour 3 pays CIMA",
    tone: "amber",
  },
  {
    id: "fraude",
    chip: "Fraude récurrente — actes auto",
    sense: "Fraude récurrente identifiée sur un type d'acte auto (réseau de garages complices)",
    think: "Graphe relationnel : 34 entités liées, signature temporelle commune détectée",
    module: "Règle anti-fraude #A-217",
    famille: "Anti-fraude",
    act: "Règle auto-générée et poussée en production, score de risque recalibré",
    learn: "Taux de détection +19 % en 72 h — modèle enrichi sans intervention humaine",
    tone: "coral",
  },
  {
    id: "whatsapp",
    chip: "Usage massif de WhatsApp — Kinshasa",
    sense: "Les assurés de Kinshasa basculent massivement sur WhatsApp (+212 % en 30 j)",
    think: "Préférence canal : conversationnel > formulaire — 4 langues locales demandées",
    module: "Canal conversationnel IA",
    famille: "Expérience",
    act: "Agent IA multilingue activé : lingala, swahili, français, anglais",
    learn: "NPS +27 pts, coût par contact -41 % — étendu à 9 villes d'Afrique centrale",
    tone: "teal",
  },
  {
    id: "secheresse",
    chip: "Satellite : sécheresse — Sahel",
    sense: "Imagerie satellite : indice NDVI sous le seuil sur 12 000 parcelles (Sahel)",
    think: "Modèle climatique : déficit hydrique 38 % vs moyenne décennale, confiance 0.94",
    module: "Indemnisation Agri-Satellite",
    famille: "Agri × Paramétrique",
    act: "Indemnisation automatique déclenchée — 8 412 exploitants payés en 36 h",
    learn: "Faux positifs 0,7 % — seuils recalibrés pour la prochaine saison",
    tone: "amber",
  },
];

export const SEED_MODULES = [
  { name: "Assurance Nomade Digital", famille: "Santé × Mobilité", status: "PRODUCTION", gen: "41 h", tone: "teal" as const },
  { name: "Paramétrique Cyber PME", famille: "Cyber", status: "PRODUCTION", gen: "38 h", tone: "coral" as const },
  { name: "Micro-Récolte Index Sahel", famille: "Agri × Climat", status: "PRODUCTION", gen: "44 h", tone: "amber" as const },
];

export type Family = {
  id: string;
  n: string;
  name: string;
  icon: string;
  examples: string[];
  sig: string;
};

export const FAMILIES: Family[] = [
  { id: "sante", n: "01", name: "Santé", icon: "sante", examples: ["Individuelle", "Collective", "Voyage", "Maternité", "Chronique", "Mentale"], sig: "Tiers payant instantané dans 200+ pays" },
  { id: "vie", n: "02", name: "Vie & Épargne", icon: "vie", examples: ["Temporaire décès", "Entière", "Mixte", "Retraite", "Unit-linked"], sig: "Rachats et versements réglés en T+0" },
  { id: "biens", n: "03", name: "Biens", icon: "biens", examples: ["Habitation", "Commerce", "Industrie", "Agricole"], sig: "Indemnisation photo-estimée en 24 h" },
  { id: "auto", n: "04", name: "Auto & Mobilité", icon: "auto", examples: ["Véhicule", "Flotte", "2 roues", "Trottinette", "VTC"], sig: "Tarification télémétrique à la seconde" },
  { id: "rc", n: "05", name: "Responsabilité", icon: "rc", examples: ["RC pro", "RC privée", "Décennale", "Médicale"], sig: "Attestations émises en temps réel" },
  { id: "cyber", n: "06", name: "Cyber", icon: "cyber", examples: ["PME", "ETI", "Rançon", "Interruption", "RGPD"], sig: "Cellule de crise activée en 15 min" },
  { id: "param", n: "07", name: "Paramétrique", icon: "param", examples: ["Sécheresse", "Inondation", "Retard vol", "Séisme"], sig: "Déclenchement automatique, zéro paperasse" },
  { id: "maritime", n: "08", name: "Maritime & Transport", icon: "maritime", examples: ["Cargo", "Flotte", "Aviation", "Plaisance"], sig: "Suivi IoT conteneur par conteneur" },
  { id: "credit", n: "09", name: "Crédit & Caution", icon: "credit", examples: ["Emprunteur", "Loyers impayés", "Caution commerciale"], sig: "Scoring de contrepartie en continu" },
  { id: "agri", n: "10", name: "Agriculture", icon: "agri", examples: ["Récolte", "Bétail", "Index climatique"], sig: "Vérification satellite + drone native" },
  { id: "crypto", n: "11", name: "Crypto & Digital Assets", icon: "crypto", examples: ["Custode", "Smart contract", "DeFi"], sig: "Couverture preuve-de-réserve auditable" },
  { id: "embedded", n: "12", name: "Embedded", icon: "embedded", examples: ["E-commerce", "Travel", "Fintech"], sig: "API blanche : intégration en 2 appels" },
];

export type Hybrid = { name: string; desc: string; chips: string[]; tone: "teal" | "amber" | "coral" | "sky" };

export const HYBRIDS: Record<string, Hybrid> = {
  "sante+cyber": {
    name: "Protection Identité Médicale",
    desc: "Couvre le vol de données de santé : surveillance dark web, restauration d'identité, soutien juridique et prise en charge des préjudices.",
    chips: ["Surveillance dark web", "Restauration d'identité", "Notification RGPD auto"],
    tone: "teal",
  },
  "auto+param": {
    name: "Pay-per-km Météo",
    desc: "Prime calculée au kilomètre réel, gelée automatiquement pendant les alertes météo majeures, déclenchement paramétrique en cas d'événement climatique.",
    chips: ["Télémétrie live", "Gel prime alerte orange", "Indemnisation indexée"],
    tone: "sky",
  },
  "vie+crypto": {
    name: "Héritage Digital Automatisé",
    desc: "Transmission des actifs numériques aux bénéficiaires via smart contract, déclenchée par oracle d'état civil vérifié. Zéro notaire, zéro délai.",
    chips: ["Smart contract successoral", "Oracle état civil", "Cold storage couvert"],
    tone: "amber",
  },
  "agri+param": {
    name: "Récolte Satellite",
    desc: "Indemnisation automatique dès que le satellite détecte une sécheresse : l'indice NDVI fait foi, aucun déclaratif nécessaire.",
    chips: ["Indice NDVI", "Paiement mobile money", "36 h max"],
    tone: "teal",
  },
  "maritime+cyber": {
    name: "Cargo Cyber-Physique",
    desc: "Couvre à la fois la perte physique du conteneur et le piratage des systèmes portuaires qui la retarde — une seule police, un seul sinistre.",
    chips: ["IoT + AIS", "Retard cyber couvert", "Port smart inclus"],
    tone: "coral",
  },
  "biens+param": {
    name: "Habitat Sismique Express",
    desc: "Dès magnitude ≥ 6,2 à moins de 40 km : première indemnisation forfaitaire versée en 10 minutes, ajustée ensuite par expertise drone.",
    chips: ["Déclenchement USGS", "10 min", "Expertise drone"],
    tone: "amber",
  },
};

export const MOTEURS = [
  { n: "01", title: "Génération de produits", desc: "L'IA crée un produit d'assurance complet — T&C, tarification, souscription, sinistres — en 48 h à partir d'un besoin détecté.", icon: "spark" },
  { n: "02", title: "Tarification dynamique", desc: "Les primes s'ajustent en temps réel selon l'exposition réelle : télémétrie auto, wearables santé, IoT habitation.", icon: "pulse" },
  { n: "03", title: "Conformité auto-adaptative", desc: "Quand un régulateur change une règle, le module de conformité se met à jour et re-valide tous les produits impactés.", icon: "shield" },
  { n: "04", title: "Anti-fraude évolutif", desc: "Chaque fraude détectée enrichit le modèle. Le système apprend à reconnaître les nouvelles arnaques sans intervention humaine.", icon: "radar" },
  { n: "05", title: "Expérience auto-optimisée", desc: "L'interface se reformule selon le profil : senior, digital native, zone faible bande — la même plateforme, mille visages.", icon: "face" },
  { n: "06", title: "Réassurance intelligente", desc: "Le système cède automatiquement aux réassureurs les bons risques au bon prix, via la marketplace mondiale.", icon: "layers" },
  { n: "07", title: "Edge expansion", desc: "Quand un nouveau marché s'ouvre, XANO déploie automatiquement langue, devise, régulateur et partenaires locaux.", icon: "globe" },
];

export const ZT_BLOCKS = [
  { title: "Identité", icon: "key", lines: ["Chaque requête authentifiée", "Passkeys · FIDO2", "Biométrie continue"] },
  { title: "Chiffrement", icon: "lock", lines: ["AES-256-GCM", "Post-quantique Kyber / ML-KEM", "Homomorphique pour l'IA"] },
  { title: "Données", icon: "db", lines: ["Souveraineté par pays (data residency auto)", "Preuves cryptographiques", "Blockchain L2 d'audit"] },
  { title: "Infrastructure", icon: "cloud", lines: ["Multi-cloud AWS + Azure + GCP + locaux", "5 régions actives · RTO < 15 min · RPO = 0", "SLA 99,999 % — 5 min d'arrêt/an max"] },
];

export const SEC_STATS = [
  { v: "99,999 %", k: "SLA — 5 régions, basculement auto" },
  { v: "< 15 min", k: "RTO · RPO = 0" },
  { v: "< 100 ms", k: "latence sur 95 % des requêtes" },
  { v: "38", k: "devises en clearing continu" },
];

export const PILIERS = [
  { icon: "pulse", title: "Disponibilité", text: "99,999 % — 5 régions, basculement automatique" },
  { icon: "fingerprint", title: "Intégrité", text: "Chaque transaction signée, immuable" },
  { icon: "eyeoff", title: "Confidentialité", text: "Zero-knowledge proofs sur le sensible" },
  { icon: "list", title: "Traçabilité", text: "Audit log complet, exportable régulateurs" },
  { icon: "cycle", title: "Résilience", text: "Chaos engineering permanent" },
  { icon: "gauge", title: "Performance", text: "< 100 ms sur 95 % des requêtes mondiales" },
  { icon: "swap", title: "Portabilité", text: "Migration vers un concurrent en 1 clic (loi EU)" },
  { icon: "eye", title: "Transparence", text: "Dashboard public incidents + SLA temps réel" },
  { icon: "scale", title: "Éthique", text: "IA explicable, biais audité trimestriellement" },
  { icon: "leaf", title: "Durabilité", text: "Datacenters 100 % renouvelables" },
];

export type Jurisdiction = { id: string; region: string; frameworks: string[]; demo: string };

export const JURIS: Jurisdiction[] = [
  {
    id: "eu",
    region: "Europe",
    frameworks: ["Solvency II", "IFRS 17", "RGPD", "DORA", "IDD"],
    demo: "Un produit vendu en France respecte Solvency II + RGPD · T&C en français · reporting en EUR · hébergement à Paris (eu-west).",
  },
  {
    id: "us",
    region: "USA",
    frameworks: ["NAIC", "HIPAA", "Licensing state-by-state"],
    demo: "Un produit vendu au Texas respecte NAIC + HIPAA · licence d'état vérifiée · T&C en anglais · reporting en USD · hébergement en Virginie.",
  },
  {
    id: "af",
    region: "Afrique — CIMA & NAICOM",
    frameworks: ["CRCA", "Loi 18/035 RDC", "NAICOM", "FRCN"],
    demo: "Un produit vendu au Nigeria respecte NAICOM · T&C en anglais · reporting en Naira · hébergement à Lagos. En RDC : CRCA + Loi 18/035, FCFA… pardon, CDF.",
  },
  {
    id: "me",
    region: "Moyen-Orient",
    frameworks: ["SAMA", "DFSA", "QFCRA"],
    demo: "Un produit vendu en Arabie saoudite respecte SAMA · T&C en arabe et anglais · reporting en SAR · hébergement à Riyad.",
  },
  {
    id: "as",
    region: "Asie",
    frameworks: ["MAS (Singapour)", "IRDAI (Inde)", "FSA (Japon)"],
    demo: "Un produit vendu à Singapour respecte MAS · T&C en anglais/mandarin · reporting en SGD · hébergement Singapour (ap-south).",
  },
  {
    id: "la",
    region: "Amérique latine",
    frameworks: ["SUSEP (Brésil)", "CNSF (Mexique)"],
    demo: "Un produit vendu au Brésil respecte SUSEP · T&C en portugais · reporting en BRL · hébergement à São Paulo (sa-east).",
  },
];

export const REVENUES = [
  { source: "SaaS de base", model: "Abonnement mensuel par assureur, tiers selon volume", margin: 70, icon: "stack" },
  { source: "Transaction fee", model: "0,15 % à 0,5 % sur chaque prime collectée via la plateforme", margin: 85, icon: "flow" },
  { source: "Marketplace", model: "Commission 10–20 % sur réassurance, courtage, services tiers", margin: 90, icon: "market" },
  { source: "Data & IA", model: "Insights actuariels, scoring, prédictions vendus aux assureurs", margin: 95, icon: "brain" },
  { source: "Embedded API", model: "Licence blanche pour intégrateurs : fintech, e-commerce, travel", margin: 80, icon: "plug" },
];

export const PROJ = [
  { year: "Y1", assureurs: 50, assures: "2 M", primes: 0.4, revenu: 12 },
  { year: "Y2", assureurs: 250, assures: "15 M", primes: 3.5, revenu: 95 },
  { year: "Y3", assureurs: 800, assures: "80 M", primes: 18, revenu: 480 },
  { year: "Y4", assureurs: 2000, assures: "250 M", primes: 65, revenu: 1600 },
  { year: "Y5", assureurs: 5000, assures: "800 M", primes: 220, revenu: 5200 },
];

export type Phase = {
  phase: string;
  title: string;
  window: string;
  status: string;
  statusTone: "teal" | "amber" | "sky" | "mut";
  progress: number;
  items: { label: string; state: "done" | "doing" | "todo" }[];
};

export const ROADMAP: Phase[] = [
  {
    phase: "PHASE 1",
    title: "Fondation",
    window: "MOIS 1–6",
    status: "EN COURS",
    statusTone: "teal",
    progress: 62,
    items: [
      { label: "Noyau assurantiel (souscription, sinistres, clearing)", state: "doing" },
      { label: "Admin unique + 5 portails", state: "doing" },
      { label: "QR dynamique universel + zero-trust", state: "done" },
      { label: "3 familles natives : Santé, Auto, Habitation", state: "todo" },
      { label: "3 pays pilotes : RDC, Nigeria, France", state: "todo" },
    ],
  },
  {
    phase: "PHASE 2",
    title: "Expansion",
    window: "MOIS 7–18",
    status: "T+6 MOIS",
    statusTone: "sky",
    progress: 0,
    items: [
      { label: "XANO BRAIN v1 — génération assistée", state: "todo" },
      { label: "12 familles d'assurances natives", state: "todo" },
      { label: "Marketplace de réassurance", state: "todo" },
      { label: "20 pays, 50 assureurs", state: "todo" },
      { label: "Conformité Solvency II + IFRS 17", state: "todo" },
    ],
  },
  {
    phase: "PHASE 3",
    title: "Autonomie",
    window: "MOIS 19–36",
    status: "T+18 MOIS",
    statusTone: "amber",
    progress: 0,
    items: [
      { label: "XANO BRAIN v2 — génération autonome", state: "todo" },
      { label: "Paramétrique + smart contracts", state: "todo" },
      { label: "IA conversationnelle — 100+ langues", state: "todo" },
      { label: "100 pays, 500 assureurs", state: "todo" },
      { label: "Chiffrement post-quantique complet", state: "todo" },
    ],
  },
  {
    phase: "PHASE 4",
    title: "Écosystème",
    window: "MOIS 37–60",
    status: "T+36 MOIS",
    statusTone: "mut",
    progress: 0,
    items: [
      { label: "Infrastructure critique mondiale", state: "todo" },
      { label: "80 % des features auto-créées", state: "todo" },
      { label: "200+ pays · 5 000 assureurs · 800 M assurés", state: "todo" },
      { label: "IPO ou valorisation > 50 B$", state: "todo" },
    ],
  },
];

export const CYCLE = [
  { key: "sense", label: "SENSE", fr: "Signaux utilisateurs", icon: "radar" },
  { key: "think", label: "THINK", fr: "Analyse IA Brain", icon: "brain" },
  { key: "act", label: "ACT", fr: "Déploiement modules", icon: "bolt" },
  { key: "learn", label: "LEARN", fr: "Feedback automatique", icon: "cycle" },
];
