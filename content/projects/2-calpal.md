---
title: CalPal.ai
description: AI calendar assistant with agentic workflow for natural language scheduling
date: 2025-11-01
author: Lam Pham
thumbnail: /images/calpal.png
isProject: true
organization: AI calendar assistant with agentic workflow for natural language scheduling

learnings:
  - title: Agentic AI Workflow with Function Calling
    content: |
      Built an AI agent with 7 function-calling tools that autonomously orchestrate complex scheduling operations—my first deep dive into tool-based AI agents.

      **The 7 Tools**
      - `listFriends` - Get user's friends with names and IDs
      - `listEvents` - View calendar events in a time range
      - `createEvent` - Create new calendar events with attendees
      - `updateEvent` - Modify existing events
      - `deleteEvent` - Remove events from calendar
      - `freeBusy` - Check availability across friends' calendars
      - `suggestSlots` - Find optimal meeting times for groups

      **How It Works**
      - Each tool has a description and input schema (using Zod for validation)
      - AI autonomously decides which tools to use and in what order
      - Tools can be chained: e.g., `listFriends` → `freeBusy` → `suggestSlots` → `createEvent`
      - Allows up to 100 steps for complex multi-tool workflows

      **System Prompt Engineering**
      - Gave the AI context about current date/time and user timezone
      - Specified tool usage guidelines (e.g., "use listFriends FIRST when user mentions friends")
      - Defined default behaviors (60 min meetings, work hours 9-5, avoid weekends)
      - Made the AI confirm before creating/deleting events
  - title: Persistent Memory with Convex
    content: |
      Implemented stateful conversations where the AI remembers context across sessions—crucial for follow-up questions and multi-turn scheduling.

      **Agent Memory System**
      - Each conversation is a "thread" stored in Convex database
      - Threads persist user messages, assistant responses, and tool calls
      - System prompt automatically injects thread ID and past memories
      - Agent can reference previous conversations: "Schedule that meeting we discussed earlier"

      **Data Structure**
      - `agent_threads` - Conversation sessions with titles and timestamps
      - `agent_messages` - Individual messages linked to threads
      - `agent_memory` - Key-value memory store for todos/reminders
      - All messages saved in `onFinish` callback after streaming completes

      **Why This Matters**
      - Users can say "add Sarah to that meeting" without re-explaining
      - AI remembers scheduling preferences across conversations
      - Follow-up questions work naturally: "What about next week instead?"
  - title: Group Scheduling Algorithm & Google Calendar Integration
    content: |
      Built a complex scheduling algorithm that finds optimal meeting times across multiple people's calendars—my first time working with Google Calendar API and designing algorithmic solutions for real-world constraints.

      **The Algorithm (5 Steps)**
      1. **Fetch Busy Times** - Query Google Calendar API's FreeBusy endpoint for all participants
      2. **Invert to Free Times** - Convert busy periods to free periods for each person
      3. **Find Intersection** - Calculate times when EVERYONE is free (set intersection)
      4. **Split into Slots** - Break free periods into 30-minute increments matching meeting duration
      5. **Rank by Preferences** - Score slots by work hours, weekday preference, and time of day

      **Smart Ranking Logic**
      - Prefers times closer to midpoint of work hours (e.g., 1pm for 9-5)
      - Avoids weekends if specified
      - Interleaves slots from different days for variety
      - Returns top 200 slots to show multiple options per day

      **Google Calendar API Integration**
      - OAuth 2.0 flow with token encryption/decryption
      - Automatic token refresh when expiring (5-minute buffer)
      - Handles multiple calendars per user (primary + owned calendars)
      - Timezone-aware event creation and queries
      - Uses googleapis Node.js library

      **Token Management**
      - Access tokens stored encrypted in Convex database
      - `ensureValidToken()` checks expiry and refreshes automatically
      - Refresh tokens persist for long-term access
      - All calendar operations use refreshed tokens seamlessly
technologies: Next.js, Vercel AI SDK, Convex, Google Calendar API, Claude
---

I started building CalPal.ai because I found tools like When2Meet so annoying to use. None of my friends ever followed through with filling them out, and as a result nothing would ever get planned! I wanted to build a calendar assistant that could sync a bunch of schedules together and do things like find meeting times between multiple groups of people automatically, without the endless back-and-forth.

I also just wanted to learn how to make a chatbot and dig a little deeper into all the conversation semantics, saving and context stuff. CalPal was a fun practical way for figuring out how AI agents work with function-calling tools, how to keep conversations stateful across sessions, and how to make scheduling feel natural through chat instead of clicking through forms.

Still a work in progress! 
