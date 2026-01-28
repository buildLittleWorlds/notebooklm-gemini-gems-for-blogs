# NotebookLM & Gemini Gems for Blogs

An instructional site teaching ENGL 170 students how to use NotebookLM and Gemini Gems for researching and writing peer-response blog posts.

**Live URL:** https://buildlittleworlds.github.io/notebooklm-gemini-gems-for-blogs/

## Site Structure

```
notebooklm-gemini-gems-for-blogs/
├── index.html                 # Start Here (landing page)
├── tool-chooser.html          # Decision tree: when to use what
├── notebooklm-workflow.html   # NotebookLM step-by-step
├── gems-workflow.html         # Gems step-by-step
├── combined-workflow.html     # Using both together
├── example-notebooklm.html    # Gabriel Bell walkthrough
├── example-gems.html          # Zay Amaro walkthrough
├── example-combined.html      # Eliana Nodari walkthrough
├── templates.html             # Copy/paste prompts and checklists
├── verification.html          # Fact-checking guide
├── glossary.html              # Key terms
├── troubleshooting.html       # Common problems
├── style.css                  # Shared styles
├── _template.html             # Template for new pages
└── README.md                  # This file
```

## Core Concepts

**NotebookLM** = Source-grounded research workspace
- Build notebooks around peer posts and outside sources
- All answers cite your sources (no hallucination)
- Discover Sources finds credible web sources
- Notes become sources → research trail with receipts

**Gemini Gems** = Reusable instruction-driven assistant
- Custom AI with standing instructions
- Same process every time: summarize → thesis → outline → draft
- Shines for repeatable workflows and consistent voice

**The Bridge:** Gemini can attach NotebookLM notebooks as sources, combining grounded research with flexible conversation.

## Student Examples Featured

| Student | Post | Used In |
|---------|------|---------|
| Gabriel Bell | "The Silicon Mirage" | NotebookLM Example |
| Zay Amaro | "Markets, Metrics, and the Myth of Certainty" | Gems Example |
| Eliana Nodari | "The Evolution of the Architect" | Combined Example |

## Design

- Uses ink/cream/sepia color palette from plate-blog and class-notes
- EB Garamond typography
- Step cards for numbered instructions
- Callout boxes: info (teal), warning (amber), insight (sepia)
- Bottom navigation with current-page indicator

## Deployment

This is a standalone GitHub Pages site. To deploy:

1. Create repo `buildLittleWorlds/notebooklm-gemini-gems-for-blogs`
2. Push all files
3. Enable GitHub Pages (Settings → Pages → main branch)
4. Site will be live at `https://buildlittleworlds.github.io/notebooklm-gemini-gems-for-blogs/`

## Related Course Materials

- **Dashboard:** https://buildlittleworlds.github.io/engl170-spring2026-dashboard/
- **Instructor Blog:** https://buildlittleworlds.github.io/plate-composition-blog/
- **Class Notes:** https://buildlittleworlds.github.io/engl170-class-notes/
