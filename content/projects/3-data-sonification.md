---
title: Data Sonification Toolkit
description: Accessible data visualization through sound - Research project at UW Interactive Data Lab
date: 2024-01-05
author: Lam Pham
thumbnail: /images/erie.png
organization: University of Washington, Interactive Data Lab (IDL)
isProject: true
pdfEmbed: /images/ResearchProjectFinal (1).pdf
learnings:
  - title: Custom Ordering & Sequencing System
    content: |
      Designed and implemented a specification system for dynamic ordering of sonification. This allows users to create guided data narratives instead of rigid, linear playback.

      **The Problem**
      - Existing sonifications had fixed, inflexible orderings
      - Couldn't rearrange text, sounds, or markup elements
      - Limited ability to craft compelling data stories with intentional pacing

      **My Solution**
      - Created a specification system where users define an array of order items
      - Each item specifies exactly how the sonification should play out
      - **3 types of items:** markup items, sound items, and text items
      - Enables narrative-driven data experiences instead of just sequential playback

      **Why This Matters**
      - Users can guide listeners through data with intentional storytelling
      - Create emphasis, pacing, and narrative flow in sonifications
      - Transforms data from static charts into immersive audio experiences
  - title: Block-Based Toolkit with Svelte
    content: |
      Built a user-friendly web toolkit for creating sonifications—designed for non-technical users to build complex audio narratives through drag-and-drop blocks.

      **The Context**
      - Had to present my work at an undergraduate research symposium
      - Needed a demo that non-CS people could understand and use
      - Wanted to showcase the custom ordering system I built

      **What I Built**
      - Small website using Svelte for creating sonifications with custom datasets
      - Drag-and-drop block interface for arranging markup, sound, and text items
      - Users can reorder blocks visually to create their data narratives
      - No coding required! Blocks generate the specification behind the scenes

  - title: Multi-Modal Data Narratives
    content: |
      Explored creating rich data-driven narratives using sound—going beyond accessibility to build immersive experiences.

      **The Vision**
      - Instead of just looking at charts and graphs, imagine an immersive experience
      - You hear the data while an article plays out like a movie
      - Guides users through insights with intentional audio storytelling

      **Why Sonification?**
      - Obviously helps visually impaired people consume data
      - But also: creates emotional, narrative-driven data experiences
      - Sound can convey patterns, trends, and outliers in intuitive ways
      - Combines accessibility with storytelling

      **Technical Integration**
      - Integrated D3.js visualizations with real-time audio feedback
      - Users can both see and hear data simultaneously
      - Synchronizing visual and auditory channels to create cohesive stories
      - Multi-sensory data exploration
technologies: TypeScript, Svelte, D3.js, Web Audio API
---

As apart of UW's Interactive Data Lab, I worked with 2 other undergrads and my mentor Hyeok Kim to contriubte to Erie, an open-source datas sonfication library. Data sonification is the idea that instead of seeing data, you hear it. Obviously this helps visually impaired people consume data, but the vision is bigger: creating rich **data-driven narratives** using sound. Imagine an immersive experience where you hear the data and an article plays out like a movie, instead of just looking at charts.

I contributed two main things: First, I designed and implemented a custom ordering/sequencing system for the codebase. Previously, sonifications compiled into rigid orderings, you couldn't rearrange texts or sounds. I built a specification system with **3 types of items** (markup, sound, and text) that lets users define exactly how the sonification plays out, creating those guided narratives.

Second, I presented my work at the UW undergraduate research symposium and built a user-friendly toolkit using Svelte. It was a small website where users make sonifications with their own datasets and order them around using blocks, helping non-CS people to understand.

## Relevant Papers & Links

Github - https://github.com/see-mike-out/erie-web

CHI 2026 Papers - [A Domain-specific Language for Real-time Audio Monitor](https://0d2f0bc53ec40041bef323f40496ed3c.r2.cloudflarestorage.com/pcs/chi26c/chi26c-sub7704-i13.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=8c3c5bf11286f4699c7019eaeac51dfe%2F20260115%2Fenam%2Fs3%2Faws4_request&X-Amz-Date=20260115T014157Z&X-Amz-Expires=7200&X-Amz-SignedHeaders=host&X-Amz-Signature=d8b51136f310c07f35578cb651dae6f4a13f72e1f295a0c9e20feb2dc4460c9e)

EuroVis 2026 Full papers - [Erie-Streaming: A Toolkit for Real-time Audio Monitoring](https://0d2f0bc53ec40041bef323f40496ed3c.r2.cloudflarestorage.com/pcs/eurovis26a/eurovis26a-sub1055-i6.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=8c3c5bf11286f4699c7019eaeac51dfe%2F20260115%2Fenam%2Fs3%2Faws4_request&X-Amz-Date=20260115T014157Z&X-Amz-Expires=7200&X-Amz-SignedHeaders=host&X-Amz-Signature=7fcd4e5ee6f1eef776ef40078652c8940877f3dff96b12255dc9d9c3ad50836b)

Original work - [Erie: A Declarative Grammar for Data Sonification](https://arxiv.org/pdf/2402.00156) 
