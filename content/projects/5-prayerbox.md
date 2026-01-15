---
title: PrayerBox
description: Digital prayer request and community support platform
date: 2024-11-01
author: Lam Pham
thumbnail: /images/prayerbox.png
isProject: true
organization: Digital prayer request and community support platform
learnings:
  - title: Passwordless Authentication
    content: |
      Created a passwordless authentication system to allow users to sign in with just their email and a confirmation code.

      **Why Passwordless?**
      - Wanted to make auth super simple for our Christian community users
      - No need to remember passwords, just use email!
      - More user-friendly and accessible for non-technical users

      **Implementation Strategy**
      - Utilized InstantDB Magic Code Auth (relatively new service at the time)
      - Users provide their email
      - `handleSubmit` function fires `db.auth.signInWithMagicCode`
      - System sends them a login code via email
      - Users authenticate with the code

      **Results & Key Learnings**
      - First time implementing auth from scratch!
      - InstantDB was new, so learned to read documentation and adopt early-stage tech
      - ~300 users have logged in via this system since launch
      - Tracked user deletions via Discord webhooks for monitoring
      - 75% of deletions were user-initiated (cleaning up inactive accounts)
      - 25% were admin-performed for problematic accounts
      - 95% reduction in support tickets related to account deletion requests
  - title: App Components and Pages
    content: |
      Developed a collection of reusable Tailwind/Material-UI components that could be used throughout the app, speeding up development and maintaining consistency.

      **The Components I Built**
      - `Header Bar` - Navigation bar with app branding and user authentication status
      - `Reusable Button` - Consistent button component with multiple variants (primary, secondary, danger)
      - `Empty State Screen` - Friendly placeholder UI when no prayer requests or groups exist
      - `Home Page` - Main feed displaying all prayer requests with real-time updates
      - `Prayer Request Card` - Individual prayer card showing request details, reactions, and prayer count
      - `Group Page` - View group members, shared prayers, and group activity
      - `Create Group Page` - Form interface to create new prayer groups with name and description
      - `Join Group Page` - Interface for discovering and joining existing prayer groups
      - `Leave Group Modal` - Confirmation dialog to prevent accidental group departures
      - `Prayer Request Form` - Composable form to submit new prayer requests to groups
      - `Prayer Request List` - Scrollable feed component rendering multiple prayer cards

      **Component Screenshots**

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin: 1.5rem 0;">
        <img src="/images/pb3.png" alt="Prayer Request Components" style="width: 100%; max-width: 250px; border-radius: 0.5rem; border: 1px solid var(--color-border);" />
        <img src="/images/pb5.png" alt="Group Pages" style="width: 100%; max-width: 250px; border-radius: 0.5rem; border: 1px solid var(--color-border);" />
        <img src="/images/pb6.png" alt="Prayer Forms" style="width: 100%; max-width: 250px; border-radius: 0.5rem; border: 1px solid var(--color-border);" />
        <img src="/images/pb7.png" alt="UI Components" style="width: 100%; max-width: 250px; border-radius: 0.5rem; border: 1px solid var(--color-border);" />
        <img src="/images/pb8.png" alt="App Screens" style="width: 100%; max-width: 250px; border-radius: 0.5rem; border: 1px solid var(--color-border);" />
        <img src="/images/pb9.png" alt="Additional Views" style="width: 100%; max-width: 250px; border-radius: 0.5rem; border: 1px solid var(--color-border);" />
      </div>
technologies: React, Firebase, Node.js, WebSocket, Tailwind CSS
---

After joining some Christian fellowships on campus, I noticed that many people including myself were struggling to stay accountable in praying for one another. We would share testimonies and prayer requests during meetings, but it was difficult to remember to pray for each other throughout the week. I wanted to create a platform that would make it easier for us to share prayer requests and pray for one another. This project was inspired by my desire use my skills in software to develop a creative and simple but effective solutions. I had a bigger role in the creating the pages and components of the app. I worked on this project with one partner, and we were able to garner 50+ users, 100+ posts, and 500+ reactions since our release in October 2024. This was one of my first fleshed out side projects! 
