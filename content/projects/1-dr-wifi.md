---
title: Dr Wifi
description: AI-powered network assistant - 2nd Place at Dubhacks 2025 (T-Mobile)
date: 2025-10-18
author: Lam Pham
thumbnail: /images/drwifi.png
award: 🏆 2nd Place at Dubhacks 2025 (T-Mobile Challenge)
isProject: true
learnings:
  - title: AI Agent Workflow
    content: |

      **Prompt Engineering with CrewAI**
      - Each agent had a defined role, backstory, and goals
      - Clear role separation improved focus and output quality
      - Made prompt engineering feel more like character design than template writing
      - My first exposure to agentic AI, orchestration, and prompt engineering! 

      **Monitoring Agent** - 24/7 network health surveillance
      - Continuous ping monitoring
      - WiFi RSSI reader for signal strength
      - Packet loss counter
      - Triggers diagnosis agent when issues detected
      - Personality: vigilant watchdog character

      **Diagnosis Agent** - Root cause investigator
      - Pings multiple targets to isolate router vs. internet issues
      - Traceroute to identify problematic hops
      - WiFi channel scanner to detect interference
      - DNS server performance checks
      - ARP table verification for local network devices
      - Personality: methodical detective persona

      **Solution Agent** - LLM-powered recommendations
      - Analyzes findings from diagnosis agent
      - Generates actionable solutions using the local SLM
      - Provides specific troubleshooting steps based on root cause
      - Personality: helpful technician role


  - title: AI on the EDGE!
    content: |
      **Raspberry Pi**

      We wanted to deploy a local LLM onto a Raspberry PI, allowing for our agents to be used with no external connections. The idea is that if a user's Wifi went down, our product would still be able to diagnose and reccomend troubleshooting solutions. This came with many limiations on space and computing power, however gave us an amazing oppurtunity to learn how to optmize our resources. 

      **Hybrid Tool-AI Workflow**
      - Took hyrbid approach of raw networking tools and AI calls
      - Monitoring Agent primarily uses raw networking tools, diagnosis and solution agent uses the LLM 
      - AI layer only used for reasoning and solution generation
      - This hybrid approach was critical for performance on tiny hardware

      **Data Normalization Strategy**
      - Standardized all agent-to-agent communication in JSON format
      - Critical for passing metrics between monitoring → diagnosis → solution agents
      - Ensured consistent data structure despite different tool outputs
      - Made debugging and agent handoffs much smoother
      - Allowed for optimized use of resources - we found that normalizing the data handoffs allowed our AI to use less resources, allowing for faster and more reliable outputs 

  - title: Event-Driven Architecture
    content: |
      **Seamless User Experience**

      We designed a system that automatically triggers when network issues are detected, rather than requiring manual intervention. This allows users to seamlessly find solutions for their network connections, eliminating manual overhead.

      **How It Works**
      - Monitoring agent continuously polls network metrics in the background
      - When thresholds are exceeded (high latency, packet loss, low RSSI), an event is triggered
      - Event automatically kicks off the diagnosis agent
      - Diagnosis agent passes findings to solution agent
      - All happens autonomously without user input

      **Why This Matters**
      - Reduced troubleshooting time—issues are detected instantly
      - Enabled proactive network monitoring instead of reactive fixes
      - User only sees the diagnosis and solution, not the intermediate steps
      - System operates 24/7 without manual checks

      **Event Triggers**
      - High ping latency (>100ms sustained)
      - Packet loss threshold exceeded (>5%)
      - WiFi signal strength drops (RSSI below -70 dBm)
      - DNS resolution failures
technologies: Python, CrewAI, Flask, React, Ollama, Raspberry Pi
---

Dr Wifi is an event-driven network diagnostic assistant that automatically monitors your WiFi health and diagnoses issues using AI! When your network degrades, Dr Wifi detects it instantly, analyzes TCP/IP metrics, and generates actionable solutions—all running locally on a Raspberry Pi with zero cloud dependencies.
