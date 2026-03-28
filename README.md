### Course content

## Lesson one

# Setup and deploy
1. Setup claude, node, git, vercel
2. A prompt to start off with (kinda like they are prompting the course)
3. "Create semantic HTML structure for a portfolio with: hero, about, projects grid, contact form"
4. Then we walk through the code line by line - we fetch the code that was generated and annotate it in the terminal?

## Lesson two

# Unpack what we just did
1. Mental model "HTML is the skeleton, CSS is the skin, Javascript is the interactivity"
2. Local machine → Git → Hosting → URL 
3. Diagram showing this flow


## Lesson three

# Styling with Tailwind
1. building out tailwind config (using figma mcp server? I could have a example figma design system)
2. explaining the different units rem etc (briefly designers might already know this)
3. What to avoid (margins, float, inline hex codes etc. readon why you should avoid them and what to use instead e.g. flex with gap for spacing, tailwind config for colors)
4. When the user is installing packages and writing code. And stuff doesn't work, perhaps they have the wrong version of tailwind installed or they have edited the wrong file (we should have AI running in the course pointing these things out)

## Lesson four

# React components

1. React components, explain what they are why we use them again a mental model with a diagram (ways of thinking)
2. "Components are LEGO bricks" -> Input (props) → Output (UI) -> Same props = same output (predictable)
3. "When to make a new component" -> If you'd make it a component in Figma, make it a component in React
4. Repeated 3+ times? Component
5. Logically separate concern? Component.

## Lesson five

1. Interactivity & State
2. Mental Model: "State is memory"
3. What does the app need to remember?
4. State lives somewhere, props flow down

## Lesson 6: Backend Basics

1. Mental Model: "Client asks, server answers"
2. Diagram the HTTP request/response cycle
3. Frontend = what the user sees, Backend = what the user can't see

## Lesson 7: Polish & Ship

1. Works on mobile (test real device)
2. Loading states for async actions
3. Error messages are human-readable
4. Lighthouse score > 80
5. Open Graph tags for social sharing












-----------





1. install react
2. install next js
3. install bun
4. install github
5. install claude code
5. write your first react component (counter)
6. style the component (tailwind things to avoid)
7. deploy to vercel
8. setup hono or just next.js (explain the difference and explain why hono) endpoint
9. setup database (neon)
10. client > server > database and back
11. authentication using something (clerk, maybe there are different levels to this)
12. error messages
13. purchase own domain
14. opengraph tags for sharing
15. 