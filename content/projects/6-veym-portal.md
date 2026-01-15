---
title: VEYM IT Team
description: Supporting the Vietnamese Eucharistic Youth Movement through technology
date: 2024-03-01
author: Lam Pham
thumbnail: /images/tntt.png
organization: Volunteer software development for the Vietnamese Eucharistic Youth Movement, my church youth group! 
isProject: true
learnings:
  - title: Delete User
    content: |
      Users and admins are able to navigate account settings and delete profiles (soft delete)

      **Backend Implementation:**
      Revised the purge DELETE endpoint in the profile controller to soft delete users, implementing and utilizing the stored procedure [dbo].[DeleteUserSoft].

      **Frontend Workflow:**
      Created a button on the Account Settings page that triggers a modal with warnings and confirmations to delete the profile. This calls the updated endpoint, displays a toast notification, signs out the user, and navigates them back to the homepage.

      **Monitoring and Logging:**
      Implemented Discord webhooks to log deleted user details, including admin information if applicable. Logs are displayed in the #bot-spam channel for visibility and accountability.

      **Results and Key Learnings:**
      - First main experience with developing a full-stack feature end-to-end!
      - ~300 number of users have been deleted and logged via Discord webhooks since launch
      - 75% of deletions were initiated by users to remove inactive or problematic accounts, while 25% were performed by admins.
      - 95% reduction in support tickets related to account deletion requests.

  - title: FAQs and Feedback
    content: |
      Created a platform designed to help users easily naviagte and utilize our services and get additional support 

      **Overview:**
      When I joined the team, I noticed that many people from my home church were reaching out with similar questions, such as: 'I accidentally created two accounts,' 'I forgot my login details,' or 'I can't access my account.' To address these common issues, I pitched an FAQ page to help users navigate our services more easily and access the support they need.

      **Specific Contributions:**
      - Designed and implemented a new FAQ table in the database to improve content organization and retrieval efficiency.
      - Utilized Chakra UI to map and display FAQs dynamically on the web page, enhancing the user interface and experience.
      - Developed and integrated a feedback submission modal and corresponding API endpoint, enabling users to provide feedback directly within the application.
      - Implemented a Discord webhook to log submitted feedback details, including user information and feedback content, if applicable. Logs are displayed in the #bot-spam channel for improved visibility and accountability

      **Results and Key Learnings:**
      - Simple, user-friendly solutions can have a big impact! Effective cross team communication and automated notifications contribute to increased support efficiency.
      - 90% increase in use of existing features such as delete and merge account without having to submit a support ticket since launch.
      - 75% decrease in repeat user questions, showing the effectiveness of the FAQ section in resolving common issues.
      - 95% of support tickets receive a response within 3 days of submission.

      **Relevant links** - https://members.veym.net/faq


  - title: Cache System
    content: |
      Developed a caching system by scripting automated cache population and created new routes and schemas for JSON responses

      **Overview:**
      The YouTube API updated its terms of service, bottlenecking the number of allowed API calls. Our website was previously making an API request for each video in a playlist of 40+ videos. To optimize performance, I implemented a caching system that stores the playlist data in a CMS and only queries the API once a day, significantly reducing redundant calls.

      **Strategy:**
      - Utilized Directus CMS to store YouTube playlist JSON responses, including video metadata (e.g., titles, descriptions, thumbnails).
      - Wrote a script to populate the CMS with fresh playlist data from the YouTube API once a day.
      - Configured the frontend/website to query the CMS first for cached data before calling the YouTube API.
      - Adjusted pagination logic on the frontend to efficiently render all 40+ videos from the CMS.

      **Results and Key Learnings:**
      - First time implementing a cache! I now understand how caching can significantly improve performance by reducing redundant API calls and minimizing server load.
      - Fixed critical bug on our website that was causing downtime.

      **Relevant Links: **
      - https://veym.net/eucharistic-revival/wonders-of-the-mass
      - https://veym.net/eucharistic-revival/wonders-of-the-real-presence
      - https://veym.net/news

      

  - title: SMS Response Identification
    content: |
      Implemented a system to link mass text responses to registered user data, enabling seamless identification and display of information in our #vdh-notifications Discord channel

      **Overview:**
      Every four years we have a National Conference (Về Đất Hứa) in which we have a system to send mass texts. If someone responds to the number, it fires a webhook and we can see the message and phone number in Discord, in the #vdh-notifications channel. The goal is to query the registration data to match the name of the person to the phone number.

      **Strategy:**
      - Create processPhoneNumbers function that makes all the phone numbers into the same format (ex. 10 digit 1234567890) so they can be easily filtered and queried. Originally they were inputted in different ways in the database (ex. 1234567890, 123-456-7890, (123) 456-7890).
      - Create findNameByPhone function that passes in processed phone number from above and finds name associated with it from CMS.
      - Add that result to discord webhook.

      **Results and Key Learnings:**
      - Processing different inputs and regulating them to a standard format is a great way to clean up data.
      - Researched and implemented an efficient algorithm to query the database and return the name associated with a phone number.

  - title: Code Maintenance
    content: |
      **A collection of smaller PRs!**
      - Enhanced the admin console to display the user's login method when looking up their profile.
      - Created a misc tab on the admin console with a button that will clear the cache of the MembershipSystem API. Allows developers to see changes without having to wait for the cache to expire.
technologies: C# .NET Core, TypeScript, React, Next.js, SQL, Azure, Chakra UI, Directus
---

The VEYM IT Team is a small team of around 15 engineers and designers that aim to support the Vietnamese Eucharistic Youth Movement's mission through technology. We currently serve over 5,000 youth community members across the United States with our two main services, the [members portal](https://members.veym.net/) and the [main website](https://veym.net/). The members portal is responsible for keeping track of all of our youth leaders, for legal and membership purposes, and the main website is a resource for people to learn more about VEYM and the Catholic faith. 

I've been involved with VEYM since childhood and now I get to use my software development skills to give back. This project combines my passion for technology with my dedication to helping others, offering professional growth alongside personal fulfillment. This was my first exposure to full-stack development! 
