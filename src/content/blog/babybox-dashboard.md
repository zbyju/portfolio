---
title: 'Babybox Dashboard'
description: 'The description of what the babybox dashboard project is and what the application can do.'
pubDate: 'Jul 08 2022'
heroImage: '/images/blog/babybox-dashboard.webp'
tags: ["Project"]
---

# Babybox Dashboard, what is it?

The Babybox Dashboard is a web-based tool built for the operational and maintenance staff responsible for babyboxes. It streamlines the process of monitoring, managing, and maintaining these units, making day-to-day tasks easier by collecting and displaying key data.

I originally started working on this project as part of my master’s thesis, rewriting an older version of the system. Since then, I've continued to develop it, turning it into something more powerful and user-friendly. It’s a Progressive Web Application (PWA), so it works like a native app on your phone while still being accessible through the web.

Here's a breakdown of what it can do:

- Collects real-time data like temperatures, voltages, and events from babyboxes
  - Displays this data in detailed charts, complete with annotations for better clarity
  - Rolls it up into quick stats for a high-level view
- Tracks issues and maintenance
  - Logs issues, assigns them for resolution, and tracks them through to completion
  - Manages maintenance schedules and connects them to relevant issues
- Sends custom notifications
  - Staff can create templates for automatic notifications based on specific conditions
  - Keeps the team informed when new issues arise or maintenance is scheduled
- Keeps track of metadata
  - Displays babybox details like location, network configuration, and hospital contacts
- Analyzes battery performance
  - Predicts battery health based on voltage drop-off trends
- Manages users

## Data Collection and Visualization
The system collects babybox data every five minutes, plus any events that happen in real time. This data gives staff a snapshot of what’s going - on at any given moment, and it’s all stored for future reference.

<video width="100%" controls>
  <source src="/images/blog/babybox.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 

Users can dig deeper into this data with an interactive chart. The chart includes filters for things like time range, and staff can easily share the results by copying the URL—filters stay in place so the recipient sees exactly the same view. This makes collaboration smoother and faster.

<video width="100%" controls>
  <source src="/images/blog/chart.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 

## Issue and Maintenance Tracking
The Dashboard helps keep track of everything that needs fixing or checking. Staff can create issues, assign them to team members, and log comments to make sure nothing falls through the cracks. These issues can be grouped with planned maintenance tasks, making it easy to see what needs to be done during the next check-up.

<video width="100%" controls>
  <source src="/images/blog/issues.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 

The goal here was to make it fast and simple to manage everything, so staff can focus on actually solving problems, not wrestling with the tool itself.

## Custom Notification System
One of the useful features is the custom notification system. Users can set up their own notification templates—if a babybox hits a certain temperature, or the voltage drops below a threshold, the app automatically sends an alert. These notifications can go directly to email or show up in the app, making sure the right people know when action is needed.

<video width="100%" controls>
  <source src="/images/blog/notifications.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 

## Babybox Metadata Tracking
On top of monitoring, the app also tracks important details about each babybox. This includes everything from its physical location and GPS coordinates to the network setup and key contacts at the hospital. The location data even integrates with navigation tools to help the maintenance team find the box’s exact spot quickly.

<video width="100%" controls>
  <source src="/images/blog/metadata.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 

## Battery Analysis
One of the more technical features is battery analysis. The system monitors how quickly the battery’s voltage drops during power outages, giving the team an idea of its health. This helps maintenance staff anticipate when a battery might need replacing before it actually dies.

<video width="100%" controls>
  <source src="/images/blog/battery.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 

## User Management
Since the Babybox Dashboard is an internal tool, it’s restricted to authorized personnel only. Admins can add or remove users as needed, and everyone needs to log in to access the system.

<video width="100%" controls>
  <source src="/images/blog/login.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 