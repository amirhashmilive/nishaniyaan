# Content Addition Workflow Guide

All content on Nishaniyaan is stored in structured JSON files located under `assets/data/`.

---

## 📝 How to Add a New Minor Sign

Open `assets/data/signs-minor.json` and append a new JSON object adhering to the schema:

```json
{
  "id": "SIGN-MIN-051",
  "title": "Title of the Sign in English",
  "titleArabic": "العنوان بالعربية",
  "category": "Faith & Belief",
  "description": "Detailed explanation of the sign...",
  "descriptionArabic": "التفصيل بالعربية",
  "status": "verified",
  "timelineEra": "present",
  "quranReferences": [],
  "hadithReferences": [
    {
      "collection": "Sahih Bukhari",
      "number": 1234,
      "text": "Hadith text in English...",
      "authenticity": "sahih"
    }
  ],
  "scholarlyOpinions": [
    {
      "scholar": "Classical Scholar Name",
      "view": "Scholarly commentary..."
    }
  ],
  "historicalEvidence": "Historical context...",
  "contemporaryObservations": "Modern observations...",
  "relatedSigns": ["SIGN-MIN-001"],
  "media": [],
  "references": [
    { "title": "Reference Book", "source": "Author" }
  ],
  "faqs": [
    { "question": "Question text?", "answer": "Answer text..." }
  ]
}
```

---

## 🔍 Automatic Search Indexing

When a new item is added to any JSON file in `assets/data/`, `search-engine.js` automatically indexes it into the global search modal (`Ctrl+K`). No website rebuild or compilation is required!
