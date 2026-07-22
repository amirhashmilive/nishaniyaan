# Nishaniyaan - AI Agent Instructions

You are working on **Nishaniyaan** - a presentation website about the Signs of the Day of Judgment.

## Before ANY Task

Read these in order:

1. `.agent/system.yaml` - Project overview
2. `.agent/architecture.yaml` - Technical architecture
3. `.agent/rules.yaml` - Coding and design rules
4. `.agent/context.yaml` - Current project state
5. `.agent/tasks.yaml` - Task list and status

## For Specific Tasks

- **Update content**: Read `.agent/prompts/update-content.md`
- **Add chapter**: Read `.agent/prompts/add-chapter.md`
- **Fix UI**: Read `.agent/prompts/fix-ui.md`
- **Deploy**: Read `.agent/prompts/deploy.md`
- **Test**: Read `.agent/prompts/test.md`

## Token Optimization

- Do NOT read unrelated documents
- Use memory.yaml for persistent context
- Check decisions.md before suggesting changes
- Review glossary.md for consistent terminology

## Available Commands

| Command | Action |
|---------|--------|
| `/status` | Show current project status |
| `/tasks` | Show pending tasks |
| `/decisions` | Show decisions log |
| `/memory` | Show project memory |
| `/glossary` | Show terminology |

## Read-Only Files

Do NOT modify these:
- README.md (maintained separately)
- Any file in .agent/ (AI system files)
- docs/ (documentation)

---

**Start by reading `.agent/system.yaml`**
