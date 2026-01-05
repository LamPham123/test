---
title: Dr Wifi
description: AI-powered network diagnostic assistant - 2nd Place at Dubhacks 2025 (T-Mobile)
date: 2025-10-01
author: Lam Pham
# thumbnail: /projects/dr-wifi.jpg
---

# Dr Wifi

**Award:** 2nd Place at Dubhacks 2025 (T-Mobile Challenge)

**Tech Stack:** Python, CrewAI, Flask, React, Ollama

## Overview

Dr Wifi is an event-driven network assistant that uses an AI agent workflow to automatically monitor network health, diagnose issues, and generate actionable solutions with 90% diagnostic accuracy.

## Key Features

- **Automated Network Monitoring:** Continuously monitors network health and automatically triggers diagnostics upon degradation
- **AI Agent Workflow:** Built with CrewAI for intelligent diagnostic reasoning and solution generation
- **Edge Computing:** Deployed a Small Language Model (SLM) on Raspberry Pi for local AI inference
- **Zero Cloud Dependencies:** Performs all analysis locally with offline functionality
- **Fast Analysis:** Analyzes TCP/IP performance metrics (latency, packet loss, WiFi RSSI) in under 30 seconds

## Technical Implementation

- Developed event-driven architecture to trigger diagnostics automatically when network issues are detected
- Implemented AI agent workflow achieving 90% diagnostic accuracy
- Deployed SLM on Raspberry Pi edge device for local inference without cloud dependencies
- Built Flask backend API and React frontend for user interaction
- Integrated network performance monitoring for real-time TCP/IP metrics analysis

## Impact

- 90% diagnostic accuracy in identifying network issues
- Sub-30 second analysis time for complete network diagnostics
- Zero reliance on cloud services - fully offline capable
- Automatic triggering and resolution suggestions reduce manual troubleshooting time

## Links

- **GitHub:** https://github.com/LamPham123/dubhacks25
<!-- - **Demo:** [Add demo link if available] -->
