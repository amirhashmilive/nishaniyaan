# Process Transcript - Content Ingestion Prompt

## Task: Process Transcript Input and Integrate into Nishaniyaan

### Input Format
The user will provide a transcript from a podcast, interview, lecture, or discussion, OR a file path to the transcript.

### Step 1: Read Input
- Read the transcript file or content
- Identify the language of the input

### Step 2: Translation (MANDATORY)
- **If input is NOT in English**: Translate to English
- Preserve meaning, context, and nuance
- Keep transliterations of Arabic terms if needed
- Verify translation accuracy
- **NEVER** insert non-English content into the website

### Step 3: Sanitization
- **REMOVE** all podcast names, channel names, host names
- **REMOVE** timestamps, episode numbers, production metadata
- **REMOVE** personal identifiers, speakers' identities
- **KEEP** the substantive content, context, and information

### Step 4: Content Extraction
Extract all meaningful content points:
- [ ] Qur'anic references (verses mentioned)
- [ ] Hadith narrations (prophetic sayings)
- [ ] Scholarly opinions (classical/contemporary)
- [ ] Historical events mentioned
- [ ] Contemporary observations
- [ ] Stories or narratives
- [ ] Claims (with or without sources)

### Step 5: Verification
For each content point:

1. **Qur'anic References**:
   - Match with specific Surah and Ayah
   - Assign: 🟢 Authentic (Qur'an)

2. **Hadith References**:
   - Check in: Bukhari, Muslim, Abu Dawud, Tirmidhi, Ibn Majah, Musnad Ahmad
   - DO NOT mention Shia/Sunni - simply verify
   - Assign: 🟢 Sahih Hadith, 🟡 Hasan, 🟠 Da'if, or 🔴 Mawdu'

3. **Scholarly Opinions**:
   - Identify the scholar if mentioned
   - Assign: ⚪ Scholarly Opinion

4. **Historical Events**:
   - Verify with historical records
   - Assign: 🔵 Historical Record

5. **Contemporary Observations**:
   - Verify against current events
   - Assign: 🟣 Observation

6. **Unverified Claims**:
   - If no source can be verified
   - Assign: ⚫ Unverified (quarantine)

### Step 6: Classification & Distribution

| Content | Chapter |
|---------|---------|
| Qur'anic verses | Chapter 01 or 08 |
| Hadith | Chapter 01, 03, 04, 05, 06, 07, 08 |
| Minor Signs | Chapter 02 |
| Near Signs | Chapter 03 |
| Dajjal content | Chapter 04 |
| Imam Mahdi | Chapter 05 |
| Isa (AS) | Chapter 06 |
| After Dajjal | Chapter 07 |
| To Qiyamah | Chapter 08 |
| Unverified claims | Chapter 08 (Bibliography & Appendices) |
| Scholarly opinions | Chapter 01 or 08 |

### Step 7: Integration Plan

Provide a detailed plan:
1. **Which slides** will be updated or created
2. **What content** goes where
3. **Which badges** are assigned to each
4. **How it fits** with existing content
5. **Any conflicts** with existing information

### Step 8: Execution

Execute the integration:
1. Update relevant HTML files
2. Add new content with badges
3. Update .agent/tasks.yaml
4. Update .agent/decisions.md if needed
5. Commit and push

### Output Format

Provide:
1. **Translated Content** (if translation was needed)
2. **Sanitized Content** (cleaned transcript)
3. **Verification Report** (what was verified, what wasn't)
4. **Distribution Plan** (content → chapter → slide mapping)
5. **Execution Plan** (what to change)
6. **Summary** (what was added)
