---
title: CalPal.ai
description: AI calendar assistant with agentic workflow for natural language scheduling
date: 2025-10-01
author: Lam Pham
# thumbnail: /projects/calpal.jpg
---

# CalPal.ai

**Tech Stack:** Next.js, Vercel AI SDK, Convex, Google Calendar API, Claude

**Duration:** October 2025 – December 2025

## Overview

CalPal.ai is an AI-powered calendar assistant that uses an agentic workflow with function-calling tools to schedule events, find optimal meeting times, and coordinate group availability through natural language interactions.

## Key Features

- **Natural Language Processing:** Schedule events and meetings using conversational language
- **Multi-Calendar Support:** Finds optimal meeting times across multiple calendars
- **Group Coordination:** Automatically coordinates availability for group meetings
- **Persistent Memory:** Maintains context across conversations for intelligent follow-ups
- **Real-Time Streaming:** Uses Vercel AI SDK for streaming responses

## Technical Implementation

### Agentic Workflow
- Built with 7 function-calling tools for autonomous task execution
- Implemented prompt engineering with context injection for accurate intent understanding
- Leveraged Claude AI for natural language understanding and reasoning

### Backend Architecture
- **Convex Database:** Provides persistent memory for stateful multi-turn reasoning
- **Google Calendar API:** Integration for reading and writing calendar events
- **Vercel AI SDK:** Streaming responses and autonomous tool orchestration

### Frontend
- **Next.js:** Server-side rendering and API routes
- Responsive UI for seamless user experience across devices

## Technical Highlights

- Autonomous tool orchestration allows the AI to chain multiple operations
- Context injection maintains conversation history for intelligent responses
- Function-calling enables the AI to perform complex calendar operations
- Streaming responses provide real-time feedback during processing

## Use Cases

- Schedule one-on-one meetings with natural language
- Find optimal meeting times considering multiple participants' calendars
- Reschedule events intelligently based on conflicts
- Set up recurring meetings with complex patterns
- Get meeting suggestions based on preferences and availability

## Links

- **Live Demo:** [Add link if deployed]
- **GitHub:** [Add your repository link]
