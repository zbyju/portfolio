---
title: 'Babybox Dashboard'
description: 'The description of what the babybox dashboard project is and what the application can do.'
pubDate: 'Jul 08 2022'
heroImage: '/images/blog/babybox-dashboard.webp'
tags: ["Project"]
---

# Babybox Dashboard, what is it?

The Babybox Dashboard is an application for internal purposes to make managing and maintaining babyboxes easier for the staff. Its main focus is collecting various forms of data from and about babyboxes, processing them and providing them to the staff to improve their efficiency and make their work easier.

I started developing this application as part of my master's thesis as a rewrite of the old version and then continued working on it further. Currently the application supports:
- Collecting temperatures, voltages and events from babyboxes
  - Displaying them in a comprehensive chart with annotations
  - Aggregating them into quick statistics for overview
- Issue and maintenance tracking
  - Creating issues to keep track of, commenting on them and assigning them for resolution
  - Creating and keeping track of maintenances and issues that need to be resolved
- Custom notification system
  - Create custom notification templates that automatically generate and send notifications
  - Notifications are also sent for issues and maintenances
- Babybox metadata tracking
  - Tracking and displaying information such as address, coordinates, network configuration, hospital staff contact information
- Battery analysis
  - Trying to predict battery quality based on voltage drop-off
- User management

## Data Collection and Visualisation

Babyboxes send their data snapshots every 5 minutes and events whenever they occur and stores them for further use. The staff can see the latest snapshots and events to get the idea of the current situation.

*I also made a Babybox Monitoring Application that is deployed in hospitals for the hospital staff to monitor the babybox on-site.*

## Data Collection and Visualization

The system collects babybox data every five minutes, plus any events that happen in real time. This data gives staff a snapshot of what’s going on at any given moment, and it’s all stored for future reference.

![Data Collection demo](/images/blog/babybox.mp4)

Users can dig deeper into this data with an interactive chart. The chart includes filters for things like time range, and staff can easily share the results by copying the URL—filters stay in place so the recipient sees exactly the same view. This makes collaboration smoother and faster.

![Data Visualization demo](/images/blog/chart.mp4)

## Issue and Maintenance Tracking

The staff can use Babybox Dashboard to quickly create issues to track them for future fixing or for statistics. Each issue can be assigned to a staff member; additionally issues can be assigned to a maintenance to track what needs to be done on the next maintenance of that babybox.

![Issue and maintenance demo](/images/blog/issues.mp4)


Maintenances are created and can be planned for any babybox, they are used for tracking when the next maintenance needs to be done and what issues need to be resolved. Similarly to issues, they can also be assigned to a staff member.

Assigned issues and maintenances appear on the user's profile; any change made to them generates an automatic notification.

![Notification demo](/images/blog/notifications.mp4)

Users can create custom notification templates to specify the conditions when they want to receive notifications. Users choose the variable (any temperature or voltage value) and a comparison, when the condition is met, the notification is generated.

Each generated notification is displayed in the application and sent to the specified email addresses.

## Babybox Metadata


![Metadata demo](/images/blog/metadata.mp4)

## Battery Analysis

One of the more technical features is battery analysis. The system monitors how quickly the battery’s voltage drops during power outages, giving the team an idea of its health. This helps maintenance staff anticipate when a battery might need replacing before it actually dies.

![Battery analysis demo](/images/blog/battery.mp4)

## User Management

Since the Babybox Dashboard is an internal tool, it’s restricted to authorized personnel only. Admins can add or remove users as needed, and everyone needs to log in to access the system.

![Login demo](/images/blog/login.mp4)
